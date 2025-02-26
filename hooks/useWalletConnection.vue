<script>
import { ref, onMounted } from 'vue';
import { useAccount } from '@wagmi/vue';

export function useWalletConnection() {
  const { isConnected, address: userAddress } = useAccount();

  const web3Provider = ref(null);
  const isWalletConnected = ref(isConnected);
  const protectedDataAddress = ref('');
  const protectedDataIpfsAddress = ref('');

  const initializeData = () => {
    if (typeof window !== 'undefined') {
      const savedProtectedDataAddress = localStorage.getItem(
        'protectedDataAddress'
      );
      const savedProtectedDataIpfsAddress = localStorage.getItem(
        'protectedDataIpfsAddress'
      );
      if (savedProtectedDataAddress) {
        protectedDataAddress.value = savedProtectedDataAddress;
      }
      if (savedProtectedDataIpfsAddress) {
        protectedDataIpfsAddress.value = savedProtectedDataIpfsAddress;
      }
    }
  };

  onMounted(() => {
    initializeData();
  });

  return {
    web3Provider,
    isWalletConnected,
    userAddress,
    protectedDataAddress,
    protectedDataIpfsAddress,
  };
}
</script>
