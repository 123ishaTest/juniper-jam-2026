<script lang="ts">
  import Panel from '$lib/components/panel/Panel.svelte';

  import github from '$lib/assets/icons/github.svg';
  import discord from '$lib/assets/icons/discord.svg';
  import patreon from '$lib/assets/icons/patreon.svg';
  import ludiek from '$lib/assets/icons/ludiek.png';
</script>

<Panel>
  <div class="flex flex-row flex-wrap items-center justify-between space-x-2">
    <a href="https://123ishatest.com" target="_blank">
      <p class="font-primary text-xs">
        Made by <span class="underline">Isha!</span>
      </p>
    </a>

    <a href="https://ludiek.123ishatest.com" target="_blank">
      <div class="flex flex-row space-x-2 items-center">
        <p class="font-primary text-xs">
          Made with <span class="underline">Ludiek!</span>
        </p>
        <img class="w-6" src={ludiek} alt="Ludiek" />
      </div>
    </a>

    <div class="flex flex-row items-center space-x-2">
      <a href="https://github.com/123ishaTest/juniper-jam-2026" target="_blank">
        <img class="w-6" src={github} alt="Github" />
      </a>
      <a href="https://discord.gg/3DRMj55yQP" target="_blank">
        <img class="w-6" src={discord} alt="Discord" />
      </a>
      <a href="https://www.patreon.com/123ishatest" target="_blank">
        <img class="w-6" src={patreon} alt="Patreon" />
      </a>
    </div>
  </div>
</Panel>
