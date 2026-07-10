import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter(),
      alias: {
        $components: "src/lib/components/index",
        $functions: "src/lib/functions",
        $images: "src/lib/images/index",
        $styles: "src/lib/styles/styles.css",
        $enums: "src/lib/enums",
        $icons: "src/lib/icons",
      },
    }),
    Icons({ compiler: "svelte" }),
  ],
});
