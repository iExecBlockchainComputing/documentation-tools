import { defineConfig } from "vitepress";
import { getSidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iExec tools documentation",
  description: "iExec documentation for dev tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "https://protocol.docs.iex.ec/" },
      { text: "Tools", link: "/overview/what-we-do" },
    ],

    sidebar: getSidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
