import { crypto } from "@/deps.ts";
import { encodeHex } from "@/deps.ts";

const signParts = ["b90a537994", "_android_tv_17"];

export const buildURL = async (
  endpoint: string,
  params: Record<string, string>,
) => {
  let sign = "";

  for (const [param, key] of Object.entries(params)) {
    sign += `${param}=${key}`;
  }

  sign += signParts[0];

  const encodedSign = new TextEncoder().encode(sign);
  const hash = await crypto.subtle.digest("MD5", encodedSign);

  let hexHash = encodeHex(hash);
  hexHash += signParts[1];

  params.sign = hexHash;
  const paramsString = new URLSearchParams(params).toString();

  return `https://api.megogo.net/v1/${endpoint}?${paramsString}`;
};
