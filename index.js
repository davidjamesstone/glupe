'use strict'

const fs = require('fs')
const Glue = require('glue')
const requireDirectory = require('require-directory')

function checkDirectorySync (directory) {
  try {
    return fs.statSync(directory).isDirectory()
  } catch (e) {
    return false
  }
}

function Glupe (relativeTo, options, callback) {
  relativeTo += '/server'

  const manifest = require(relativeTo + '/manifest')

  Glue.compose(manifest, options.glue || {}, function (err, server) {
    if (err) {
      return callback(err)
    }

    // routes
    let routesDir = relativeTo + '/routes'
    if (checkDirectorySync(routesDir)) {
      let routes = requireDirectory(module, routesDir)
      for (let key in routes) {
        server.route(routes[key])
      }
    }

    // methods
    let methodsDir = relativeTo + '/methods'
    if (checkDirectorySync(methodsDir)) {
      let methods = requireDirectory(module, methodsDir)
      for (let key in methods) {
        let method = methods[key]
        if (!method.name) {
          method.name = key
        }
        server.method(method)
      }
    }

    // views
    let viewsDir = relativeTo + '/views'
    if (checkDirectorySync(viewsDir)) {
      let config = require(viewsDir)
      server.views(config)
    }

    callback(null, server)
  })
}

module.exports = {
  compose: Glupe
}
