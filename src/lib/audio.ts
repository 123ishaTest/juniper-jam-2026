import { Howl } from 'howler';
import { asset } from '$app/paths';

export const pickupSound = new Howl({ src: [asset('/assets/sounds/pickup.wav')], volume: 0.4 });
export const gameUnlockSound = new Howl({ src: [asset('/assets/sounds/game-unlocked.wav')], volume: 0.8 });
export const gameCompletedSound = new Howl({ src: [asset('/assets/sounds/game-completed.wav')], volume: 0.8 });

export const shufflePickupSound = () => {
  pickupSound.rate(0.8 + Math.random() * 0.4);
};
