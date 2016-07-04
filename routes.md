# Routes

Incoming requests are handled by the server via routes. 
Each route describes an HTTP endpoint with a path, method, and other properties.

Routes are found in the `server/routes` directory.

When the server starts up, the `index.js` file loads up all the 
routes that are collated in the `server/routes/index.js` file.

Hapi supports registering routes individually or in a batch.
Each route file can therefore export a single route object or an array of route objects.

A single route looks like this:

```js
{
  method: 'GET',
  path: '/hello-world',
  config: {
    handler: function (request, reply) {
      return reply('hello world')
    }
  }
}
```
There are lots of [route options](http://hapijs.com/api#route-options), here's the documentation on [hapi routes](http://hapijs.com/tutorials/routing)

## Extension points

Each incoming request passes through a pre-defined list of steps, along with optional extensions.

Hapi's [request life cycle](http://hapijs.com/api#requests) allows optional [request extension](http://hapijs.com/api#serverextevents) points.

There are two predefined server extension points, both found in `index.js`.

These handle the logic around logging and error handling (returning error pages 404/500).
They are meant to serve as a starting point so feel free to modify them. 