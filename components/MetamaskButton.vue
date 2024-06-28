<template>
  <button @click="connectWallet" :disabled="isConnected">
    {{ isConnected ? 'Wallet Connected' : 'Connect Wallet' }}
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MetamaskButton',
  emits: ['connected'],
  setup(_, { emit }) {
    const isConnected = ref(false);

    const connectWallet = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x86',
                chainName: 'iExec Sidechain',
                nativeCurrency: {
                  name: 'xRLC',
                  symbol: 'xRLC',
                  decimals: 18,
                },
                rpcUrls: ['https://bellecour.iex.ec'],
                blockExplorerUrls: ['https://blockscout-bellecour.iex.ec'],
              },
            ],
          });
          isConnected.value = true;
          emit('connected', window.ethereum);
        } else {
          alert('Please install MetaMask!');
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    };

    return {
      isConnected,
      connectWallet,
    };
  },
};
</script>
