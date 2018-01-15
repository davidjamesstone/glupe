const Lab = require('lab')
const Code = require('code')
const lab = exports.lab = Lab.script()
const glupe = require('../..')
const { manifest, options } = require('../server')

lab.experiment('API test', () => {
  let server

  // Create server before tests. No need to start
  // it though, `server.inject` will still work
  lab.before(async () => {
    server = await glupe.compose(manifest, options)
    server.initialize()
  })

  lab.test('GET / route works', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const response = await server.inject(options)
    Code.expect(response.statusCode).to.equal(200)
    Code.expect(response.result).to.equal({ hello: 'world' })
  })
})
