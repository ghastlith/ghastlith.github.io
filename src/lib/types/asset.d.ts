import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

declare global {
  type ImageInfo = {
    small: string;
    large: string;
    alt: string;
  };

  type ImageSrc = string | null;

  type Icon = Component<SvelteHTMLElements["svg"]>;
}

export {};
