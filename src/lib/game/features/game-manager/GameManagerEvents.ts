import type { GameDetail } from '$lib/game/features/game-manager/Game.content';

export interface GameManagerEvent {
  game: GameDetail;
}

export type GameCompletedEvent = GameManagerEvent;
