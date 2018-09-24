module.exports = {
  plugins: [
    'react-pug',
  ],
   globals: {
    React: true,
  },
   extends: [
     'datarockets',
    'plugin:react-pug/all',
  ],
   rules: {
    'no-param-reassign': 'off',
     // Turned off temporary because of pugjs
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
  },
   settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
