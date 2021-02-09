module.exports = {
  siteMetadata: {
    title: 'Fernando Papaqui',
    author: 'Fernando Papaqui',
    description: 'Front-end web developer from Mexico',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`],
          },
        ],
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
    {
      resolve: 'gatsby-transformer-remark',
    },
  ],
}
