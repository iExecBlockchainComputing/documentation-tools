<template>
  <div class="coupon-container">
    <div v-if="!walletAddress" class="connect-section">
      <div class="connect-message">
        <p>
          <b>
            🔑 Get your unique coupon code (it will be asked during the voucher
            claim process)
          </b>
        </p>
      </div>
      <ReownButton />
    </div>

    <div v-else class="code-section">
      <div class="code-display">
        <div class="code-label">Your Coupon Code:</div>
        <div class="code-wrapper">
          <div class="code-value" ref="codeElement">
            <strong>{{ couponCode }}</strong>
            <button
              class="copy-button"
              style="margin: 5px 0px 0px 5px"
              @click="copyCode"
              :class="{ copied: copied }"
              title="Copy to clipboard"
            >
              <svg
                v-if="!copied"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path
                  d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                ></path>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ReownButton from './ReownButton.vue';
import { useAccount } from '@wagmi/vue';

const { address: walletAddress } = useAccount();

const copied = ref(false);
const codeElement = ref(null);

const couponCode = computed(() => {
  if (!walletAddress.value) return '';
  return `HELLO${walletAddress.value.slice(2, 10).toUpperCase()}`;
});

async function copyCode() {
  try {
    await navigator.clipboard.writeText(couponCode.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy code:', err);
  }
}
</script>
