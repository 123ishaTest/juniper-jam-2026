<script lang="ts">
  import Panel from '$lib/components/panel/Panel.svelte';

  let { showModal = $bindable(), children } = $props();
</script>

{#if showModal}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
    <div onclose={() => (showModal = false)}>
      <Panel>
        <div class="flex flex-col items-center">
          {@render children?.()}

          <div>
            <Panel --pixel-upscale="1" className="hover:bg-red-600" snug>
              <button onclick={() => (showModal = false)} class="font-primary text-xs p-2 cursor-pointer"
                >Keep spinning!
              </button>
            </Panel>
          </div>
        </div>
      </Panel>
    </div>
  </div>
{/if}

<style>
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
