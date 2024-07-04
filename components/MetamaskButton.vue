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
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Switch to the specified chain
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x86', // Hexadecimal for 134
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

          // Set connected state to true
          isConnected.value = true;

          // Emit the connected event
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
