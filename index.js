const glue = require('glue')

async function glupe (manifest, options) {
  const server = await glupe.compose(manifest, options)
  const info = {}

  try {
    // Start the server
    await server.start()

    // Log server start
    info.uri = server.info.uri
    info.message = 'Started server'

    server.log('info', info)
    console.info(info.message, info.uri)

    return server
  } catch (err) {
    // Log server error
    info.err = err
    info.message = 'Failed to start server'

    server.log(['error', 'info'], info)
    console.error(info.message, err)
    console.log('Exiting process')

    process.exit(1)
  }
}

glupe.compose = async (manifest, options) => {
  try {
    return await glue.compose(manifest, options)
  } catch (err) {
    console.error('Failed to compose server', err)
    throw err
  }
}

module.exports = glupe
