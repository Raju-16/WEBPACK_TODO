const path = require("path");
const { dirname } = require("path/posix");

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "build"),
        filename:"bundle.js",
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      }
}