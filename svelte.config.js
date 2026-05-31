import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/lib/components/index",
      $functions: "src/lib/functions",
      $images: "src/lib/images/index",
      $styles: "src/lib/styles/styles.css",
      $enums: "src/lib/enums",
      $icons: "src/lib/icons",
    },
  },
};

export default config;
