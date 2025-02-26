<template>
  <button type="button" class="button-base">
    <slot />
  </button>
</template>

<style scoped>
.button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  padding: 0.5rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 8px;
  background: #fcd15a;
  color: #1e1e1e;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-base:hover:not(:disabled) {
  background: #ffb74d;
  transform: translateY(-1px);
  box-shadow: var(--card-shadow);
}

.button-base:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(252, 209, 90, 0.3);
}

.button-base:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
