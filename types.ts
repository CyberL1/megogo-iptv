export interface Channel {
  id: number;
  title: string;
  image: ChannelImage;
  is_available: boolean;
  slug: string;
  color_theme?: { main: string };
  index_numbers: { genre_id: number; number: number }[];
  type: string;
  free: boolean;
  vod_channel: boolean;
  channel_control_restricted: boolean;
  epg_id: number;
  gernes: number[];
  in_current_subscription: boolean;
  parental_control_required: boolean;
  is_dvr: boolean;
  stream_source: string;
  is_favorite: boolean;
}

interface ChannelImage {
  big: string;
  small: string;
  original: string;
  original_wide: string;
  fullscreen: string;
  monochrome_logo: string;
  image_470x270: string;
  image_215x120: string;
}
