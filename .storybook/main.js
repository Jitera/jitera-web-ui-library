const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    })

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
  ];

    // Return the altered config
    return config
  },
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, 'babel-plugin-styled-components']
  })
}
