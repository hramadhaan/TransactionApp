module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
