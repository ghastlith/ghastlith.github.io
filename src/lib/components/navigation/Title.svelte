<script lang="ts">
  import { Page } from "$enums";

  interface TitleProps {
    page: Page;
  }

  let { page }: TitleProps = $props();
</script>

<svelte:head>
  <title>{page}</title>
</svelte:head>
