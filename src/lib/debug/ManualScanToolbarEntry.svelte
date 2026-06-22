<script lang="ts">
  import { engine } from '$lib/game/game.svelte';
</script>

<button class="d-btn" onclick={() => engine.features.gameManager.scanForCompletions()}>Scan</button>

<button class="d-btn btn-primary" onclick={() => localStorage.setItem('123ishatest/demo', new Date().toJSON())}
  >Complete demo</button
>
