<script setup>
import DefaultTheme from 'vitepress/theme';
import ChatGptButton from './ChatGptButton.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-top>
      <ChatGptButton />
    </template>
  </Layout>
</template>
