<template>
  <div class="chatgpt-btn-wrapper">
    <a
      class="chatgpt-btn"
      href="https://chatgpt.com/?hints=search&amp;q=Please%20research%20and%20analyze%20this%20page%3A%20https%3A%2F%2Ftools.docs.iex.ec%2F%20so%20I%20can%20ask%20you%20questions%20about%20it.%20Once%20you%20have%20read%20it%2C%20prompt%20me%20with%20any%20questions%20I%20have.%20Do%20not%20post%20content%20from%20the%20page%20in%20your%20response.%20Any%20of%20my%20follow%20up%20questions%20must%20reference%20the%20site%20I%20gave%20you."
      target="_blank"
      rel="noopener"
    >
      <img src="/assets/icons/chatgpt.png" alt="ChatGPT" class="chatgpt-icon" />
      Ask in ChatGPT
    </a>
  </div>
</template>

<style scoped>
.chatgpt-btn-wrapper {
  position: fixed;
  top: 70px;
  right: 170px;
  z-index: 999;
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
  width: 32px;
  margin-right: 8px;
}

/* Ensure the button doesn't interfere with other VitePress elements */
@media (max-width: 768px) {
  .chatgpt-btn-wrapper {
    top: 70px;
    right: 16px;
  }
}
</style>
