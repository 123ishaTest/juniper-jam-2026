<script lang="ts">
  import { type Asset } from '$app/types';
  import { onMount } from 'svelte';
  import { asset } from '$app/paths';

  interface Props {
    size: number;
    fps: number;
    frames: Asset[];
    isReversed?: boolean;
  }

  let { size, fps, frames, isReversed = false }: Props = $props();

  let frameImages = $derived(frames.map((f) => asset('/assets/gear/' + f)));

  let frameIndex = $state(0);
  let isPaused = $derived(fps === 0);
  let delay = $derived(isPaused ? 1000 : 1000 / fps);
  let delta = $derived(isPaused ? 0 : isReversed ? -1 : +1);

  let timeOut: ReturnType<typeof setTimeout>;

  const startAnimation = () => {
    frameIndex = (frameIndex + delta + frameImages.length) % frameImages.length;
    timeOut = setTimeout(startAnimation, delay);
  };

  onMount(() => {
    startAnimation();

    return () => clearTimeout(timeOut);
  });
  let currentFrame: Asset = $derived(frameImages[frameIndex]);
</script>

<img class="pixelated" src={currentFrame} alt="Gear" style="width: {size}px; height: {size}px" />
