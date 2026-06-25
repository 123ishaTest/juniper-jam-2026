<script lang="ts">
  import { engine } from '$lib/game/game.svelte';
  import { createDroppable } from '@dnd-kit/svelte';
  import DraggableGear from '$lib/components/DraggableGear.svelte';
  import { onMount } from 'svelte';

  let gearGrid = $derived(engine.features.gearGrid);

  let container: HTMLDivElement;

  let cellSize = $state(0);

  function updateSize() {
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();

    cellSize = Math.floor(Math.min(width / gearGrid.WIDTH, height / gearGrid.HEIGHT));
  }

  onMount(() => {
    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    return () => observer.disconnect();
  });

  import peg from '$lib/assets/peg.png';
</script>

<div class="flex w-full h-full items-center justify-center" bind:this={container}>
  <div
    class="grid"
    style={`
        grid-template-columns: repeat(${gearGrid.WIDTH}, ${cellSize}px);
        grid-template-rows: repeat(${gearGrid.HEIGHT}, ${cellSize}px);
    `}
  >
    {#each gearGrid.grid as rows, y (y)}
      {#each rows as tile, x (x)}
        <div
          class="flex flex-col items-center justify-center"
          {@attach !tile.isFixed && createDroppable({ id: `peg/${x}/${y}}`, data: { x, y } }).attach}
        >
          {#if tile.isVisible}
            <img class="pixelated h-4 w-4" src={peg} alt="Peg" />
          {/if}
          {#if tile.gear}
            <div class="absolute">
              <!-- TODO(@Isha): Add flexible gears-->
              <DraggableGear
                isReversed={tile.isReversed}
                speed={tile.speed}
                gearId={tile.gear}
                {cellSize}
                isDraggable={!tile.isFixed}
              />
            </div>
          {/if}
        </div>
      {/each}
    {/each}
  </div>
</div>
