<script lang="ts">
  import type { GameId } from '$lib/game/features/game-manager/Game.content';
  import { engine } from '$lib/game/game.svelte';

  interface Props {
    gameId: GameId;
  }

  let { gameId }: Props = $props();

  let game = $derived(engine.contentManager.get(gameId, 'game'));
</script>

<div class="flex flex-row space-x-8 items-center">
  <div class="flex flex-col">
    <h2 class="text-xl text-red-600">{game.title}</h2>
    <p class="text-lg text-white">{game.description}</p>
  </div>

  <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
  <a href={game.url} target="_blank">Play!</a>
</div>
