<script lang="ts">
  import { render } from "$functions/utility";

  interface ImageLoaderProps {
    image: ImageInfo;
  }

  let { image }: ImageLoaderProps = $props();

  let large: string = $derived(image.large);
  let src: string = $derived(image.small);
  let alt: string = $derived(image.alt);
</script>

{#await render(large)}
  <img {src} {alt} class="unselectable" />
{:then src}
  <img {src} {alt} class="unselectable" />
{/await}

<style lang="scss">
  img {
    height: 100%;
  }
</style>
