import { WagmiPlugin } from '@wagmi/vue';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import Theme from 'vitepress/theme';
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client';
import '@shikijs/vitepress-twoslash/style.css';
import type { EnhanceAppContext } from 'vitepress';
import './hello-world-style.css';
import './style.css';
import './tailwind-output.css';
import { wagmiAdapter } from '../../utils/wagmiConfig.ts';

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any);

    const queryClient = new QueryClient();

    app.use(VueQueryPlugin, { queryClient });

    app.use(WagmiPlugin, { config: wagmiAdapter.wagmiConfig });
  },
};
