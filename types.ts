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

export interface Stream {
  video_id: number;
  title: string;
  hierarchy_titles: { TV: string };
  src: string;
  drm_type: string;
  stream_type: string;
  content_type: string;
  audio_tracks: unknown;
  subtitles: unknown;
  bitrates: StreamBitrate[];
  cdn_id: number;
  advert_url: string;
  allow_external_streaming: boolean;
  start_session_url: string;
  parental_control_required: boolean;
  play_start_time: number;
  watermark: string;
  watermark_clickable_enabled: boolean;
  show_best_quality_link: boolean;
  share_link: string;
  external_source: boolean;
  channel_controls_restricted: boolean;
  is_sport: boolean;
  is_embed: boolean;
  is_autoplay: boolean;
  is_hierarchy: boolean;
  is_wvdrm: boolean;
  is_live: boolean;
  is_tv: boolean;
  is_3d: boolean;
  is_uhd: boolean;
  is_uhd_8k: boolean;
  is_hdr: boolean;
  is_favorite: boolean;
}

interface StreamBitrate {
  index: number;
  name: string;
  bitrate: number;
  src: string;
  license_server: string;
}
