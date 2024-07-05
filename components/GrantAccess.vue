<template>
  Connect Your Wallet:
  <div style="display: inline-block; margin-left: 4px">
    <MetamaskButton @connected="onWalletConnected" />
  </div>

  <!-- test deploy -->

  <div class="form-container">
    <input v-model="authorizedApp" placeholder="Enter authorized app address" />
    <button
      :disabled="!isWalletConnected || isLoadingGrant"
      @click="grantAccess"
    >
      {{ isLoadingGrant ? 'Processing...' : 'Grant Access' }}
    </button>
    <div v-if="grantError" class="error">{{ grantError }}</div>
    <div v-if="grantedAccess" class="protected-data-container">
      <div class="icon-container">
        <i class="checkmark-icon">✓</i>
      </div>
      <p class="granted-title">
        Access has been granted to you and the iExec Application
      </p>
      <p>You can now use the protected data with the iExec App.</p>

      <p><strong>Protected data:</strong> {{ protectedData.address }}</p>
      <p><strong>Authorized iExec App:</strong> {{ authorizedApp }}</p>
      <p>
        <strong
          >Authorized user (it means that everybody is allow to use this
          protected data):</strong
        >
        {{ '0x0000000000000000000000000000000000000000' }}
      </p>
      <p>
        <strong
          >Dataset Price (oohh interesting it means that we could set a price to
          the protected data):</strong
        >
        {{ grantedAccess.datasetprice }}
      </p>
      <!-- Add more fields as necessary -->
    </div>
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
const grantedAccess = ref(null); // Reactive variable to store the granted access data

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

    const grantedAccessResult = await dataProtectorCore.grantAccess({
      protectedData: protectedData?.value?.address,
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

.protected-data-container {
  background-color: #e8f5e9;
  margin-top: 50px !important;
  border: 1px solid #4caf50;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.icon-container {
  margin-bottom: 10px;
}

.checkmark-icon {
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 18px;
}

.granted-title {
  color: #4caf50;
  margin-bottom: 10px;
  font-size: 20px;
}

.link-text {
  margin-bottom: 15px;
}

.link-text a {
  color: #4caf50;
  text-decoration: none;
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
