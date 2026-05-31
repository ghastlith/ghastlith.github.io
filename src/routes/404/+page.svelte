<script lang="ts">
  import { resolve } from "$app/paths";
  import { classes } from "$functions/styles";

  const href: ResolvedPath = resolve("/");

  const { thin, accent } = classes;
</script>

<section>
  <h1><b>404</b></h1>
  <h2 class:thin>I have my own problems to take care of. <a {href} class:accent>Here, this one is yours</a></h2>
  <p class:thin>- Wirt (the <i>Elder</i> Child)</p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70dvw;
    margin-top: 28dvh;
  }

  h1 {
    font-size: 3.4rem;
  }

  h2 {
    font-size: calc(0.25dvw + 1.1rem);
  }

  p {
    margin-top: 0.6dvh;
    text-align: right;
  }
</style>
