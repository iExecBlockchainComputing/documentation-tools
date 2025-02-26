<template>
  <div class="protect-data-container">
    <div class="wallet-section">
      Connect Your Wallet:
      <div class="ml-2 inline-block">
        <ReownButton @connected="onWalletConnected" />
      </div>
    </div>

    <div class="form-container">
      <Button
        :disabled="!isWalletConnected || isLoadingRevoke"
        @click="revokeAccess"
        class="protect-button"
      >
        {{ isLoadingRevoke ? 'Processing...' : 'Revoke All Access' }}
      </Button>
      <div v-if="revokeError" class="error-note">{{ revokeError }}</div>
    </div>

    <div v-if="revokedAccess" class="success-note">
      <div class="success-header">
        <div class="success-icon">
          <Icon icon="mdi:check" height="24" />
        </div>
        All access has been revoked for this protected data
      </div>

      <p class="address-label">Protected data:</p>
      <div class="address-container">{{ protectedData.address }}</div>

      <p class="address-label">Transaction Hash:</p>
      <div class="address-container">{{ revokedAccess.txHash }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import Button from './ui/Button.vue';
import ReownButton from './ReownButton.vue';
import { useAccount } from '@wagmi/vue';

const { connector } = useAccount();
const {
  web3Provider,
  isWalletConnected,
  protectedDataAddress,
  onWalletConnected,
} = useWalletConnection();

const isLoadingRevoke = ref(false);
const revokeError = ref(null);
const revokedAccess = ref(null);

if (typeof window !== 'undefined') {
  protectedDataAddress.value = localStorage.getItem('protectedDataAddress')
    ? { address: localStorage.getItem('protectedDataAddress') }
    : null;
}

const revokeAccess = async () => {
  try {
    if (!web3Provider.value) {
      const provider = await connector.value.getProvider();
      if (!provider) {
        throw new Error('Wallet not connected');
      }
      web3Provider.value = provider;
    }
    if (!protectedDataAddress?.value?.address) {
      throw new Error(
        'Missing protected data address. Go back to the previous page and protect something.'
      );
    }
    isLoadingRevoke.value = true;
    revokeError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value, {
      iexecOptions: {
        smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec',
      },
    });

    const revokedAccessResult = await dataProtectorCore.revokeAllAccess({
      protectedData: protectedDataAddress?.value?.address,
    });
    console.log('Access revoked:', revokedAccessResult);
    revokedAccess.value = revokedAccessResult;
  } catch (error) {
    revokeError.value = error.message;
    console.error('Error revoking access:', error);
  } finally {
    isLoadingRevoke.value = false;
  }
};
</script>

<style scoped>
.protect-data-container {
  width: 100%;
  margin: 2rem 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
  width: 100%;
}

.protect-button {
  width: 100%;
}

.error-note {
  background: rgba(255, 59, 48, 0.1);
  color: rgb(255, 59, 48);
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
}

.success-note {
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(52, 199, 89, 0.1),
    rgba(52, 199, 89, 0.05)
  );
  border-radius: var(--border-radius);
  padding: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.success-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  color: rgb(52, 199, 89);
  font-weight: 500;
}

.success-icon {
  background: rgb(52, 199, 89);
  color: white;
  border-radius: 50%;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.address-label {
  margin: 1rem 0 0.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.address-container {
  background: var(--vp-c-bg-soft);
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  font-family: monospace;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  word-break: break-all;
}

@media (max-width: 768px) {
  .protect-data-container {
    margin: 1rem 0;
  }
}
</style>
