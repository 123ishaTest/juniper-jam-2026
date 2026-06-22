<script lang="ts">
  import '$lib/components/progress-bar/progress-bar.css';

  import type { Snippet } from 'svelte';
  import Panel from '$lib/components/panel/Panel.svelte';

  interface Props {
    progress: number;
    showPercentage?: boolean;
    children?: Snippet;
  }

  let { progress = 0, showPercentage = false, children }: Props = $props();

  const variant = 'indigo';
  let percentage = $derived(Math.max(0, Math.min(1, progress)) * 100);
</script>

<Panel snug={true} className="w-full">
  <div class="relative">
    <div class="text absolute flex w-full flex-row justify-center space-x-1">
      {#if children}
        <div>
          {@render children()}
        </div>
      {/if}
      {#if showPercentage}
        <span>{percentage.toFixed(0)}%</span>
      {/if}
    </div>

    <div class="outer w-full">
      <div class="progress progress-{variant} pixelated" style="width: {percentage}%">&nbsp;</div>
    </div>
  </div>
</Panel>
