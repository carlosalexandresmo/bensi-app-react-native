module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {'ts-ignore': 'allow-with-description'},
    ],
  },
};
