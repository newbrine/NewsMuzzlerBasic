module.exports = {
  webpackFinal: (config) => console.dir(config, { depth: null}) || config,
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
