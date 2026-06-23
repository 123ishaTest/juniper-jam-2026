import { z } from 'zod';
import { ref } from '@123ishatest/louter';

export const GearSchema = z.strictObject({
  id: z.string(),
  game: z.optional(ref('game')),

  size: z.number(),
  image: z.string(),
});

export type GearDetail = z.infer<typeof GearSchema>;

export type GearId = string;

export type GearContent = { kind: 'gear'; schema: typeof GearSchema };
