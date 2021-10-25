module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personal-site-v4",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        icon: `src/images/gatsby-icon.png`
      }
    }
  ],
};
