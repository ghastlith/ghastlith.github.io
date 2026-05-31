<script lang="ts">
  import { classes } from "$functions/styles";
  import { render } from "$functions/utility";

  interface ImageLoaderProps {
    image: ImageInfo;
  }

  let { image }: ImageLoaderProps = $props();

  let large: string = $derived(image.large);
  let src: string = $derived(image.small);
  let alt: string = $derived(image.alt);

  const { unselectable } = classes;
</script>

{#await render(large)}
  <img {src} {alt} class:unselectable />
{:then src}
  <img {src} {alt} class:unselectable />
{/await}

<style>
  img {
    height: 100%;
  }
</style>
