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
            ],
          },
        ],
      },
    ],
  } satisfies DefaultTheme.Sidebar;
}
