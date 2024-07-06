<template>
  Connect Your Wallet:
  <div class="ml-2 inline-block">
    <MetamaskButton @connected="onWalletConnected" />
  </div>

  <div class="form-container">
    <input
      v-model="contentToProtect"
      placeholder="Enter some text to protect"
    />
    <Button
      :disabled="!isWalletConnected || isLoadingProtect"
      @click="protectData"
    >
      {{ isLoadingProtect ? 'Processing...' : 'Protect Data' }}
    </Button>
    <div v-if="protectError" class="error">{{ protectError }}</div>
  </div>

  <div
    v-if="protectedDataAddress"
    class="protected-data-container border border-success text-on-bg-success"
  >
    <div class="flex items-center justify-center gap-x-2 text-2xl text-success">
      <div class="inline-block rounded-full bg-success p-1.5 text-white">
        <Icon icon="mdi:check" height="24" />
      </div>
      Your data has been protected!
    </div>
    <p class="address-label mt-2">Your protected data address:</p>
    <p class="address">{{ protectedDataAddress }}</p>
    <p>
      You can check it on
      <a
        :href="
          'https://explorer.iex.ec/bellecour/dataset/' + protectedDataAddress
        "
        class="!text-success !no-underline hover:!underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        the iExec explorer
      </a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import Button from './ui/Button.vue';
import MetamaskButton from './MetamaskButton.vue';

const web3Provider = ref(null);
const isWalletConnected = ref(false);
const protectedDataAddress = ref('');
const contentToProtect = ref('');
const isLoadingProtect = ref(false);
const protectError = ref(null);

if (typeof window !== 'undefined') {
  const savedProtectedDataAddress = localStorage.getItem(
    'protectedDataAddress'
  );
  if (savedProtectedDataAddress) {
    protectedDataAddress.value = savedProtectedDataAddress;
  }
}

const onWalletConnected = (provider) => {
  web3Provider.value = provider;
  isWalletConnected.value = true;
};

async function protectData() {
  try {
    if (!web3Provider.value) {
      throw new Error('Wallet not connected');
    }
    if (!contentToProtect.value) {
      throw new Error('Content is empty');
    }
    isLoadingProtect.value = true;
    protectError.value = null;
    const dataProtectorCore = new IExecDataProtectorCore(web3Provider.value, {
      iexecOptions: {
        smsURL: 'https://sms.scone-debug.v8-bellecour.iex.ec',
      },
    });
    const createdProtectedData = await dataProtectorCore.protectData({
      data: {
        email: contentToProtect.value,
      },
      name: 'helloWorld',
    });
    console.log('createdProtectedData', createdProtectedData);

    localStorage.setItem('protectedDataAddress', createdProtectedData.address);
  } catch (error) {
    protectError.value = error.message;
    console.error('Error protecting data:', error);
  } finally {
    isLoadingProtect.value = false;
  }
}
</script>

<style scoped>
.form-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input:focus {
  border-color: #fcd15a;
}

.error {
  color: white;
  background-color: red;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
}

.protected-data-container {
  background-color: #e8f5e9;
  margin-top: 50px !important;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.address-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.address {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  word-break: break-all;
}
</style>
