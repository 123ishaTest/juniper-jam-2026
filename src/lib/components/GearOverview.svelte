<script lang="ts">
  import { engine } from '$lib/game/game.svelte';
  import GearGameDisplay from '$lib/components/GearGameDisplay.svelte';
  import ProgressBar from '$lib/components/progress-bar/ProgressBar.svelte';
  import ResetSaveToolbarEntry from '$lib/debug/ResetSaveToolbarEntry.svelte';
  import ResetGamesToolbarEntry from '$lib/debug/ResetGamesToolbarEntry.svelte';
  import ManualScanToolbarEntry from '$lib/debug/ManualScanToolbarEntry.svelte';

  let gameManager = $derived(engine.features.gameManager);
  let gearGrid = $derived(engine.features.gearGrid);

  // let games = $derived(gameManager.games)
  let gears = $derived(gearGrid.gears);

  let gamesCompleted = $derived(gameManager.gamesCompleted);
  let totalGames = $derived(gameManager.gameCount);
  let progress = $derived(gamesCompleted / totalGames);
</script>

<div class="flex flex-col h-full lg:w-min-[128]">
  <div class="flex flex-row w-full mb-8">
    <ProgressBar {progress}>
      <span class="font-primary">{gamesCompleted}/{totalGames} Games completed</span>
    </ProgressBar>
  </div>

  <div class="flex flex-col space-y-2 overflow-y-scroll">
    {#each gears as gear (gear.id)}
      {#if gear.game}
        <GearGameDisplay {gear} />
      {/if}
    {/each}
  </div>

  <div class="grow"></div>
  <div class="flex flex-row space-x-2">
    <ResetSaveToolbarEntry />
    <ResetGamesToolbarEntry />
    <ManualScanToolbarEntry />
  </div>
</div>
