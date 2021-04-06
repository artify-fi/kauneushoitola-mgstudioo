module.exports = {
  siteMetadata: {
    title: `MG Studio - Kauneushoitola Malminkartano`,
    description: `MG Studiosta saat monipuolista palvelua, joka on tarkoitettu juuri Sinulle! MG Studion tiimi koostuu kauneus- ja hyvinvointialojen asiantuntijoista, joiden käsissä saat levähtää turvallisesti ja rentoutua arjen keskellä. `,
    titleTemplate: `%s |Kauneushoitola Malminkartano, Vantaa`,
    siteUrl: `https://www.mgstudio.fi//`,
    twitterUsername: `@mgstudio`,
    image: `logo.jpg`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-remark-images`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://hakukonestudio.artify.fi/hakukonestudio/graphql`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mgstudio.fi/',
        sitemap: 'https://www.mgstudio.fi/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.mgstudio.fi/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: [
                `100`,
                `100i`,
                `300`,
                `300i`,
                `400`,
                `400i`,
                `500`,
                `500i`,
                `700`,
                `700i`,
                `900`,
                `900i`,
              ],
            },
            {
              family: `Poppins`,
              variants: [`300`, `400`, `500`, `600`, `700`],
            },
            {
              family: `Lato`,
              variants: [`300`, `400`, `700`],
            },
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `600`, `700`, `800`],
            },
            {
              family: `Raleway`,
              variants: [`500`, `600`],
            },
            {
              family: `Heebo`,
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
            },
            {
              family: `Playfair Display`,
              variants: [`300`, `400`, `400i`, `700`, `500`, `600`, `700i`],
            },
            {
              family: `DM Sans`,
              variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
