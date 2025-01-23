import { ref } from 'vue';

const walletAddress = ref('');
const isConnected = ref(false);

export function useWallet() {
  return {
    walletAddress,
    isConnected,
  };
}
