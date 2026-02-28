<script lang="ts">
  interface IconButtonProps {
    info: IconButtonInfo;
  }

  let { info }: IconButtonProps = $props();

  const href: string = info.href;
  const target: string = info.target;
  const content: string = info.title;
</script>

<a {href} {target}>
  <info.icon />
  <span class="unselectable">{content}</span>
</a>

<style lang="scss">
  a {
    position: relative;
    font-size: calc(0.45dvw + 1.2rem);
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  span {
    --scale: 0;
    position: absolute;
    padding-top: 1.3dvh;
    font-size: calc(0.2dvw + 1rem);
    transform: translateX(-50%) scale(var(--scale));
    opacity: 0;
    inset: 100% auto auto 50%;
    line-height: 1;
  }

  a:hover span {
    --scale: 1;
    opacity: 1;
  }
</style>
