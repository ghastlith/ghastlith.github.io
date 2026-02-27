<script lang="ts">
  import { TypeWriter } from "svelte-typewrite";

  interface TypeWriterProps {
    loaded: boolean;
  }

  let { loaded }: TypeWriterProps = $props();

  const repeat: Repeat = 1;
  const endState: EndState = {
    text: "typed",
    caret: "blink",
  };
  const afterDeleted: AfterDeleted = {
    blink: 2,
  };

  const empty: string[] = [""];
  const descriptions: string[] = [
    " a developer",
    " the villain",
    " nonchalant",
    " a hacker",
    " infinite",
    " a lover",
    " myself",
  ];

  let texts: string[] = $derived(loaded ? descriptions : empty);
</script>

<p>I am <TypeWriter {texts} {repeat} {endState} {afterDeleted} /></p>

<style lang="scss">
  p {
    font-size: calc(0.25dvw + 1.1rem);
  }
</style>
