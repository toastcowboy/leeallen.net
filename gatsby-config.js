module.exports = {
  siteMetadata: {
    description: 'The personal site of Lee Allen',
    siteUrl: 'http://leeallen.net',
    title: 'Lee Allen — Digital product leader',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-474631-1',
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
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
              '/work/'
            ],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
