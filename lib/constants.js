export const SID = `999P9`;

export const DEV_MODE = false; // 广告模式，是否启用 adtest="on"

export const SHOW_AD = true; // 是否显示广告

export const SITE_META = {
  NAME: `FreeGamePal`, // 网站名称
  URL: `https://www.freegamepal.com`, // 网站网址
  DOMAIN: `freegamepal.com`, // 网站域名
  TAGLINE: `Free Online Games to Play`, // 网站标语或口号
};

export const GA_ID = `G-V21FK6YTJ4`; // Google Analytics ID

export const ADSENSE_ID = `ca-pub-9792274114758577`; // Google Adsense ID
export const ADS_SLOTS_ID = {
  HOME: ``, // 首页广告ID
  CATEGORY: ``, // 分类页广告ID
  DETAIL: ``, // 详情页广告ID
};

export const SELECTED_GAMES = []; //选择游戏
export const EXCLUED_GAMES = []; //排除游戏
export const FEATURED_GAMES = ["40337", "40071", "40214"]; // 首页推荐游戏,

export const GAMES_PER_PAGE =
  process.env.NODE_ENV === "development" ? 48 : 48 + 4 + 4 + 4 + 4 + 4 + 4 + 4; // 2023.9.21
