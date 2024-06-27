<!-- MetamaskButton.vue -->
<template>
  <div>
    <button @click="connectToMetaMask">{{ buttonText }}</button>
    <p v-if="account">Connected account: {{ account }}</p>
  </div>
</template>

<script>
const IEXEC_CHAIN_ID = '0x86';

export default {
  data() {
    return {
      account: null,
      buttonText: 'Connect to MetaMask',
    };
  },
  methods: {
    async connectToMetaMask() {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Check and switch to iExec chain if necessary
          await this.checkCurrentChain();

          // Get the user's account
          const accounts = await window.ethereum.request({
            method: 'eth_accounts',
          });
          this.account = accounts[0];
          this.buttonText = 'Connected';
        } catch (error) {
          console.error(
            'User denied account access or there was an issue with MetaMask',
            error
          );
        }
      } else {
        alert(
          'MetaMask is not installed. Please install MetaMask to use this feature.'
        );
      }
    },
    async checkCurrentChain() {
      const currentChainId = await window.ethereum.request({
        method: 'eth_chainId',
        params: [],
      });
      if (currentChainId !== IEXEC_CHAIN_ID) {
        console.log('Please switch to iExec chain');
        try {
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
          console.log('Switched to iExec chain');
        } catch (err) {
          console.error('Failed to switch to iExec chain:', err);
          throw err;
        }
      }
    },
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
