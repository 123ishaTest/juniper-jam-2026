<script lang="ts">
  import { engine } from '$lib/game/game.svelte';
</script>

<button class="d-btn d-btn-danger" onclick={() => engine.features.gameManager.resetGames()}>Reset games</button>
<button
  class="d-btn d-btn-danger"
  onclick={() =>
    engine.features.gameManager.games.forEach((game) => {
      localStorage.setItem(game.saveKey, new Date().toJSON());
    })}>Unlock all</button
>
