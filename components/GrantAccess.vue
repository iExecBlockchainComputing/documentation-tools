<template>
  Connect Your Wallet:
  <div class="ml-2 inline-block">
    <MetamaskButton @connected="onWalletConnected" />
  </div>

  <div class="form-container">
    <input v-model="authorizedApp" placeholder="Enter authorized app address" />
    <Button
      :disabled="!isWalletConnected || isLoadingGrant"
      @click="grantAccess"
    >
      {{ isLoadingGrant ? 'Processing...' : 'Grant Access' }}
    </Button>
    <div v-if="grantError" class="error">{{ grantError }}</div>
    <div
      v-if="grantedAccess"
      class="protected-data-container text-on-bg-success"
    >
      <div
        class="flex items-center justify-center gap-x-2 text-2xl text-success"
      >
        <div class="inline-block rounded-full bg-success p-1.5 text-white">
          <Icon icon="mdi:check" height="24" />
        </div>
        Access has been granted to you and the iExec Application
      </div>

      <p>You can now use the protected data with the iExec App.</p>

      <div>
        <strong>Protected data:</strong>
        <div class="white-block-for-address">
          {{ protectedData.address }}
        </div>
      </div>

      <div class="mt-4">
        <strong>Authorized iExec App:</strong>
        <div class="white-block-for-address">{{ authorizedApp }}</div>
      </div>

      <div class="mt-4">
        <strong> Authorized user </strong
        ><span class="text-sm"
          >(The Zero address means that everybody is allowed to use this
          protected data)</span
        >:
        <div class="white-block-for-address">
          {{ '0x0000000000000000000000000000000000000000' }}
        </div>
      </div>

      <div class="mb-2 mt-4">
        <strong> Dataset Price </strong>
        <span class="text-sm"
          >(oohh interesting it means that we could set a price to the protected
          data)</span
        >:
        <div class="white-block-for-address">
          {{ grantedAccess.datasetprice }}
        </div>
      </div>
    </div>
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
const protectedData = ref(null);
const authorizedApp = ref('');
const isLoadingGrant = ref(false);
const grantError = ref(null);
const grantedAccess = ref(true); // Reactive variable to store the granted access data

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
</style>
