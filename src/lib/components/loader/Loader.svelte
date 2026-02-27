<script lang="ts">
  import { delay, onPageLoad } from "$functions/utility";
  import { onMount } from "svelte";
  import { RingLoader } from "svelte-loading-spinners";
  import { fade } from "svelte/transition";

  let loading: boolean = $state(true);

  const color: string = "#ebedf0";
  const size: string = "40";
  const unit: string = "px";
  const duration: string = "1.2s";
  const stagger: number = 600;

  async function fadeout(): Promise<void> {
    await delay();
    loading = false;
  }

  function setup(): void {
    onPageLoad(document, fadeout);
  }

  onMount(setup);
</script>

{#if loading}
  <section transition:fade={{ duration: stagger }}>
    <RingLoader {color} {size} {unit} {duration} />
  </section>
{/if}

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100dvw;
    height: 100dvh;
    padding-top: 44dvh;
    background-color: palette.$background;
  }
</style>
