import { DefaultTheme } from "vitepress";

export function getSidebar() {
  return {
    "/": [
      {
        text: "Overview",
        items: [
          { text: "What We Do", link: "/overview/what-we-do" },
          {
            text: "Use Case Demo",
            collapsed: true,
            link: "/overview/use-case-demo",
            items: [
              {
                text: "Privacy Enhancing Marketing",
                link: "/overview/use-case-demo/privacy-enhancing-marketing",
              },
            ],
          },
        ],
      },
      {
        text: "Tools",
        items: [
          {
            text: "DataProtector",
            link: "/tools/dataProtector",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/tools/dataProtector/getting-started",
              },
              {
                text: "Migrate from v1 to v2",
                link: "/tools/dataProtector/migrate-from-v1",
              },
              {
                text: "DataProtectorCore",
                link: "/tools/dataProtector/dataProtectorCore/getting-started",
                collapsed: true,
                items: [
                  {
                    text: "getGrantedAccess",
                    link: "/tools/dataProtector/dataProtectorCore/getGrantedAccess",
                  },
                  {
                    text: "getProtectedData",
                    link: "/tools/dataProtector/dataProtectorCore/getProtectedData",
                  },
                  {
                    text: "grantAccess",
                    link: "/tools/dataProtector/dataProtectorCore/grantAccess",
                  },
                  {
                    text: "processProtectedData",
                    link: "/tools/dataProtector/dataProtectorCore/processProtectedData",
                  },
                  {
                    text: "protectData",
                    link: "/tools/dataProtector/dataProtectorCore/protectData",
                  },
                  {
                    text: "revokeOneAccess",
                    link: "/tools/dataProtector/dataProtectorCore/revokeOneAccess",
                  },
                  {
                    text: "revokeAllAccess",
                    link: "/tools/dataProtector/dataProtectorCore/revokeAllAccess",
                  },
                  {
                    text: "transferOwnership",
                    link: "/tools/dataProtector/dataProtectorCore/transferOwnership",
                  },
                ],
              },
              {
                text: "DataProtectorSharing",
                link: "/tools/dataProtector/dataProtectorSharing/getting-started",
                collapsed: true,
                items: [
                  {
                    text: "Collection",
                    link: "/tools/dataProtector/dataProtectorSharing/collection",
                    collapsed: true,
                    items: [
                      {
                        text: "createCollection",
                        link: "/tools/dataProtector/dataProtectorSharing/collection/createCollection",
                      },
                      {
                        text: "removeCollection",
                        link: "/tools/dataProtector/dataProtectorSharing/collection/removeCollection",
                      },
                      {
                        text: "addToCollection",
                        link: "/tools/dataProtector/dataProtectorSharing/collection/addToCollection",
                      },
                      {
                        text: "removeFromCollection",
                        link: "/tools/dataProtector/dataProtectorSharing/collection/removeFromCollection",
                      },
                    ],
                  },
                  {
                    text: "Misc",
                    link: "/tools/dataProtector/dataProtectorSharing/misc",
                    collapsed: true,
                    items: [
                      {
                        text: "consumeProtectedData",
                        link: "/tools/dataProtector/dataProtectorSharing/misc/consumeProtectedData",
                      },
                      {
                        text: "getProtectedDataInCollection",
                        link: "/tools/dataProtector/dataProtectorSharing/misc/getProtectedDataInCollections",
                      },
                      {
                        text: "getProtectedDataPricingParams",
                        link: "/tools/dataProtector/dataProtectorSharing/misc/getProtectedDataPricingParams",
                      },
                    ],
                  },
                  {
                    text: "Renting",
                    link: "/tools/dataProtector/dataProtectorSharing/renting",
                    collapsed: true,
                    items: [
                      {
                        text: "setProtectedDataToRenting",
                        link: "/tools/dataProtector/dataProtectorSharing/renting/setProtectedDataToRenting",
                      },
                      {
                        text: "rentProtectedData",
                        link: "/tools/dataProtector/dataProtectorSharing/renting/rentProtectedData",
                      },
                      {
                        text: "removeProtectedDataFromRenting",
                        link: "/tools/dataProtector/dataProtectorSharing/renting/removeProtectedDataFromRenting",
                      },
                    ],
                  },
                  {
                    text: "Selling",
                    link: "/tools/dataProtector/dataProtectorSharing/selling",
                    collapsed: true,
                    items: [
                      {
                        text: "setProtectedDataForSale",
                        link: "/tools/dataProtector/dataProtectorSharing/selling/setProtectedDataForSale",
                      },
                      {
                        text: "buyProtectedData",
                        link: "/tools/dataProtector/dataProtectorSharing/selling/buyProtectedData",
                      },
                      {
                        text: "removeProtectedDataForSale",
                        link: "/tools/dataProtector/dataProtectorSharing/selling/removeProtectedDataForSale",
                      },
                    ],
                  },
                  {
                    text: "Subscription",
                    link: "/tools/dataProtector/dataProtectorSharing/subscription",
                    collapsed: true,
                    items: [
                      {
                        text: "setSubscriptionParams",
                        link: "/tools/dataProtector/dataProtectorSharing/subscription/setSubscriptionParams",
                      },
                      {
                        text: "setProtectedDataToSubscription",
                        link: "/tools/dataProtector/dataProtectorSharing/subscription/setProtectedDataToSubscription",
                      },
                      {
                        text: "subscribe",
                        link: "/tools/dataProtector/dataProtectorSharing/subscription/subscribe",
                      },
                      {
                        text: "removeProtectedDataFromSubscription",
                        link: "/tools/dataProtector/dataProtectorSharing/subscription/removeProtectedDataFromSubscription",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Glossary",
                link: "/tools/dataProtector/glossary/types",
                collapsed: true,
                items: [
                  {
                    text: "Types",
                    link: "/tools/dataProtector/glossary/types",
                  },
                ],
              },
            ],
          },
          {
            text: "Web3mail",
            link: "/tools/web3mail",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/tools/web3mail/getting-started",
              },
              {
                text: "Advanced Configuration",
                link: "/tools/web3mail/advanced-configuration",
              },
              {
                text: "fetchMyContacts",
                link: "/tools/web3mail/fetchMyContacts",
              },
              {
                text: "fetchUserContacts",
                link: "/tools/web3mail/fetchUserContacts",
              },
              {
                text: "sendEmail",
                link: "/tools/web3mail/sendEmail",
              },
            ],
          },
          {
            text: "Oracle Factory",
            link: "/tools/oracleFactory",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/tools/oracleFactory/getting-started",
              },
              {
                text: "createOracle",
                link: "/tools/oracleFactory/createOracle",
              },
              {
                text: "readOracle",
                link: "/tools/oracleFactory/readOracle",
              },
              {
                text: "updateOracle",
                link: "/tools/oracleFactory/updateOracle",
              },
            ],
          },
        ],
      },
      {
        text: "Help",
        items: [{ text: "Contact Us", link: "/help/contact-us" }],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
