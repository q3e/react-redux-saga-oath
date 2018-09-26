const { compose } = require('redux')

const enhancers = [
  /* eslint-disable global-require, import/order */
  require('@zeit/next-sass'),
]

module.exports = compose(...enhancers)({
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    }

    return config
  },
})
