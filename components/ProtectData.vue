<template>
  Connect Your Wallet:
  <div style="display: inline-block; margin-left: 4px">
    <MetamaskButton @connected="onWalletConnected" />
  </div>

  <div class="form-container">
    <input
      v-model="contentToProtect"
      placeholder="Enter some text to protect"
    />
    <button
      @click="protectData"
      :disabled="!isWalletConnected || isLoadingProtect"
    >
      {{ isLoadingProtect ? 'Processing...' : 'Protect Data' }}
    </button>
    <div v-if="protectError" class="error">{{ protectError }}</div>
  </div>

  <div v-if="protectedData">
    <h2>Cool you've got your first protected Data</h2>
    <p>
      Please copy and paste the address for the next chapter (it's stored in
      local storage if you want to delete it).
    </p>
    <p>{{ protectedData.address }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import MetamaskButton from './MetamaskButton.vue';

const web3Provider = ref(null);
const isWalletConnected = ref(false);
const protectedData = ref(
  localStorage.getItem('protectedDataAddress')
    ? { address: localStorage.getItem('protectedDataAddress') }
    : null
);
const contentToProtect = ref('');
const isLoadingProtect = ref(false);
const protectError = ref(null);

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
    protectedData.value = await dataProtectorCore.protectData({
      data: {
        email: contentToProtect.value,
      },
      name: 'helloWorld',
    });

    localStorage.setItem('protectedDataAddress', protectedData.value.address);
  } catch (error) {
    protectError.value = error.message;
    console.error('Error protecting data:', error);
  } finally {
    isLoadingProtect.value = false;
  }
}
</script>

<style scoped>
button {
  background-color: #fcd15a;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e3b94d;
}

button:disabled {
  background-color: #888;
  cursor: not-allowed;
}

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
</style>
