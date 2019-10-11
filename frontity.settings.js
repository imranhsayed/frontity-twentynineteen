const settings = {
  name: "frontity-twentynineteen",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "@frontity/twentynineteen-theme",
      state: {
        theme: {
          color: "#0073aa",
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.frontity.io/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
