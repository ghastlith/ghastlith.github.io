<script lang="ts">
  import { page as state } from "$app/state";
  import { Background, Loader, Meta, Navigation, Title } from "$components";
  import { Page } from "$enums";
  import "$styles";

  interface LayoutProps {
    children: Children;
  }

  let { children }: LayoutProps = $props();

  let page: Page = $derived(state.data.page);
  let key: Path = $derived(state.url);
</script>

{#key key}
  <Loader />
{/key}

<Title title={page} />
<Meta />
<Background />

<main>
  <Navigation {page} />
  {@render children()}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8dvh 0;
  }
</style>
