import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import CodeSandbox from "./components/CodeSandbox.vue";

import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component("CodeSandbox", CodeSandbox);
  },
} satisfies Theme;
