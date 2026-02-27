/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/svelte" />

import type { ResolvedPathname } from "$app/types";
import type { Snippet } from "svelte";

declare global {
  type Children = Snippet<[]>;

  type LayoutInfo = {
    page: Page;
  };

  type Path = URL & {
    pathname: ResolvedPath;
  };

  type ResolvedPath = ResolvedPathname;
}

export {};
