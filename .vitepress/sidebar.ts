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
                text: "Migrate from v1",
                link: "/tools/dataProtector/migrate-from-v1",
              },
              {
                text: "fetchGrantedAccess",
                link: "/tools/dataProtector/fetchGrantedAccess",
              },
              {
                text: "fetchProtectedData",
                link: "/tools/dataProtector/fetchProtectedData",
              },
              {
                text: "grantAccess",
                link: "/tools/dataProtector/grantAccess",
              },
              {
                text: "processProtectedData",
                link: "/tools/dataProtector/processProtectedData",
              },
              {
                text: "protectData",
                link: "/tools/dataProtector/protectData",
              },
              {
                text: "revokeOneAccess",
                link: "/tools/dataProtector/revokeOneAccess",
              },
              {
                text: "revokeAllAccessObservable",
                link: "/tools/dataProtector/revokeAllAccessObservable",
              },
              {
                text: "transferOwnership",
                link: "/tools/dataProtector/transferOwnership",
              },
            ],
          },
          {
            text: "DataProtectorSharing",
            link: "/tools/dataProtectorSharing",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/tools/dataProtectorSharing/getting-started",
              },
              {
                text: "Collection",
                link: "/tools/dataProtectorSharing/collection",
                collapsed: true,
                items: [
                  {
                    text: "createCollection",
                    link: "/tools/dataProtectorSharing/collection/createCollection",
                  },
                  {
                    text: "removeCollection",
                    link: "/tools/dataProtectorSharing/collection/removeCollection",
                  },
                  {
                    text: "addToCollection",
                    link: "/tools/dataProtectorSharing/collection/addToCollection",
                  },
                  {
                    text: "removeFromCollection",
                    link: "/tools/dataProtectorSharing/collection/removeFromCollection",
                  },
                ],
              },
              {
                text: "Misc",
                link: "/tools/dataProtectorSharing/misc",
                collapsed: true,
                items: [
                  {
                    text: "consumeProtectedData",
                    link: "/tools/dataProtectorSharing/misc/consumeProtectedData",
                  },
                  {
                    text: "getProtectedDataInCollection",
                    link: "/tools/dataProtectorSharing/misc/getProtectedDataInCollections",
                  },
                  {
                    text: "getProtectedDataPricingParams",
                    link: "/tools/dataProtectorSharing/misc/getProtectedDataPricingParams",
                  },
                ],
              },
              {
                text: "Renting",
                link: "/tools/dataProtectorSharing/renting",
                collapsed: true,
                items: [
                  {
                    text: "setProtectedDataToRenting",
                    link: "/tools/dataProtectorSharing/renting/setProtectedDataToRenting",
                  },
                  {
                    text: "rentProtectedData",
                    link: "/tools/dataProtectorSharing/renting/rentProtectedData",
                  },
                  {
                    text: "setProtectedDataToRenting",
                    link: "/tools/dataProtectorSharing/renting/setProtectedDataToRenting",
                  },
                ],
              },
              {
                text: "Selling",
                link: "/tools/dataProtectorSharing/selling",
                collapsed: true,
                items: [
                  {
                    text: "setProtectedDataForSale",
                    link: "/tools/dataProtectorSharing/selling/setProtectedDataForSale",
                  },
                  {
                    text: "buyProtectedData",
                    link: "/tools/dataProtectorSharing/selling/buyProtectedData",
                  },
                  {
                    text: "removeProtectedDataForSale",
                    link: "/tools/dataProtectorSharing/selling/removeProtectedDataForSale",
                  },
                ],
              },
              {
                text: "Subscription",
                link: "/tools/dataProtectorSharing/subscription",
                collapsed: true,
                items: [
                  {
                    text: "setSubscriptionParams",
                    link: "/tools/dataProtectorSharing/subscription/setSubscriptionParams",
                  },
                  {
                    text: "setProtectedDataToSubscription",
                    link: "/tools/dataProtectorSharing/subscription/setProtectedDataToSubscription",
                  },
                  {
                    text: "subscribe",
                    link: "/tools/dataProtectorSharing/subscription/subscribe",
                  },
                  {
                    text: "removeProtectedDataFromSubscription",
                    link: "/tools/dataProtectorSharing/subscription/removeProtectedDataFromSubscription",
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
