<template>
  <div class="form-container">
    <div class="form-box">
      <h1 class="title">Protect your email address</h1>
      <v-text-field
        v-model="email"
        type="email"
        label="Email"
        variant="outlined"
        :error="!isValidEmail"
        :error-messages="
          !isValidEmail ? 'Please enter a valid email address' : ''
        "
        @input="validateEmail"
        class="mt-3"
      ></v-text-field>
      <v-text-field
        v-model="name"
        type="text"
        label="Name"
        variant="outlined"
        class="mt-3"
      ></v-text-field>
      <v-alert v-if="errorProtect" type="error" class="mt-3 mb-2">
        <h6>Creation failed</h6>
        {{ errorProtect }}
      </v-alert>
      <v-btn
        v-if="!loadingProtect"
        @click="protectedDataSubmit"
        color="primary"
        class="submit-btn mt-5 mb-5"
      >
        Create
      </v-btn>
      <v-alert
        v-if="protectedData && !errorProtect"
        type="success"
        class="mt-3 mb-2"
      >
        <h6>Your data has been protected!</h6>

        :href="IEXEC_EXPLORER_URL + protectedData" target="_blank"
        class="success-link" > You can check it here

        <p>
          Your protected data address:
          <span class="protected-data-address">{{ protectedData }}</span>
        </p>
      </v-alert>
      <v-progress-circular
        v-if="loadingProtect"
        indeterminate
        color="primary"
        class="mt-5 mb-5"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IExecDataProtector } from '@iexec/dataprotector';
import { IEXEC_EXPLORER_URL } from '../utils/config';

const props = defineProps({
  protectedData: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:protectedData']);

const loadingProtect = ref(false);
const errorProtect = ref('');
const name = ref('');
const email = ref('');
const isValidEmail = ref(true);
const metamaskProvider = ref(null);

onMounted(async () => {
  if (typeof window.ethereum !== 'undefined') {
    metamaskProvider.value = window.ethereum;
  } else {
    errorProtect.value = 'MetaMask is not installed';
  }
});

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValidEmail.value = emailRegex.test(email.value);
};

const protectedDataSubmit = async () => {
  errorProtect.value = '';
  if (!email.value) {
    errorProtect.value = 'Please enter a valid email address';
    return;
  }
  if (!metamaskProvider.value) {
    errorProtect.value = 'MetaMask provider is not available';
    return;
  }
  const data = { email: email.value };
  try {
    loadingProtect.value = true;
    // Request account access if needed
    await metamaskProvider.value.request({ method: 'eth_requestAccounts' });
    const dataProtector = new IExecDataProtector(metamaskProvider.value);
    const { address: protectedDataAddress } = await dataProtector.protectData({
      data,
      name: name.value,
    });
    emit('update:protectedData', protectedDataAddress);
    errorProtect.value = '';
  } catch (error) {
    errorProtect.value = String(error);
  }
  loadingProtect.value = false;
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.form-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.submit-btn {
  display: block;
  width: 100%;
}

.success-link {
  color: #4caf50;
  text-decoration: none;
  font-weight: bold;
}

.success-link:hover {
  text-decoration: underline;
}

.protected-data-address {
  font-size: 0.75rem;
  letter-spacing: -0.025em;
  word-break: break-all;
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  margin-top: 0.5rem;
}

:deep(.v-text-field .v-input__details) {
  padding-left: 0;
}
</style>
