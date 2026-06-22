<script lang="ts">
  import { createDraggable } from '@dnd-kit/svelte';
  import AnimatedGear from '$lib/components/AnimatedGear.svelte';
  import { engine } from '$lib/game/game.svelte';

  interface Props {
    fps: number;
    cellSize: number;
    gearId: string;
  }

  let { fps, cellSize, gearId }: Props = $props();

  let gear = $derived(engine.contentManager.get(gearId, 'gear'));
  const draggable = $derived(createDraggable({ id: gear.id }));

  let size = $derived(cellSize * gear.size);
</script>

<div class="cursor-grab" {@attach draggable.attach}>
  <AnimatedGear {fps} frames={gear.frames} {size} />
</div>
