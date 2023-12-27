interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Next Mobbin Clone",
  description:
    "An ui colorgen application built to help you with color setup in shadcn/ui.",
  url: "https://next-mobbin-clone.app",
  ogImage: "https://next-mobbin-clone.app/og.jpg",
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-mobbin-clone",
  },
};
