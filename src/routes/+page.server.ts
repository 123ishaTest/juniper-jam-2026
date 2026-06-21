import type { PageServerLoad } from './$types';
import { parseContent } from '$lib/server/louter';

// export const ssr = false;
export const prerender = true;

export const load: PageServerLoad = async () => {
  return await parseContent();
};
