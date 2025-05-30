<template>
  <div class="protect-data-container">
    <div class="wallet-section">
      Connect Your Wallet
      <a href="https://chainlist.org/?search=bellecour" target="_blank">
        (iExec network)
      </a>
      :
      <ReownButton />
    </div>

    <div>
      <p>You will sign three things:</p>
      <ol>
        <li>A transaction to create the protected data</li>
        <li>
          A message signature to prove your identity to the production SMS
        </li>
        <li>
          A message signature to prove your identity to the debug SMS (this
          signature is only required during this Hello World tutorial)
        </li>
      </ol>
    </div>

    <div class="form-container">
      <input
        v-model="contentToProtect"
        placeholder="Enter a secret data to protect (e.g. 'My private data / mail / phone / ...')"
        :disabled="!isWalletConnected || isLoadingProtect"
      />
      <Button
        :disabled="!isWalletConnected || isLoadingProtect"
        @click="protectData"
        class="protect-button"
        data-track="protectData"
      >
        {{ isLoadingProtect ? 'Processing...' : 'Protect Data' }}
      </Button>
      <div v-if="protectError" class="error-note">{{ protectError }}</div>
    </div>

    <div v-if="protectedDataAddress" class="success-note">
      <div class="success-header">
        <div class="success-icon">
          <Icon icon="mdi:check" height="24" />
        </div>
        Your data has been protected!
      </div>
      <p class="address-label">Your protected data address:</p>
      <div class="address-container">{{ protectedDataAddress }}</div>
      <p class="explorer-link">
        You can check it on
        <a
          :href="`https://explorer.iex.ec/bellecour/dataset/${protectedDataAddress}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          the iExec explorer
        </a>
      </p>
      <p class="explorer-link">
        Or view your encrypted data on
        <a
          :href="'https://ipfs.io/ipfs/' + protectedDataIpfsAddress"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPFS
        </a>
        <br />
        <span class="encrypted-note">
          😊 Ohh damn: you can download the data on IPFS but you can't see the
          content 🔒
        </span>
      </p>
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
  protectedDataIpfsAddress,
} = useWalletConnection();

const contentToProtect = ref('');
const isLoadingProtect = ref(false);
const protectError = ref(null);

async function protectData() {
  try {
    if (!web3Provider.value) {
      const provider = await connector.value.getProvider();
      if (!provider) {
        throw new Error('Wallet not connected');
      }
      web3Provider.value = provider;
    }
    if (!contentToProtect.value) {
      throw new Error('Content is empty');
    }
    isLoadingProtect.value = true;
    protectError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value);
    const createdProtectedData = await dataProtectorCore.protectData({
      data: {
        secretText: contentToProtect.value,
      },
      name: 'helloWorld',
      allowDebug: true,
    });
    console.log('createdProtectedData', createdProtectedData);

    const ipfsCid = createdProtectedData.multiaddr.split('/').pop();

    protectedDataAddress.value = createdProtectedData.address;
    contentToProtect.value = '';
    protectedDataIpfsAddress.value = ipfsCid;
    localStorage.setItem('protectedDataAddress', createdProtectedData.address);
    localStorage.setItem('protectedDataIpfsAddress', ipfsCid);
  } catch (error) {
    protectError.value = error.message;
    console.error('Error protecting data:', error);
  } finally {
    isLoadingProtect.value = false;
  }
}
</script>

<style scoped>
.protect-data-container {
  width: 100%;
  margin: 2rem 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 250px;
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

.explorer-link {
  margin-top: 0.75rem;
  font-size: 0.95rem;
}

.explorer-link:first-of-type {
  margin-top: 1rem;
}

.explorer-link a {
  color: rgb(52, 199, 89);
  text-decoration: none;
  font-weight: 500;
}

.explorer-link a:hover {
  text-decoration: underline;
}

.encrypted-note {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

@media (max-width: 768px) {
  .protect-data-container {
    margin: 1rem 0;
  }
}
</style>
