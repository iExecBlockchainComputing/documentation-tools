<template>
  <div
    class="flex shrink-0 items-center gap-2 rounded-[30px] bg-grey-800 px-3 py-2"
  >
    <div class="text-sm font-medium text-primary">{{ displayAddress }}</div>
    <div
      :class="[
        avatarStyles[avatarVisualBg],
        'relative z-10 size-4 rounded-full bg-black bg-cover',
      ]"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import avatarStyles from './profile.module.css';
import { getAvatarVisualNumber } from '../utils/getAvatarVisualNumber';
import { truncateAddress } from '../utils/truncateAddress';

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
});

const avatarVisualBg = computed(() =>
  getAvatarVisualNumber({ address: props.address })
);

const displayAddress = ref(truncateAddress(props.address));
</script>
