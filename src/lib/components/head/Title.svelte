<script lang="ts">
  import { Page } from "$enums";

  interface TitleProps {
    title: Page;
  }

  let { title }: TitleProps = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
