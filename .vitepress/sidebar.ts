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
            link: "/tools/dataprotector",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/tools/dataprotector/getting-started",
              },
              {
                text: "fetchGrantedAccess",
                link: "/tools/dataprotector/fetchGrantedAccess",
              },
              {
                text: "fetchProtectedData",
                link: "/tools/dataprotector/fetchProtectedData",
              },
              {
                text: "grantAccess",
                link: "/tools/dataprotector/grantAccess",
              },
              {
                text: "processProtectedData",
                link: "/tools/dataprotector/processProtectedData",
              },
              {
                text: "protectData",
                link: "/tools/dataprotector/protectData",
              },
              {
                text: "revokeOneAccess",
                link: "/tools/dataprotector/revokeOneAccess",
              },
              {
                text: "revokeAllAccessObservable",
                link: "/tools/dataprotector/transferOwnership",
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
            ],
          },
        ],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
