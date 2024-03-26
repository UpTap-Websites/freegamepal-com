export const SID = `999P9`;

export const DEV_MODE = false; // 广告模式，是否启用 adtest="on"

export const SHOW_AD = false; // 是否显示广告

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

// 计算当前时间到2023年9月21日的天数，再按每天增加4个量生成总数

// 定义过去的日期
const pastDate = new Date("2023-09-21");

// 获取今天的日期
const today = new Date();

// 计算今天到过去日期的毫秒数差
const timeDiff = today.getTime() - pastDate.getTime();

// 将毫秒数差转换为天数
const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
// console.log(`days: `, days);

// 每页游戏数量
export const GAMES_PER_PAGE = 48 + 4 * 7 + 4; // 2024.03.26
// process.env.NODE_ENV === "development" ? 48 : 48 + 4 * 7 + days * 4; // 2023.9.21
