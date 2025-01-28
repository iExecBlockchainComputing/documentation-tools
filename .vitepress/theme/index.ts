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
import googleAnalytics from 'vitepress-plugin-google-analytics';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any);

    const queryClient = new QueryClient();

    app.use(VueQueryPlugin, { queryClient });

    app.use(WagmiPlugin, { config: wagmiAdapter.wagmiConfig });

    googleAnalytics({
      id: 'GTM-PKHWK65',
    });

    if (typeof window !== 'undefined') {
      // Ensure dataLayer exists
      window.dataLayer = window.dataLayer || [];

      // Define a map of event types and their corresponding actions
      const eventMap = {
        connectWallet: 'hw_connectWallet',
        protectData: 'hw_protectData',
        grantAccess: 'hw_grantAccess',
        // completeQuest: 'hw_completeQuest',
        // shareFeedback: 'hw_shareFeedback',
        claimVoucher: 'hw_claimVoucher',
      };

      // Add a global click listener
      document.addEventListener('click', (event) => {
        if (event.target instanceof Element) {
          // Iterate through eventMap to check which event matches
          Object.keys(eventMap).forEach((key) => {
            if ((event.target as Element).matches(`[data-track="${key}"]`)) {
              window.dataLayer.push({
                event: eventMap[key],
              });
            }
          });
        }
      });
    }
  },
};
