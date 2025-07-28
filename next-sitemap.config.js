/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bars-surgut.ru",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
