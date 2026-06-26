import { LudiekEngine, LudiekGame } from '@123ishatest/ludiek';
import { GameSchema } from '$lib/game/features/game-manager/Game.content';
import { GameManager } from '$lib/game/features/game-manager/GameManager.svelte';
import { GearGrid } from '$lib/game/features/gear-grid/GearGrid.svelte';
import { GearSchema } from '$lib/game/features/gear-grid/Gear.content';
import { Statistics } from '$lib/game/features/statistics/Statistics.svelte.js';

export const engine = new LudiekEngine({
  features: [new GameManager(), new GearGrid(), new Statistics()],
  content: [
    { kind: 'game', schema: GameSchema },
    { kind: 'gear', schema: GearSchema },
  ],
  debug: import.meta.env.MODE === 'development',
});

export const game = new LudiekGame(engine, {
  saveInterval: 10,
  saveKey: '@123ishatest/juniper-jam-2026-metagame',
  tickDuration: 1,
});
