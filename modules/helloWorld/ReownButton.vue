<template>
  <div class="flex items-center">
    <Button
      v-if="!walletAddress"
      @click="login"
      :disabled="isConnected"
      data-track="connectWallet"
    >
      {{ isConnected ? 'Wallet Connected' : 'Connect Wallet' }}
    </Button>
    <div v-else="walletAddress" class="flex items-center gap-2 text-sm">
      <AddressChip :address="walletAddress" />
      <button
        type="button"
        className="p-1 hover:drop-shadow-link-hover sm:-mr-2"
        @click="logout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useAppKit } from '@reown/appkit/vue';
import { useAccount, useDisconnect } from '@wagmi/vue';
import AddressChip from '../../components/AddressChip.vue';
import Button from '../../components/ui/Button.vue';

const { open } = useAppKit();
const { disconnectAsync } = useDisconnect();
const { isConnected, address: walletAddress, connector, status } = useAccount();
const emit = defineEmits(['connected']);

const login = () => {
  open({ view: 'Connect' });
};

const logout = async () => {
  await disconnectAsync();
};

watch(
  async () => isConnected.value,
  async (newIsConnected) => {
    if (status.value === 'connected') {
      const provider = await connector.value?.getProvider();
      emit('connected', provider);
    }
  }
);
</script>
