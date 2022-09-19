module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      blue: "#0089E2",
      orange: "#F86C4B",
      yellow:'#ffd444',
      purple: "#3C384D",
      grey: "#8C909D",
      "grey-2":"#fcfcfc",
      green:"#08C660",
      lime:"#a0f541",
      "purple-pure": "#07021D",
      "bg-white": "#f7f7f9",
      red: "#E02A3F",
    },
    extend: {
      width: {
        button: "343px",
      },
      height: {
        button: "52px",
      },

    },
    borderRadius: {
      button: "12px",
    },
    fontSize: {
      button: "16px",
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
