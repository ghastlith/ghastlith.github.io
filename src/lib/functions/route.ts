import { resolve } from "$app/paths";
import { Page, Target } from "$enums";
import { CatIcon, GitHubIcon, HackTheBoxIcon, HomeIcon, LinkedInIcon, TryHackMeIcon } from "$icons";

/**
 * The respective navigation bar center route based on the page.
 */
const routes: Partial<Record<Page, NavigationItemInfo>> = {
  [Page.HOME]:       { icon: CatIcon,  title: Page.WONDERLAND, target: Target.SELF, href: resolve("/wonderland") },
  [Page.WONDERLAND]: { icon: HomeIcon, title: Page.HOME,       target: Target.SELF, href: resolve("/") },
};

/**
 * The list of pages that don't have a navigation bar.
 */
const blacklist: Page[] = [
  Page.NOT_FOUND,
];

/**
 * Get the list of items for the navigation bar based on the current page.
 *
 * @param page the current displayed page
 * @returns The list of items for the navigation bar or empty if the page is blacklisted.
 */
export function getNavigationItems(page: Page): NavigationItemInfo[] {
  if (blacklist.includes(page)) {
    return [];
  }

  const center: NavigationItemInfo[] =  routes[page] ? [routes[page]] : [];

  const items: NavigationItemInfo[] = [
    { icon: LinkedInIcon,   title: "linkedin",   target: Target.BLANK, href: "https://www.linkedin.com/in/ghastlith" },
    { icon: GitHubIcon,     title: "github",     target: Target.BLANK, href: "https://github.com/ghastlith" },
    ...center,
    { icon: HackTheBoxIcon, title: "hackthebox", target: Target.BLANK, href: "https://app.hackthebox.com/profile/1419398" },
    { icon: TryHackMeIcon,  title: "tryhackme",  target: Target.BLANK, href: "https://tryhackme.com/p/ghastlith" },
  ];

  return items;
}
