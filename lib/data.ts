interface IMenuItem {
  title: string;
  href: string;
}

export const menuItems: IMenuItem[] = [
  {
    title: "News",
    href: "/topic/news",
  },
  {
    title: "Reviews",
    href: "/topic/reviews",
  },
  {
    title: "Best",
    href: "/topic/best",
  },
  {
    title: "Devices",
    href: "/topic/devices",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const siteInfo = {
  title: "TechMag",
  description: "Tech Magazine",
};
