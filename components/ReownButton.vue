<template>
  <div class="flex items-center">
    <Button @click="login" :disabled="isConnected">
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

<script lang="ts" setup>
import { useAppKit } from '@reown/appkit/vue';
import { useAccount, useDisconnect } from '@wagmi/vue';

const { open } = useAppKit();
const { disconnectAsync } = useDisconnect();
const { isConnected, address: walletAddress } = useAccount();

const login = () => {
  open({ view: 'Connect' });
};

const logout = async () => {
  try {
    await disconnectAsync();
  } catch (error) {
    console.error('Failed to logout:', error);
  } finally {
  }
};
</script>
