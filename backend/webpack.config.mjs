import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/handler.ts', // Lambda handler or main serverless entry
  target: 'node20', // Match the AWS Lambda Node runtime or your target
  mode: 'production',
  externals: [nodeExternals()], // Exclude node_modules from bundle

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'handler.js',
    libraryTarget: 'module',
    chunkFormat: 'module',
    environment: {
      module: true,
    }
  },

  experiments: {
    outputModule: true,
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  }
};
