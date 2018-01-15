# glupe

`glupe` is a [tiny](index.js) wrapper around [hapi's](https://hapijs.com/) [glue](https://github.com/hapijs/glue).

Encourages everything to be loaded as a plugin, provides the capability to start the server immediatley with minimal logging. Designed to minimise even further the boilerplate code required to start your hapi server.

```js
const glupe = require('glupe')

// Start a server using the
// provided manifest and options
await glupe(manifest, options)
```

The above code will compose a hapi server and start it up.
If composing the server fails it'll throw an error.
If the server is successfully composed but fails to start, the process exits with code 1. Some [minor logging](index.js#ln16) is also included.

```js
// For testing or when you don't want to start 
// the server, use the `compose` method, this 
// will simply compose the server using glue.
const server = await glupe.compose(manifest, options)
```

