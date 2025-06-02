<script setup>
import DefaultTheme from 'vitepress/theme';
import ChatGptButton from './ChatGPTButton.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-top>
      <ChatGptButton />
    </template>
  </Layout>
</template>
