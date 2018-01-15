module.exports = {
  options: {
    relativeTo: __dirname
  },
  manifest: {
    server: {
      port: 3002,
      host: '0.0.0.0'
    },
    register: {
      plugins: [
        './plugins/log-errors',
        './plugins/router'
      ]
    }
  }
}
