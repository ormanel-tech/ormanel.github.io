const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily:{
      Poppins:["Poppins, sans-Serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens:{
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
    extend: {
      colors:{
        "mobile-font-color":"#4C45DB",
        "website-font-color":"#00DFC0",
        "join-button-color":"#45ACF4",
        "font-color":"#000000",
        "background-color":"#E5E5E5",
        "footer-color":"#052664",
        "footer-button-color":"#55ACEE",
        "bottom-bar":"#5B8FF0",
        "profile-details-color":"#E5E5E5",
        "linkedin-color":"#0A66C2",
        "facebook-color":"#699BF7",
        "twitter-color":"#55ACEE"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
