// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Iriée Zamblé",
  siteDescription: "Artist from Amsterdam",

  plugins: [
    {
      // Create paintings from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Painting",
        path: "content/paintings/*.md",
        route: "/paintings/:slug",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true,
          },
        },
      },
    },
    {
      // Create drawings from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Drawing",
        path: "content/drawings/*.md",
        route: "/drawings/:slug",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true,
          },
        },
      },
    },
    {
      // Create exhibitions from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Exhibition",
        path: "content/exhibitions/*.md",
        route: "/exhibitions/:slug",
      },
    },
    {
      // Create announcements from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Announcement",
        path: "content/announcements/*.md",
        route: "/announcements/:slug",
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
