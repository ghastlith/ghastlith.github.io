<script lang="ts">
  import { ImageLoader } from "$components";
  import { classes } from "$functions/styles";
  import { WhiteRabbitLarge, WhiteRabbitSmall } from "$images";

  const small: string = WhiteRabbitSmall;
  const large: string = WhiteRabbitLarge;
  const alt: string = "white rabbit";
  const image: ImageInfo = { small, large, alt };

  const { thin, underline, highlight, accent } = classes;
</script>

<section>
  <p>If <i class:thin class:accent>you</i> don't know</p>
  <p>where <b class:underline>you're</b> <b>going,</b></p>
  <p>any <b class:highlight>&nbsp;road&nbsp;</b> <i>will</i></p>
  <p>take <b class:accent>you there.</b></p>
</section>

<picture>
  <ImageLoader {image} />
</picture>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 21dvh 0 8dvh 0;
  }

  p, p * {
    font-size: calc(0.8dvw + 1.2rem);
    font-family: "Shantell Sans", cursive;
  }

  picture {
    height: 15dvh;
  }
</style>
