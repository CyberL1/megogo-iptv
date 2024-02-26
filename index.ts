import { load } from "https://deno.land/std@0.217.0/dotenv/mod.ts";
const env = await load({ allowEmptyValues: true });

import { buildURL } from "@/utils/functions.ts";
import { ENDPOINTS } from "@/utils/constants.ts";
import { Channel } from "@/types.ts";

if (!env.MEGOGO_LANG) {
  console.log("No MEGOGO_LANG specified, defaulting to en");
  env.MEGOGO_LANG = "en";
}

const params: Record<string, string> = {
  lang: env.MEGOGO_LANG,
};

const channelsUrl = await buildURL(ENDPOINTS.TV.CHANNELS, params);
const channelsResponse = await (await fetch(channelsUrl)).json();

const channels: Channel[] = channelsResponse.data.channels;

for (const [index, channel] of channels.entries()) {
  console.log(index + 1, channel.title);
}
