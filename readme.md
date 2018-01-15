# glupe

`glupe` is a [tiny](index.js) wrapper around [hapi's](https://hapijs.com/) [glue](https://github.com/hapijs/glue).

Encourages everything to be loaded as a plugin, provides the capability to start the server immediatley with minimal logging. Designed to minimise even further the boilerplate code required to start your hapi server.

`glupe` also includes a [best practice guide to building hapi servers](docs/readme.md). This includes a lightweight folder structure and [scaffolding](docs/scaffold.md) script.
## Installation

```
npm i glupe --save
```


## Usage

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

That's pretty much it. There's only about [30 LOC](index.js) in total. If you manage lot's of hapi servers though, this code appears over and over and `glupe` saves us this repetition.

See the `example` folder for a suggested server setup. The docs folder also contains more in-depth instructions on how to [scaffold](docs/scaffold.md) a lightweight hapi server.