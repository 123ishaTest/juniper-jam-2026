<script lang="ts">
  import { engine, game } from '$lib/game/game.svelte';
  import Panel from '$lib/components/panel/Panel.svelte';
  import GearOverview from '$lib/components/GearOverview.svelte';
  import GearGrid from '$lib/components/GearGrid.svelte';
  import { DragDropProvider } from '@dnd-kit/svelte';
  import { onMount } from 'svelte';

  let { data } = $props();

  // TODO(@Isha): Where should this go, on the server?
  engine.contentManager.load(data);

  onMount(() => {
    // TODO(@Isha): Consider if we even want to support saving?
    game.start();
  });

  const scan = () => {
    engine.features.gameManager.scanForCompletions();
  };

  function onDragEnd(event) {
    if (event.canceled) return;

    const source = event.operation.source;
    const target = event.operation.target;
    if (!source || !target) {
      return;
    }

    const gearId = source.id;
    const targetId = target.id;

    console.log(gearId, targetId);
    if (targetId.startsWith('cancel')) {
      engine.features.gearGrid.removeById(gearId);
      return;
    }

    console.log(event.operation.source);
    const x = event.operation.target.data.x;
    const y = event.operation.target.data.y;
    console.log(x, y);
    engine.features.gearGrid.removeById(gearId);
    engine.features.gearGrid.placeGear(x, y, gearId);

    console.log(targetId);
  }
</script>

<div class="flex flex-row h-full space-x-8 pl-8">
  <DragDropProvider {onDragEnd}>
    <div class="flex-1 min-w-0 min-h-0">
      <GearGrid />
    </div>
    <div class="flex flex-col space-y-8 min-w-96">
      <Panel>
        <Panel --pixel-upscale={2} snug>
          <button class="" onclick={() => scan()}>Scan</button>
        </Panel>
      </Panel>

      <GearOverview />
    </div>
  </DragDropProvider>
</div>
