<template>
  Connect Your Wallet:
  <div style="display: inline-block; margin-left: 4px">
    <MetamaskButton @connected="onWalletConnected" />
  </div>

  <div class="form-container">
    <input v-model="authorizedApp" placeholder="Enter authorized app address" />
    <button
      :disabled="!isWalletConnected || isLoadingGrant"
      @click="grantAccess"
    >
      {{ isLoadingGrant ? 'Processing...' : 'Grant Access' }}
    </button>
    <div v-if="grantError" class="error">{{ grantError }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IExecDataProtectorCore } from '@iexec/dataprotector';
import MetamaskButton from './MetamaskButton.vue';

const web3Provider = ref(null);
const isWalletConnected = ref(false);
const protectedData = ref(null);
const authorizedApp = ref('');
const isLoadingGrant = ref(false);
const grantError = ref(null);

if (typeof window !== 'undefined') {
  protectedData.value = localStorage.getItem('protectedDataAddress')
    ? { address: localStorage.getItem('protectedDataAddress') }
    : null;
}

const onWalletConnected = (provider) => {
  web3Provider.value = provider;
  isWalletConnected.value = true;
};

const grantAccess = async () => {
  try {
    if (!web3Provider.value) {
      throw new Error('Wallet not connected');
    }
    if (!protectedData?.value?.address) {
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

    console.log('protectedData :', protectedData?.value?.address);
    console.log('authorizedApp :', authorizedApp.value);
    console.log(
      'authorizedUser : ',
      '0x0000000000000000000000000000000000000000'
    );

    const grantedAccess = await dataProtectorCore.grantAccess({
      protectedData: protectedData?.value?.address,
      authorizedApp: authorizedApp.value,
      authorizedUser: '0x0000000000000000000000000000000000000000',
    });
    console.log('Access granted:', grantedAccess);
  } catch (error) {
    grantError.value = error.message;
    console.error('Error granting access:', error);
  } finally {
    isLoadingGrant.value = false;
  }
};
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
