<script setup>
import { VPBadge } from 'vitepress/theme';
</script>

<template>
  <VPBadge
    type="tip"
    text="Required *"
    style="
      color: var(--vp-c-red-1);
      background-color: hsla(350, 89%, 60%, 8%);
      margin-top: 1px;
    "
  />
</template>
