module.exports = {
  siteMetadata: {
    title: 'fp/dev',
    titleTemplate: '%s | fp/dev',
    author: 'Fernando Papaqui',
    description: 'Front-end web developer from Mexico',
    url: 'https://www.fernandopapaqui.dev',
    image: '/src/img/snap.jpg',
    twitterUsername: '@papaqui_dev',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://admin.fernandopapaqui.dev/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `400, 500`],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-MBPTEM7FJN'],
      },
    },
  ],
}
