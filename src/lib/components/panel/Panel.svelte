<script lang="ts">
  import '$lib/components/panel/panel.css';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    className?: string;
    /**
     * Fits the panel to the exact size of the border
     */
    snug?: boolean;
  }

  let { children, snug = false, className }: Props = $props();

  let paddingClass = $derived(snug ? 'panel-snug' : 'p-6');
</script>

<div class="panel pixelated {paddingClass} {className}">
  {#if children}
    {@render children()}
  {/if}
</div>
