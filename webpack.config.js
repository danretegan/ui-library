const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      publicPath: "/assets/",
    },
    port: 8080, //* Se poate specifica un port personalizat
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //* Ordinea este importantă și este de la dreapta la stânga: mai întâi css-loader va încărca CSS-ul din fișierele CSS, și apoi style-loader va adăuga stilurile în documentul HTML.
      },
    ],
  },
};
