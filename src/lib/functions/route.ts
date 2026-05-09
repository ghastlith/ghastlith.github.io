import { resolve } from "$app/paths";
import { External, Page, Target } from "$enums";
import { isDefined } from "$functions/utility";
import { CatIcon, GitHubIcon, HomeIcon, TryHackMeIcon } from "$icons";

/**
 * Map with all the possible navigation items.
 */
const items: Record<string, NavigationItemInfo> = {
  home:       { icon: HomeIcon,       title: Page.HOME,          target: Target.SELF,  href: resolve("/") },
  wonderland: { icon: CatIcon,        title: Page.WONDERLAND,    target: Target.SELF,  href: resolve("/wonderland") },
  github:     { icon: GitHubIcon,     title: External.GITHUB,    target: Target.BLANK, href: "https://github.com/ghastlith" },
  tryhackme:  { icon: TryHackMeIcon,  title: External.TRYHACKME, target: Target.BLANK, href: "https://tryhackme.com/p/ghastlith" },
};

/**
 * The respective navigation bar center route based on the page.
 */
const routes: Partial<Record<Page, NavigationItemInfo>> = {
  [Page.HOME]: items.wonderland,
  [Page.WONDERLAND]: items.home,
};

/**
 * The list of pages that don't have a navigation bar.
 */
const blacklist: Set<Page> = new Set([
  Page.NOT_FOUND,
]);

/**
 * Get the list of items for the navigation bar based on the current page.
 *
 * @param page the current displayed page
 * @returns The list of items for the navigation bar or empty if the page is blacklisted.
 */
export function getNavigationItems(page: Page): NavigationItemInfo[] {
  if (blacklist.has(page)) {
    return [];
  }

  const center: OptionalNavigationItemInfo = routes[page];
  const navigation: NavigationItemInfo[] = [
    items.github,
    center,
    items.tryhackme,
  ].filter(isDefined);

  return navigation;
}
