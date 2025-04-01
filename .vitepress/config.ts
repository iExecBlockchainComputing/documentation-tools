import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';
import { getSidebar } from './sidebar';
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';

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
    config(md) {
      md.use(groupIconMdPlugin);
    },
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
      {},
      `
      window.axeptioSettings = {
        clientId: "6413111857e4d2a6342cd5c6",
        cookiesVersion: "iexec-en",
      };

      (function(d, s) {
        var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
        e.async = true; e.src = "//static.axept.io/sdk.js";
        t.parentNode.insertBefore(e, t);
      })(document, "script");
      `,
    ],
    [
      'script',
      {
        defer: '',
        src: 'https://widget.mava.app',
        'widget-version': 'v2',
        id: 'MavaWebChat',
        'enable-sdk': 'false',
        'data-token':
          '8e4e10aad5750451e8726768e8c639dae54f461beeb176f5ebd687371c9390f2',
      },
    ],
    // 🔥 Hotjar Tracking Script
    [
      'script',
      {},
      `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:5303222,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
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
          { text: 'Web3Telegram', link: '/tools/web3telegram' },
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
      text: 'Suggest changes to this page',
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
      groupIconVitePlugin(),
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
