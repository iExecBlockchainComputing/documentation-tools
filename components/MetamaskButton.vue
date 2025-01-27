<template>
  <div class="flex items-center">
    <Button @click="connectWallet" :disabled="isConnected">
      {{ isConnected ? 'Wallet Connected' : 'Connect Wallet' }}
    </Button>
    <span
      v-if="walletAddress"
      class="ml-3 inline-flex items-center gap-x-2 text-sm"
    >
      <img
        v-if="addressIcon"
        :src="addressIcon"
        alt="Generated address icon"
        class="size-4 rounded-full"
      />
      <span class="max-w-[70px] truncate">{{ walletAddress }}</span>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createIcon } from '@download/blockies';
import Button from './ui/Button.vue';
import { useWallet } from '../composables/useWallet';

const emit = defineEmits(['connected']);
const { walletAddress, isConnected } = useWallet();
const addressIcon = ref('');

async function connectWallet() {
  if (!window.ethereum) {
    alert('Please install MetaMask!');
    return;
  }

  try {
    // Request account access if needed
    const wallet = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

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
    walletAddress.value = wallet[0];
    addressIcon.value = createIcon({
      seed: walletAddress.value.toLowerCase(),
    }).toDataURL();

    // Emit the connected event
    emit('connected', window.ethereum);
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
}
</script>
