exports.plugin = {
  name: 'router',
  register: (server, options) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return { hello: 'world' }
      }
    })
  }
}
