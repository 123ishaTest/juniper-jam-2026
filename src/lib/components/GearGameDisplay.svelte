<script lang="ts">
  import { engine } from '$lib/game/game.svelte';
  import type { GearDetail } from '$lib/game/features/gear-grid/Gear.content';
  import DraggableGear from '$lib/components/DraggableGear.svelte';
  import GameDisplay from '$lib/components/GameDisplay.svelte';
  import AnimatedGear from '$lib/components/AnimatedGear.svelte';
  import { createDroppable } from '@dnd-kit/svelte';

  interface Props {
    gear: GearDetail;
  }

  let { gear }: Props = $props();
  let gearGrid = $derived(engine.features.gearGrid);
  let gameManager = $derived(engine.features.gameManager);

  let isUnlocked = $derived(gameManager.isCompleted(gear.game));
</script>

<div class="flex flex-row space-x-4 items-center">
  {#if isUnlocked}
    {#if !gearGrid.isPlaced(gear.id)}
      <DraggableGear gearId={gear.id} />
    {:else}
      <div class="disabled grayscale-100" {@attach createDroppable({ id: `cancel${gear.id}` }).attach}>
        <AnimatedGear fps={0} frames={gear.frames} />
      </div>
    {/if}
  {:else}
    <div class="disabled opacity-25">
      <AnimatedGear fps={0} frames={gear.frames} />
    </div>
  {/if}

  <GameDisplay gameId={gear.game} />
</div>
