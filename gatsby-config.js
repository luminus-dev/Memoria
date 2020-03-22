module.exports = {
  siteMetadata: {
    title: `Memoria`,
    authors: [
      { name: "Tori", slug: "tori" },
      { name: "Neko", slug: "neko" },
      { name: "Inu", slug: "inu" }
    ]
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    }
  ]
}
