<template>
  <div class="chatgpt-btn-wrapper" ref="dropdownRef">
    <!-- Split button: main button + dropdown trigger -->
    <div class="split-button">
      <!-- Main button - launches ChatGPT directly -->
      <a
        class="chatgpt-btn main-action"
        :href="chatGPTLink"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/assets/icons/chatgpt.svg"
          alt="ChatGPT"
          class="chatgpt-icon"
        />
        Ask in ChatGPT
      </a>

      <!-- Dropdown trigger button -->
      <button
        class="chatgpt-btn dropdown-trigger"
        @click.stop="toggleDropdown"
        aria-label="More options"
      >
        <svg
          class="dropdown-arrow"
          :class="{ rotated: isDropdownOpen }"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- Dropdown menu -->
    <div class="dropdown-menu" v-show="isDropdownOpen">
      <a
        class="dropdown-item"
        :href="chatGPTLink"
        target="_blank"
        rel="noopener"
        @click="closeDropdown"
      >
        <div class="item-icon-wrapper">
          <img
            src="/assets/icons/chatgpt.svg"
            alt="ChatGPT"
            class="item-icon"
          />
        </div>
        <div class="item-content">
          <div class="item-title">Open in ChatGPT</div>
          <div class="item-description">Ask questions about this page</div>
        </div>
        <svg
          class="item-arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            d="M6.5 3L11 7.5L6.5 12"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <a
        class="dropdown-item"
        :href="claudeLink"
        target="_blank"
        rel="noopener"
        @click="closeDropdown"
      >
        <div class="item-icon-wrapper">
          <img
            src="/assets/icons/anthropic.svg"
            alt="Anthropic"
            class="item-icon"
          />
        </div>
        <div class="item-content">
          <div class="item-title">Open in Claude</div>
          <div class="item-description">Ask questions about this page</div>
        </div>
        <svg
          class="item-arrow"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            d="M6.5 3L11 7.5L6.5 12"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <button
        class="dropdown-item"
        @click="copyPageContent"
        :disabled="isCopying"
      >
        <div class="item-icon-wrapper">
          <svg
            class="item-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            />
          </svg>
        </div>
        <div class="item-content">
          <div class="item-title">
            {{ isCopying ? 'Copied!' : 'Copy page' }}
          </div>
          <div class="item-description">Copy page as Markdown for LLMs</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vitepress';
import TurndownService from 'turndown';

const route = useRoute();
const dropdownRef = ref(null);
const isDropdownOpen = ref(false);
const isCopying = ref(false);

// Initialize handleClickOutside ref
const handleClickOutsideRef = ref(null);

const chatGPTLink = computed(() => {
  const fullUrl = `https://tools.docs.iex.ec${route.path}`;
  const prompt = `Please research and analyze this page: ${fullUrl} so I can ask you questions about it. Once you have read it, prompt me with any questions I have. Do not post content from the page in your response. Any of my follow up questions must reference the site I gave you.`;
  return `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
});

const claudeLink = computed(() => {
  const fullUrl = `https://tools.docs.iex.ec${route.path}`;
  const prompt = `Please research and analyze this page: ${fullUrl} so I can ask you questions about it. Once you have read it, prompt me with any questions I have. Do not post content from the page in your response. Any of my follow up questions must reference the site I gave you.`;
  return `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const copyPageContent = async () => {
  isCopying.value = true;

  const turndownService = new TurndownService();
  const mainContent = document.querySelector('.vp-doc');
  const markdown = turndownService.turndown(mainContent);

  await navigator.clipboard.writeText(markdown);

  await new Promise((resolve) => setTimeout(resolve, 800));

  isCopying.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  handleClickOutsideRef.value = handleClickOutside;
  document.addEventListener('click', handleClickOutsideRef.value);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutsideRef.value);
});
</script>

<style scoped>
.chatgpt-btn-wrapper {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.split-button {
  display: flex;
  border-radius: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.chatgpt-btn {
  background-color: #202123;
  color: white;
  border: none;
  font-weight: 500;
  transition: background-color 0.2s ease;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  display: flex;
  align-items: center;
}

.main-action {
  padding: 0 12px;
  border-radius: 20px 0 0 20px;
  text-decoration: none;
}

.dropdown-trigger {
  width: 24px;
  border-radius: 0 20px 20px 0;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chatgpt-btn:hover {
  background-color: #2d2f31;
  text-decoration: none !important;
  color: white;
}

.chatgpt-icon {
  width: 25px;
  height: 25px;
  margin-right: 8px;
}

.dropdown-arrow {
  transition: transform 0.2s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  background-color: #1f1f1f;
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  margin-top: 8px;
  z-index: 1000;
  min-width: 280px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 14px 16px;
  color: #e0e0e0;
  width: 100%;
  transition: all 0.2s ease;
  gap: 12px;
  text-align: left;
}

.dropdown-item:hover:not(:disabled) {
  background-color: #2a2a2a;
  text-decoration: none;
  color: white;
}

.dropdown-item:active:not(:disabled) {
  background-color: #333;
  text-decoration: none;
  color: white;
}

.dropdown-item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.item-icon-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.item-icon {
  width: auto;
  height: auto;
  max-width: 80%;
}

.item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.item-title {
  font-size: 14px;
  font-weight: 500;
}

.item-description {
  font-size: 12px;
  color: #999;
  line-height: 1.3;
}

.item-arrow {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: #666;
  transition: color 0.2s ease;
}

.dropdown-item:hover .item-arrow {
  color: #999;
}

@media (max-width: 768px) {
  .chatgpt-btn-wrapper {
    display: none;
  }
}
</style>
