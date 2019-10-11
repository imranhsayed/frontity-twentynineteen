import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const twentyNineteenTheme = {
  name: "@frontity/twentynineteen-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      color: "#0073aa",
      menu: [],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [image]
    }
  }
};

export default twentyNineteenTheme;
