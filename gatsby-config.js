module.exports = {
  siteMetadata: {
    siteUrl: 'http://leeallen.net',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://leeallen.net',
        sitemap: 'http://leeallen.net/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: [
              '/sandbox/',
              '/version/',
            ],
          },
        ],
      },
    },
  ],
};
