<script lang="ts">
  import { TypeWriter } from "$components";
  import { delay, onPageLoad } from "$functions/utility";
  import { onMount } from "svelte";

  let loaded: boolean = $state(false);

  const stagger: number = 1000;

  async function run(): Promise<void> {
    await delay(stagger);
    loaded = true;
  }

  function setup(): void {
    onPageLoad(document, run);
  }

  onMount(setup);
</script>

<h1 class="bold">Hello! I am Vilas</h1>
<TypeWriter {loaded} />

<style lang="scss">
  h1 {
    margin-top: 27dvh;
    font-size: calc(0.8dvw + 1.7rem);
  }
</style>
