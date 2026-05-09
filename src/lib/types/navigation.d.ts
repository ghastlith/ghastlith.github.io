declare global {
  type NavigationItemInfo = {
    icon: Icon;
    title: string;
    target: string;
    href: string;
  };

  type OptionalNavigationItemInfo = NavigationItemInfo | undefined;
}

export {};
