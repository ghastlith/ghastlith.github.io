<script lang="ts">
  import { render } from "$functions/utility";

  interface ImageLoaderProps {
    image: ImageInfo;
  }

  let { image }: ImageLoaderProps = $props();

  const large: string = image.large;
  const src: string = image.small;
  const alt: string = image.alt;
</script>

{#await render(large)}
  <img {src} {alt} />
{:then src}
  <img {src} {alt} />
{/await}

<style lang="scss">
  img {
    height: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
