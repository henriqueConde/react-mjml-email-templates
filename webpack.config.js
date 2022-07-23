// const path = require('path')

// // webpack.config.js; Basic setup
// module.exports = {
//     entry: "src/main.tsx",
//     output: {
//       // Export to the `./export` directory
//       path: path.join(__dirname, "export"),
//     },
//     // Load in files `ts` and `tsx` files
//     extensions: [".ts", ".tsx", ".js", ".jsx"],
//     module: {
//         rules: [
//             // Use the `ts-loader` loader to transform ts(x) files to javascript
//             {
//               test: /\.ts(x?)$/,
//               exclude: /node_modules/,
//               use: [
//                 {
//                   loader: "ts-loader",
//                 },
//               ],
//             },
//             // Use the `file-loader loader to transform images to their export locations
//             {
//               test: /\.(png|jpe?g|gif|svg)$/i,
//               loader: "file-loader",
//               options: {
//                 // Ensure the file gets copied to the exports folder
//                 emitFile: true,
//                 // Export as the string "./exports/images/[name].[ext]"
//                 name: "images/[name].[ext]",
//                 // In production: specify the URL of production file hosting here
//                 publicPath: path.join(__dirname, "export"),
//               },
//             },
//           ],
//     },
//     externals: {
//       react: "React",
//     },
//   };
  