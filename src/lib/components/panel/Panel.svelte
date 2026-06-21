<script lang="ts">
  import '$lib/components/panel/panel.css';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    /**
     * Fits the panel to the exact size of the border
     */
    snug?: boolean;
  }

  let { children, snug = false }: Props = $props();

  let paddingClass = $derived(snug ? 'panel-snug' : 'p-6');
</script>

<div class="panel pixelated {paddingClass}">
  {#if children}
    {@render children()}
  {/if}
</div>
