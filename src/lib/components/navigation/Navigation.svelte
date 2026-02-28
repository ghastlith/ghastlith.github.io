<script lang="ts">
  import { NavigationItem } from "$components";
  import { Page } from "$enums";
  import { getNavigationItems } from "$functions/route";

  interface NavigationProps {
    page: Page;
  }

  let { page }: NavigationProps = $props();

  let items: NavigationItemInfo[] = $derived(getNavigationItems(page));
  let visible: boolean = $derived(items.length > 0);
</script>

<nav>
  {#if visible}
    {#each items as info}
      <NavigationItem {info} />
    {/each}
  {/if}
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: center;
    gap: 14px;
  }
</style>
