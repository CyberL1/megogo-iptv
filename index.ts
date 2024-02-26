import { load } from "https://deno.land/std@0.217.0/dotenv/mod.ts";
const env = await load({ allowEmptyValues: true });

import { buildURL } from "@/utils/functions.ts";
import { ENDPOINTS } from "@/utils/constants.ts";
import { Channel, Stream } from "@/types.ts";
import { existsSync } from "@/deps.ts";

if (!env.MEGOGO_LANG) {
  console.log("No MEGOGO_LANG specified, defaulting to en");
  env.MEGOGO_LANG = "en";
}

if (!existsSync("generated")) Deno.mkdirSync("generated");

const params: Record<string, string> = {
  lang: env.MEGOGO_LANG,
};

const channelsUrl = await buildURL(ENDPOINTS.TV.CHANNELS, params);
const channelsResponse = await (await fetch(channelsUrl)).json();

const channels: Channel[] = channelsResponse.data.channels;

let playlist = "#EXTM3U\n";

for (const [index, channel] of channels.entries()) {
  console.log(`[Playlist] Generating channel ${index + 1}/${channels.length}`);

  const params: Record<string, string> = {
    video_id: `${channel.id}`,
  };

  const streamUrl = await buildURL(ENDPOINTS.STREAM, params);
  const streamData: Stream = (await (await fetch(streamUrl)).json()).data;

  const { src } = streamData.bitrates[0];
  const channelNumber = channel.index_numbers[0].number;

  playlist +=
    `#EXTINF:0 channel-id="${channel.id}" tvg-id="${channel.title}" tvg-logo="${channel.image.original}" tvg-chno="${channelNumber}" group-title="Megogo", ${channel.title}\n${src}\n`;
}

Deno.writeTextFileSync("generated/Megogo.m3u8", playlist);
console.log("[Playlist] Done");
