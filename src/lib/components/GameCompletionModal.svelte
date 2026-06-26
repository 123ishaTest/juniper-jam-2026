<script lang="ts">
  import Modal from '$lib/components/Modal.svelte';
  import { onMount } from 'svelte';
  import { engine } from '$lib/game/game.svelte';

  let showModal = $state(false);

  onMount(() => {
    return engine.features.gearGrid.onMetaGameCompleted.subscribe(() => {
      showModal = true;
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

    <!--    <div class="flex flex-row space-x-4">-->
    <!--      <a href="https://github.com/123ishaTest/ludiek" target="_blank">-->
    <!--        <img class="w-6" src={asset('/icons/github.svg')} alt="Github" />-->
    <!--      </a>-->
    <!--      <a href="https://discord.gg/GVGEAM5jbf" target="_blank">-->
    <!--        <img class="w-6" src={asset('/icons/discord.svg')} alt="Discord" />-->
    <!--      </a>-->
    <!--      <a href="https://patreon.com/123ishaTest" target="_blank">-->
    <!--        <img class="w-6" src={asset('/icons/patreon.svg')} alt="Patreon" />-->
    <!--      </a>-->
    <!--    </div>-->
    <br />
  </div>
</Modal>
