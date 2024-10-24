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
              {
                text: 'Content Creator',
                link: '/overview/use-case-demo/content-creator',
              },
            ],
          },
          {
            text: 'Guide',
            collapsed: true,
            items: [
              {
                text: 'How to access computing power',
                link: '/overview/guide/computing-power',
              },
              {
                text: 'How to pay with web3mail',
                link: '/overview/guide/pay-with-web3mail',
              },
            ],
          },
        ],
      },
      {
        text: '🔐 &nbsp;DataProtector <span class="VPBadge warning" style="margin-left: 8px; margin-bottom: -1px; transform: translateY(-1px);">beta</span>',
        link: '/tools/dataProtector',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/dataProtector/getting-started',
          },
          {
            text: 'DataProtector Core',
            link: '/tools/dataProtector/dataProtectorCore',
            collapsed: true,
            items: [
              {
                text: 'protectData',
                link: '/tools/dataProtector/dataProtectorCore/protectData',
              },
              {
                text: 'getProtectedData',
                link: '/tools/dataProtector/dataProtectorCore/getProtectedData',
              },
              {
                text: 'transferOwnership',
                link: '/tools/dataProtector/dataProtectorCore/transferOwnership',
              },
              {
                text: 'grantAccess',
                link: '/tools/dataProtector/dataProtectorCore/grantAccess',
              },
              {
                text: 'getGrantedAccess',
                link: '/tools/dataProtector/dataProtectorCore/getGrantedAccess',
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
                text: 'processProtectedData',
                link: '/tools/dataProtector/dataProtectorCore/processProtectedData',
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
                    text: 'subscribeToCollection',
                    link: '/tools/dataProtector/dataProtectorSharing/subscription/subscribeToCollection',
                  },
                  {
                    text: 'removeProtectedDataFromSubscription',
                    link: '/tools/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription',
                  },
                ],
              },
              {
                text: 'Consume',
                collapsed: true,
                items: [
                  {
                    text: 'consumeProtectedData',
                    link: '/tools/dataProtector/dataProtectorSharing/consume/consumeProtectedData',
                  },
                  {
                    text: 'getResultFromCompletedTask',
                    link: '/tools/dataProtector/dataProtectorSharing/consume/getResultFromCompletedTask',
                  },
                ],
              },
              {
                text: 'Read data',
                collapsed: true,
                items: [
                  {
                    text: 'getProtectedDataInCollections',
                    link: '/tools/dataProtector/dataProtectorSharing/read/getProtectedDataInCollections',
                  },
                  {
                    text: 'getProtectedDataPricingParams',
                    link: '/tools/dataProtector/dataProtectorSharing/read/getProtectedDataPricingParams',
                  },
                  {
                    text: 'getCollectionOwners',
                    link: '/tools/dataProtector/dataProtectorSharing/read/getCollectionOwners',
                  },
                  {
                    text: 'getCollectionsByOwner',
                    link: '/tools/dataProtector/dataProtectorSharing/read/getCollectionsByOwner',
                  },
                  {
                    text: 'getCollectionSubscriptions',
                    link: '/tools/dataProtector/dataProtectorSharing/read/getCollectionSubscriptions',
                  },
                  {
                    text: 'getRentals',
                    link: '/tools/dataProtector/dataProtectorSharing/read/getRentals',
                  },
                ],
              },
            ],
          },
          {
            text: 'Types',
            link: '/tools/dataProtector/types',
          },
          {
            text: 'Advanced',
            collapsed: true,
            items: [
              {
                text: 'Advanced Configuration',
                link: '/tools/dataProtector/advanced/advanced-configuration',
              },
              {
                text: 'Sharing smart contract',
                link: '/tools/dataProtector/advanced/dps-smart-contract',
              },
              {
                text: 'Apps whitelist',
                link: '/tools/dataProtector/advanced/apps-whitelist',
                collapsed: true,
                items: [
                  {
                    text: 'createAddOnlyAppWhitelist',
                    link: '/tools/dataProtector/advanced/apps-whitelist/createAddOnlyAppWhitelist',
                  },
                  {
                    text: 'addAppToAddOnlyAppWhitelist',
                    link: '/tools/dataProtector/advanced/apps-whitelist/addAppToAddOnlyAppWhitelist',
                  },
                  {
                    text: 'getUserAddOnlyAppWhitelist',
                    link: '/tools/dataProtector/advanced/apps-whitelist/getUserAddOnlyAppWhitelist',
                  },
                ],
              },
              {
                text: 'iDapp',
                link: '/tools/dataProtector/advanced/iDapp',
                collapsed: true,
                items: [
                  {
                    text: 'DataProtector Deserializer',
                    link: '/tools/dataProtector/advanced/iDapp/deserializer',
                    collapsed: true,
                    items: [
                      {
                        text: 'getValue',
                        link: '/tools/dataProtector/advanced/iDapp/deserializer/getValue',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: 'Migrate from v1 to v2',
            link: '/tools/dataProtector/migrate-from-v1',
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
        link: '/tools/oracle-factory',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/oracle-factory/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'createOracle',
                link: '/tools/oracle-factory/methods/createOracle',
              },
              {
                text: 'readOracle',
                link: '/tools/oracle-factory/methods/readOracle',
              },
              {
                text: 'updateOracle',
                link: '/tools/oracle-factory/methods/updateOracle',
              },
            ],
          },
          {
            text: 'Advanced Configuration',
            link: '/tools/oracle-factory/advanced-configuration',
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
