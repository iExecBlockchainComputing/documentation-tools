<!-- WagmiLoginButton.vue -->
<template>
  <div>
    <button @click="connectWallet">Connect Wallet</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useConnect, useAccount, WagmiConfig } from 'wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi';
import { createConfig, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { bellecour } from '../utils/walletConnection'; // Adjust the path if necessary

// Wagmi Client initialization
if (!import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID) {
  throw new Error(
    'You need to provide VITE_WALLET_CONNECT_PROJECT_ID env variable'
  );
}

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID!;

const { chains, publicClient } = configureChains(
  [bellecour],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata },
    }),
    // Needed to detect Metamask
    new EIP6963Connector({ chains }),
  ],
  publicClient,
});

// Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, defaultChain: bellecour });

const { connect } = useConnect({
  connector: new WalletConnectConnector({
    chains,
    options: {
      projectId,
      showQrModal: true,
    },
  }),
});

const { isConnected } = useAccount();

const connectWallet = async () => {
  try {
    await connect();
  } catch (error) {
    console.error('Failed to connect wallet:', error);
  }
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
