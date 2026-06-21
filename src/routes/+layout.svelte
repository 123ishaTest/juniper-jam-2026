<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import { LuiConfigBuilder, LuiContext } from '@123ishatest/lui';
  import { engine } from '$lib/game/game.svelte';

  import background from '$lib/assets/background.png';

  let { children } = $props();

  const config = new LuiConfigBuilder().build();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<LuiContext {config} {engine}>
  <div class="p-4 h-screen w-full overflow-hidden select-none" style="background-image: url({background})">
    {@render children()}
  </div>
</LuiContext>

<style>
</style>
