import { defineConfig } from 'vitepress';
import { getSidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iExec tools',
  description: 'iExec documentation for dev tools',
  lastUpdated: true,
  markdown: {
    attrs: { disable: true },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Overview', link: '/overview/what-we-do' },
      {
        text: 'Tools',
        items: [
          { text: 'DataProtector', link: '/tools/dataProtector' },
          { text: 'Web3Mail', link: '/tools/web3mail' },
          { text: 'Oracle Factory', link: '/tools/oracleFactory' },
        ],
      },
      { text: 'Contact Us', link: '/help/contact-us' },
      { text: 'Protocol', link: 'https://protocol.docs.iex.ec/' },
    ],
    outline: [2, 3],
    search: {
      provider: 'local',
    },
    sidebar: getSidebar(),
    logo: {
      light: '/Logo-RLC-Yellow-Simple.png',
      dark: '/Logo-RLC-Yellow-Simple.png',
      alt: 'iExec logo',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iExecBlockchainComputing' },
      { icon: 'x', link: 'https://twitter.com/iEx_ec' },
      { icon: 'discord', link: 'https://discord.com/invite/pbt9m98wnU' },
    ],
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
      },
    },
    // TODO: Switch to 'main' branch
    editLink: {
      pattern:
        'https://github.com/iExecBlockchainComputing/documentation-tools/edit/feature/migrate-to-vitepress/:path',
    },
  },
});
