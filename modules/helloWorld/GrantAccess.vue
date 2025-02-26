<template>
  <div class="protect-data-container">
    <div class="wallet-section">
      Connect Your Wallet:
      <ReownButton @connected="onWalletConnected" />
    </div>
    <div>
      <p>You will sign two messages:</p>
      <ol>
        <li>A message granting access to the iApp</li>
        <li>
          An authentication message to post your granted access on a
          broadcasting service (iExec marketplace)
        </li>
      </ol>
    </div>

    <div class="form-container">
      <input
        v-model="authorizedApp"
        placeholder="Enter authorized app address"
        :disabled="!isWalletConnected"
      />
      <Button
        :disabled="!isWalletConnected || isLoadingGrant"
        @click="grantAccess"
        class="protect-button"
        data-track="grantAccess"
      >
        {{ isLoadingGrant ? 'Processing...' : 'Grant Access' }}
      </Button>
      <div v-if="grantError" class="error-note">{{ grantError }}</div>
    </div>

    <div v-if="grantedAccess" class="success-note">
      <div class="success-header">
        <div class="success-icon">
          <Icon icon="mdi:check" height="24" />
        </div>
        Access has been granted to Bob and the iApp
      </div>

      <p class="address-label">Protected data:</p>
      <div class="address-container">{{ protectedDataAddress }}</div>

      <p class="address-label">Authorized iExec App:</p>
      <div class="address-container">{{ authorizedApp }}</div>

      <p class="address-label">
        Authorized user
        <span class="note-text">
          (As we don't have Bob wallet we use the Zero address to grant access
          to all users for the demo)
        </span>
        :
      </p>
      <div class="address-container">
        {{ '0x0000000000000000000000000000000000000000' }}
      </div>

      <p class="address-label">
        Dataset Price
        <span class="note-text">
          (oohh interesting it means that we could set a price to the protected
          data)
        </span>
        :
      </p>
      <div class="address-container">{{ grantedAccess.datasetprice }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import Button from '../../components/ui/Button.vue';
import ReownButton from './ReownButton.vue';
import { useAccount } from '@wagmi/vue';
import { useWalletConnection } from '../../hooks/useWalletConnection.vue';

const { connector } = useAccount();
const {
  web3Provider,
  isWalletConnected,
  protectedDataAddress,
  onWalletConnected,
} = useWalletConnection();

const authorizedApp = ref('');
const isLoadingGrant = ref(false);
const grantError = ref(null);
const grantedAccess = ref(null);

const grantAccess = async () => {
  try {
    if (!web3Provider.value) {
      const provider = await connector.value.getProvider();
      if (!provider) {
        throw new Error('Wallet not connected');
      }
      web3Provider.value = provider;
    }
    if (!protectedDataAddress?.value) {
      throw new Error(
        'Missing protected data address. Go back to the previous page and protect something.'
      );
    }
    isLoadingGrant.value = true;
    grantError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value, {
      iexecOptions: {
        smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec',
      },
    });

    const grantedAccessResult = await dataProtectorCore.grantAccess({
      protectedData: protectedDataAddress?.value,
      authorizedApp: authorizedApp.value,
      authorizedUser: '0x0000000000000000000000000000000000000000',
    });
    console.log('Access granted:', grantedAccessResult);
    grantedAccess.value = grantedAccessResult; // Store the result in the reactive variable
  } catch (error) {
    grantError.value = error.message;
    console.error('Error granting access:', error);
  } finally {
    isLoadingGrant.value = false;
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

input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--border-radius);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  transition: var(--transition);
}

input:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(252, 209, 90, 0.1);
}

input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
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

.note-text {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: normal;
}

@media (max-width: 768px) {
  .protect-data-container {
    margin: 1rem 0;
  }
}
</style>
