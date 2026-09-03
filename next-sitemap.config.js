/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://knowandgrow.vercel.app',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // if using server-sitemap
}
