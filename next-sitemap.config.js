/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.freegamepal.com",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  // ...other options
  exclude: ["/t/privacy-policy", "/t/terms-of-use"],
};

// export default config;
