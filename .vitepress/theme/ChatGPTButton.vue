<template>
  <div class="chatgpt-btn-wrapper">
    <a class="chatgpt-btn" :href="chatGPTLink" target="_blank" rel="noopener">
      <img src="/assets/icons/chatgpt.png" alt="ChatGPT" class="chatgpt-icon" />
      Ask in ChatGPT
    </a>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const chatGPTLink = ref('#');

// Utilise le chemin actuel à chaque changement de route
const updateLink = () => {
  const productionBase = 'https://tools.docs.iex.ec';
  const fullUrl = productionBase + route.path;
  const prompt = `Please research and analyze this page: ${fullUrl} so I can ask you questions about it. Once you have read it, prompt me with any questions I have. Do not post content from the page in your response. Any of my follow up questions must reference the site I gave you.`;
  chatGPTLink.value = `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
};

// Appel initial + chaque changement de route
watch(route, updateLink, { immediate: true });
</script>

<style scoped>
.chatgpt-btn-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}
.chatgpt-btn {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: #202123;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}
.chatgpt-btn:hover {
  background-color: #2d2f31;
  text-decoration: none !important;
  color: white;
}
.chatgpt-icon {
  width: 24px;
  margin-right: 8px;
}

@media (max-width: 768px) {
  .chatgpt-btn-wrapper {
    display: none;
  }
}
</style>
