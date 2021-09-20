const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "8rem",
        xl: "9rem",
        "2xl": "10rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "var(--secondary-color)",
        secondary: "var(--primary-color)",
        third: "var(--third-color)",
        fourth: "var(--fourth-color)",
        fifth: "var(--fifth-color)",
        sixth: "var(--sixth-color)",
      },

      backgroundColor: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "third-color": "var(--third-color)",
        "fourth-color": "var(--fourth-color)",
        "fifth-color": "var(--fifth-color)",
        "sixth-color": "var(--sixth-color)",
      },

      backgroundImage: {
        hero: "url('./assets/img/hero.png')",
        map: "url('./assets/img/bg-map.png')",
      },

      minHeight: {
        custom: "calc(100vh - 64px)",
      },

      height: {
        customHero: "27rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".icon-user": {
          backgroundImage: "url('./assets/img/username.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px 50%",
        },

        ".icon-nik": {
          backgroundImage: "url('./assets/img/nik.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px 50%",
        },

        ".icon-search": {
          backgroundImage: "url('./assets/img/search.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px 50%",
        },

        ".h-chart": {
          height: "500px",
        },

        ".capctha": {
          transform: "scale(0.6)",
        },

        ".border-custom": {
          border: "1px solid rgba(79, 101, 233, .5)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
