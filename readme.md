# glupe

##
```js
const Glupe = require('glupe')

Glupe.compose({ location: __dirname + '/server' }, (err, server) => {
  if (err) {
    throw err
  }

  server.start(function () {
    server.log('info', 'Server started')
    console.info('Server running at:', server.info)
  })
})

```
