import { defineConfig } from "vitepress";
import { getSidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dev Tools",
  description: "iExec documentation for dev tools",
  appearance: "force-dark",
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "https://protocol.docs.iex.ec/" },
      { text: "Tools", link: "/overview/what-we-do" },
    ],
    outline: [2, 3],
    search: {
      provider: "local",
    },
    sidebar: getSidebar(),
    logo: {
      light: "/Logo-RLC-Yellow-Simple.png",
      dark: "/Logo-RLC-Yellow-Simple.png",
      alt: "iExec logo",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/iExecBlockchainComputing" },
      { icon: "x", link: "https://twitter.com/iEx_ec" },
      { icon: "discord", link: "https://discord.com/invite/pbt9m98wnU" },
    ],
  },
});
