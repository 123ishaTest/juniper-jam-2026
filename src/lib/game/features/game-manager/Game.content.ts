import { z } from 'zod';

export const GameSchema = z.strictObject({
  id: z.string(),

  title: z.string(),
  description: z.string(),

  url: z.url(),
  saveKey: z.string(),
});

export type GameDetail = z.infer<typeof GameSchema>;

export type GameId = string;

export type GameContent = { kind: 'game'; schema: typeof GameSchema };
