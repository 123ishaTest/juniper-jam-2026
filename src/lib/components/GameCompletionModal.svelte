<script lang="ts">
  import Modal from '$lib/components/Modal.svelte';
  import { onMount } from 'svelte';
  import { engine } from '$lib/game/game.svelte';
  import { gameCompletedSound } from '$lib/audio';

  let showModal = $state(false);

  onMount(() => {
    return engine.features.gearGrid.onMetaGameCompleted.subscribe(() => {
      showModal = true;
      gameCompletedSound.play();
    });
  });
</script>

<Modal bind:showModal>
  <div class="flex flex-col items-center space-y-4">
    <h2 class="font-primary text-xl">You have completed the Metagame</h2>
    <p class="font-primary text-md">Thank you for playing, I hope you enjoyed it!</p>
    <p class="font-primary text-md">Massive thanks to all the devs who allowed me to showcase their game</p>
    <br />
    <p class="font-primary text-md">- Isha</p>
    <br />
  </div>
</Modal>
