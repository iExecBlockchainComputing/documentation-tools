<!-- WagmiLoginButton.vue -->
<template>
  <template>
    <w3m-button />
  </template>
</template>

<script setup lang="ts">
import { bellecour } from '../utils/walletConnection'; // Adjust the path if necessary
import { createWeb3Modal } from '@web3modal/wagmi';
import { reconnect, http, createConfig } from '@wagmi/core';
import { walletConnect } from '@wagmi/connectors';

// Wagmi Client initialization
if (!import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID) {
  throw new Error(
    'You need to provide VITE_WALLET_CONNECT_PROJECT_ID env variable'
  );
}

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID!;

const metadata = {
  name: 'iexec-doc',
  description: 'iExec doc for web3modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const config = createConfig({
  chains: [bellecour],
  transports: {
    [bellecour.id]: http('https://bellecour.iex.ec'),
  },
  connectors: [walletConnect({ projectId, metadata, showQrModal: false })],
});

reconnect(config);
// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: bellecour,
});
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
