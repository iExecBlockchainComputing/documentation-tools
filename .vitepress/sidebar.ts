import type { DefaultTheme } from 'vitepress';

export function getSidebar() {
  return {
    '/': [
      {
        text: 'OVERVIEW',
        items: [
          { text: '💡&nbsp;&nbsp;What We Do', link: '/overview/what-we-do' },
          {
            text: '👋&nbsp;&nbsp; Hello World',
            link: '/overview/helloWorld',
            collapsed: true,
            items: [
              {
                text: 'iExec Overview',
                link: '/overview/helloWorld/1-overview',
              },
              {
                text: 'Protect data',
                link: '/overview/helloWorld/2-protectData',
              },
              {
                text: 'Build iApp',
                link: '/overview/helloWorld/3-buildIApp',
              },
              {
                text: 'Manage data access',
                link: '/overview/helloWorld/4-manageDataAccess',
              },
              {
                text: 'Bonus chapter!',
                link: '/overview/helloWorld/5-bonusChapter',
              },
            ],
          },
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
          // {
          //   text: '💰&nbsp;&nbsp;Pricing Considerations',
          //   link: '/overview/pricing-considerations',
          // },
          {
            text: '🔧&nbsp;&nbsp;How to Pay for Web3mail',
            link: '/overview/how-to-pay-for-web3mail',
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
              {
                text: 'getResultFromCompletedTask',
                link: '/tools/dataProtector/dataProtectorCore/getResultFromCompletedTask',
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
                    text: 'setProtectedDataRentingParams',
                    link: '/tools/dataProtector/dataProtectorSharing/renting/setProtectedDataRentingParams',
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
                text: 'iApp',
                link: '/tools/dataProtector/advanced/iApp',
                collapsed: true,
                items: [
                  {
                    text: 'DataProtector Deserializer',
                    link: '/tools/dataProtector/advanced/iApp/deserializer',
                    collapsed: true,
                    items: [
                      {
                        text: 'getValue',
                        link: '/tools/dataProtector/advanced/iApp/deserializer/getValue',
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
        text: '🧬&nbsp;&nbsp;iAppGenerator',
        link: '/tools/iappGenerator',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/iappGenerator/getting-started',
          },
          {
            text: 'Commands',
            collapsed: true,
            items: [
              {
                text: 'Init iApp',
                link: '/tools/iappGenerator/commands/init-iapp',
              },
              {
                text: 'Configure',
                link: '/tools/iappGenerator/commands/configure',
              },
              {
                text: 'Launch',
                link: '/tools/iappGenerator/commands/launch',
              },
            ],
          },
          {
            text: 'Going Further',
            link: '/tools/iappGenerator/going-further',
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
        text: '💬&nbsp;&nbsp;Web3telegram <span class="VPBadge warning" style="margin-left: 8px; margin-bottom: -1px; transform: translateY(-1px);">alpha</span>',
        link: '/tools/web3telegram',
        collapsed: false,
        items: [
          {
            text: 'Getting Started',
            link: '/tools/web3telegram/getting-started',
          },
          {
            text: 'Methods',
            collapsed: true,
            items: [
              {
                text: 'fetchMyContacts',
                link: '/tools/web3telegram/methods/fetchMyContacts',
              },
              {
                text: 'fetchUserContacts',
                link: '/tools/web3telegram/methods/fetchUserContacts',
              },
              {
                text: 'sendTelegram',
                link: '/tools/web3telegram/methods/sendTelegram',
              },
            ],
          },
          {
            text: 'Integration Guide',
            link: '/tools/web3telegram/integration-guide',
            collapsed: true,
            items: [
              {
                text: 'How to Pay for Web3telegram',
                link: '/tools/web3telegram/how-to-pay-for-web3telegram',
              },
            ],
          },
          {
            text: 'Advanced Configuration',
            link: '/tools/web3telegram/advanced-configuration',
          },
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
