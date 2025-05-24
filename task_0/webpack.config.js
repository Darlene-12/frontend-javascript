// webpack.config.js
const path = require('path');

module.exports = {
  entry: './js/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,       // Match .ts and .tsx files
        use: 'ts-loader',      // Use ts-loader to compile TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],  // File extensions to resolve
  },
  output: {
    filename: 'bundle.js',               // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development',                   // Build mode
};
