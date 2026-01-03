import type { PageLoad } from './$types';
import { fetchDiscordStatus } from '$lib';

export const load: PageLoad = async ({ fetch }) => {
  const { discordUserState } = await fetchDiscordStatus(fetch);

  return {
    discordUserState,
  };
};