import Theme from 'vitepress/theme';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import '@shikijs/vitepress-twoslash/style.css';
import type { EnhanceAppContext } from 'vitepress';

import './style.css';

import WagmiLoginButton from '../../components/WagmiLoginButton.vue'; // Adjust the path if necessary

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any);
    app.component('WagmiLoginButton', WagmiLoginButton);
  },
};
