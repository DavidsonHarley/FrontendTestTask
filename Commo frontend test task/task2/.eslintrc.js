module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'no-sequences': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
  },
};
