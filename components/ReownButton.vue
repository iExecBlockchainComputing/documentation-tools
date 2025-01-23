<template>
  <div class="flex items-center">
    <Button @click="login" :disabled="isConnected">
      {{ isConnected ? 'Wallet Connected' : 'Connect Wallet' }}
    </Button>
    <span
      v-if="walletAddress"
      class="ml-3 inline-flex items-center gap-x-2 text-sm"
    >
      <!-- <img
        v-if="addressIcon"
        :src="addressIcon"
        alt="Generated address icon"
        class="size-4 rounded-full"
      /> -->
      <span class="max-w-[70px] truncate">{{ walletAddress }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useAppKit } from '@reown/appkit/vue';
import { useAccount, useDisconnect } from '@wagmi/vue';

const { open } = useAppKit();
const { isConnected, address: walletAddress, connector, status } = useAccount();
const emit = defineEmits(['connected']);

const login = () => {
  open({ view: 'Connect' });
};

watch(
  async () => isConnected.value,
  async (newIsConnected) => {
    if (newIsConnected && status.value === 'connected') {
      const provider = await connector.value?.getProvider();
      emit('connected', {
        provider,
        walletAddress: walletAddress.value,
        isConnected: newIsConnected,
      });
    }
  }
);
</script>
