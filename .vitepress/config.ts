import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';
import { getSidebar } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iExec tools',
  description: 'iExec documentation for dev tools',
  // Remove the trailing .html from URLs. Also needs the same option in vercel.json
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  markdown: {
    codeTransformers: [transformerTwoslash()],
    theme: {
      light: 'min-light',
      dark: 'vitesse-dark',
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/Logo-RLC-Yellow.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-10RGBF003J',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-5NR1RS42JQ');",
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
          { text: 'Oracle Factory', link: '/tools/oracle-factory' },
        ],
      },
      { text: 'Contact Us', link: '/help/contact-us' },
      { text: 'Protocol', link: 'https://protocol.docs.iex.ec/' },
    ],

    // Nav Table of Content on the right
    aside: true,
    outline: {
      level: [2, 3],
    },

    search: {
      provider: 'local',
    },
    sidebar: getSidebar(),
    logo: {
      light: '/Logo-RLC-Yellow.png',
      dark: '/Logo-RLC-Yellow.png',
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
    editLink: {
      pattern:
        'https://github.com/iExecBlockchainComputing/documentation-tools/blob/main/:path',
    },
  },
  vite: {
    plugins: [
      AutoImport({
        include: [/\.vue$/, /\.md$/],
        resolvers: [ElementPlusResolver({ ssr: true })],
      }),
      Components({
        dirs: ['components'],
        include: [/\.vue$/, /\.md$/],
        resolvers: [ElementPlusResolver({ ssr: true })],
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocOutlineItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/CustomVPDocOutlineItem.vue', import.meta.url)
          ),
        },
      ],
    },
  },
});
