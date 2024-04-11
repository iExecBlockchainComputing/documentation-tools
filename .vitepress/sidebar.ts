import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/': [
      {
        text: 'OVERVIEW',
        items: [
          { text: '💡&nbsp;&nbsp;What We Do', link: '/overview/what-we-do' },
          {
            text: '📽&nbsp;&nbsp;Use Case Demo',
            collapsed: true,
            link: '/overview/use-case-demo',
            items: [
              {
                text: 'Privacy Enhancing Marketing',
                link: '/overview/use-case-demo/privacy-enhancing-marketing',
              },
            ],
          },
        ],
      },
      {
        text: '🔐 &nbsp;DataProtector',
        link: '/tools/dataProtector',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/dataProtector/getting-started',
          },
          {
            text: 'Migrate from v1 to v2',
            link: '/tools/dataProtector/migrate-from-v1',
          },
          {
            text: 'DataProtector Core',
            link: '/tools/dataProtector/dataProtectorCore',
            collapsed: true,
            items: [
              {
                text: 'getGrantedAccess',
                link: '/tools/dataProtector/dataProtectorCore/getGrantedAccess',
              },
              {
                text: 'getProtectedData',
                link: '/tools/dataProtector/dataProtectorCore/getProtectedData',
              },
              {
                text: 'grantAccess',
                link: '/tools/dataProtector/dataProtectorCore/grantAccess',
              },
              {
                text: 'processProtectedData',
                link: '/tools/dataProtector/dataProtectorCore/processProtectedData',
              },
              {
                text: 'protectData',
                link: '/tools/dataProtector/dataProtectorCore/protectData',
              },
              {
                text: 'revokeOneAccess',
                link: '/tools/dataProtector/dataProtectorCore/revokeOneAccess',
              },
              {
                text: 'revokeAllAccess',
                link: '/tools/dataProtector/dataProtectorCore/revokeAllAccess',
              },
              {
                text: 'transferOwnership',
                link: '/tools/dataProtector/dataProtectorCore/transferOwnership',
              },
            ],
          },
          {
            text: 'DataProtector Sharing',
            link: '/tools/dataProtector/dataProtectorSharing',
            collapsed: true,
            items: [
              {
                text: 'Collection',
                link: '/tools/dataProtector/dataProtectorSharing/collection',
                collapsed: true,
                items: [
                  {
                    text: 'createCollection',
                    link: '/tools/dataProtector/dataProtectorSharing/collection/createCollection',
                  },
                  {
                    text: 'removeCollection',
                    link: '/tools/dataProtector/dataProtectorSharing/collection/removeCollection',
                  },
                  {
                    text: 'addToCollection',
                    link: '/tools/dataProtector/dataProtectorSharing/collection/addToCollection',
                  },
                  {
                    text: 'removeProtectedDataFromCollection',
                    link: '/tools/dataProtector/dataProtectorSharing/collection/removeProtectedDataFromCollection',
                  },
                ],
              },
              {
                text: 'Misc',
                collapsed: true,
                items: [
                  {
                    text: 'consumeProtectedData',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/consumeProtectedData',
                  },
                  {
                    text: 'getProtectedDataInCollections',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/getProtectedDataInCollections',
                  },
                  {
                    text: 'getProtectedDataPricingParams',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/getProtectedDataPricingParams',
                  },
                  {
                    text: 'getCollectionOwners',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/getCollectionOwners',
                  },
                  {
                    text: 'getCollectionsByOwner',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/getCollectionsByOwner',
                  },
                  {
                    text: 'getCollectionSubscriptions',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/getCollectionSubscriptions',
                  },
                  {
                    text: 'getRentals',
                    link: '/tools/dataProtector/dataProtectorSharing/misc/getRentals',
                  },
                ],
              },
              {
                text: 'Renting',
                link: '/tools/dataProtector/dataProtectorSharing/renting',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataToRenting',
                    link: '/tools/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting',
                  },
                  {
                    text: 'rentProtectedData',
                    link: '/tools/dataProtector/dataProtectorSharing/renting/rentProtectedData',
                  },
                  {
                    text: 'removeProtectedDataFromRenting',
                    link: '/tools/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting',
                  },
                ],
              },
              {
                text: 'Selling',
                link: '/tools/dataProtector/dataProtectorSharing/selling',
                collapsed: true,
                items: [
                  {
                    text: 'setProtectedDataForSale',
                    link: '/tools/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale',
                  },
                  {
                    text: 'buyProtectedData',
                    link: '/tools/dataProtector/dataProtectorSharing/selling/buyProtectedData',
                  },
                  {
                    text: 'removeProtectedDataForSale',
                    link: '/tools/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale',
                  },
                ],
              },
              {
                text: 'Subscription',
                link: '/tools/dataProtector/dataProtectorSharing/subscription',
                collapsed: true,
                items: [
                  {
                    text: 'setSubscriptionParams',
                    link: '/tools/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams',
                  },
                  {
                    text: 'setProtectedDataToSubscription',
                    link: '/tools/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription',
                  },
                  {
                    text: 'subscribe',
                    link: '/tools/dataProtector/dataProtectorSharing/subscription/subscribe',
                  },
                  {
                    text: 'removeProtectedDataFromSubscription',
                    link: '/tools/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                  },
                ],
              },
            ],
          },
          {
            text: 'Types',
            link: '/tools/dataProtector/types',
          },
        ],
      },
      {
        text: '✉&nbsp;&nbsp;Web3mail',
        link: '/tools/web3mail',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/web3mail/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'fetchMyContacts',
                link: '/tools/web3mail/methods/fetchMyContacts',
              },
              {
                text: 'fetchUserContacts',
                link: '/tools/web3mail/methods/fetchUserContacts',
              },
              {
                text: 'sendEmail',
                link: '/tools/web3mail/methods/sendEmail',
              },
            ],
          },
          {
            text: 'Advanced Configuration',
            link: '/tools/web3mail/advanced-configuration',
          },
          // {
          //   text: "Types",
          //   link: "/tools/web3mail/types",
          // }
        ],
      },
      {
        text: '🧙&nbsp;&nbsp;Oracle Factory',
        link: '/tools/oracleFactory',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/oracleFactory/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'createOracle',
                link: '/tools/oracleFactory/createOracle',
              },
              {
                text: 'readOracle',
                link: '/tools/oracleFactory/readOracle',
              },
              {
                text: 'updateOracle',
                link: '/tools/oracleFactory/updateOracle',
              },
            ],
          },
          {
            text: 'Advanced Configuration',
            link: '/tools/oracleFactory/advanced-configuration',
          },
        ],
      },
      {
        text: 'HELP',
        items: [{ text: '🆘&nbsp;&nbsp;Contact Us', link: '/help/contact-us' }],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
