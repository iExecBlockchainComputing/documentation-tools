<script setup>
import DefaultTheme from 'vitepress/theme';
import ChatGPTButton from './ChatGPTButton.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <ChatGPTButton />
    </template>
  </Layout>
</template>
