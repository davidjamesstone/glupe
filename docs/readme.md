# glupe

## What is this?

In addition to being a [simple startup module](../readme.md) for running hapi servers, 
`glupe` is also a simple hapi-based enterprise-ready project boilerplate.

- [hapijs](https://github.com/hapijs/hapi) - Framework
- [standardjs](http://standardjs.com/) - Linting
- [pm2](https://github.com/Unitech/pm2) - Process manager
- [handlebars](http://handlebarsjs.com/) - Default template engine
- [npm-scripts](https://docs.npmjs.com/misc/scripts) - Build tool


There are 3 different boilerplate types:

1. [api](https://github.com/davidjamesstone/glupe-base/tree/api) - for api services
2. [web](https://github.com/davidjamesstone/glupe-base) - for webites
3. [gov](https://github.com/davidjamesstone/glupe-base/tree/gov) - for a gov.uk themed website (html/handlebars)
3. [govuk](https://github.com/davidjamesstone/glupe-base/tree/govuk) - for a gov.uk themed website (nunjucks)

You can clone these from the [glupe-base](https://github.com/davidjamesstone/glupe-base) repo but the easiest way to start a new project is to use the [scaffold](scaffold.md) file below. This takes care of cloning and installing dependencies for you.

## Prerequisites

- node.js 8+
- npm
- pm2 installed globally


## Getting started

The easiest way to get started is to use the [scaffold.sh](scaffold.md) file.

Using the scaffold script, let's make a web project called `my-site`

`$ glupe-scaffold.sh web my-site`

Once you have the project scaffolded, on the command line to start the server run:

`npm start`

This will start the server using `pm2` from the entry point of the application `index.js`. Alternatively use `node index.js` if you don't want to use `pm2`.

Check the server is running by pointing your browser to `http://localhost:3002`

## Project structure

Here's how to structure your project files.

* **bin** (build tasks)
* **client** (browser code)
* **config**
  * server.json
  * schema.js
  * index.js
  * pm2.json
* **server**
  * **plugins**
  * **routes**
  * **views**
  * manifest.js
  * index.js
* **test**
* README.md
* index.js (startup server)

## Config

Configuration files are found in the `config` directory. They are stored as JSON e.g. `server.json`.
This file is excluded from the source control using a .gitignore entry.

An example file called `server.example.json` should be included in the source control though, allowing others users to understand what settings are required but avoid including any sensitive data.

### Config validation

System configuration is important. They are the parameters by which your system is defined.
For this reason we choose to validate all configuration files using [joi](https://github.com/hapijs/joi).

This not only forms a source of documentation for what config settings are available, it also ensures the server will not start unless the settings are valid.

The server config validation can be found in `confg/schema.js`.
The config can be `require`d like any other file using `const config = require('./config')` (assuming the current location is the project root)

By default, the config file contains a minimum of settings:

- Server settings (e.g. port, host)
- The [good](https://github.com/hapijs/good) logging configuration

To add more settings, first change the schema file, `confg/schema.js`, and then include the values into `config/server.json`. Also add the new config items into `server.example.json`

### PM2

The pm2 config can be found in `config/pm2.json`.

This file includes the settings for running in both development mode (restarts on files changes etc.) and production.


## Manifest

[Glupe](https://github.com/davidjamesstone/glupe) is used as the hapi server composer & plugin loader.

Glupe's [API](https://github.com/hapijs/glue/blob/master/API.md) is a single function accepting a JSON `manifest` file specifying the hapi server options, connections, and registrations.

The default manifest file can be found at `server/manifest.js`

## Plugins

hapi has a powerful plugin system and glupe's api and design encourages you to load all code in a plugin.

Server specific plugins live in the `server/plugins` directory.

## Logging

The [good](https://github.com/hapijs/good) plugin is used to bring a flexible logging solution to your application.

The [good-file](https://github.com/hapijs/good-file) and [good-console](https://github.com/hapijs/good-console) plugins are also included.

The logging configuration can be found in the `config` directory in the root of the application.

## Views

The [vison](https://github.com/hapijs/vision) plugin is used for template rendering support.

By default, the template engine used in handlebars with support for view caching, layouts, partials and helpers.

## Static files

The [Inert](https://github.com/hapijs/inert) plugin is used for static file and directory handling in hapi.js.

## Routes

Incoming requests are handled by the server via routes. 
Each route describes an HTTP endpoint with a path, method, and other properties.

Routes are found in the `server/routes` directory and loaded udsing the `server/plugins/router.js` plugin.

Hapi supports registering routes individually or in a batch.
Each route file can therefore export a single route object or an array of route objects.

A single route looks like this:

```js
{
  method: 'GET',
  path: '/hello-world',
  options: {
    handler: (request, h) => {
      return 'hello world'
    }
  }
}
```

There are lots of [route options](http://hapijs.com/api#route-options), here's the documentation on [hapi routes](http://hapijs.com/tutorials/routing)

## Tasks

Build tasks are created using simple shell scripts or node.js programs.
The default ones are found in the `bin` directory.

The task runner is simply `npm` using `npm-scripts`.

We chose to use this for simplicity but there's nothing to stop you adding `gulp`, `grunt` or another task runner if you prefer. 

The common predefined tasks are:

- `npm start` (Starts the server, reloads on changes if the (development pm2 config)[config.md] is used.
- `npm run build:js` (Builds the browserify client-side javascript)
- `npm run build:css` (Builds the client-side css)
- `npm run lint` (Runs the lint task using standard.js)
- `npm run watch` (Starts watching the `client` directory and builds the js and css on changes)

### Resources

For more information around using `npm-scripts` as a build tool:

- http://substack.net/task_automation_with_npm_run
- http://ponyfoo.com/articles/choose-grunt-gulp-or-npm
- http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/
- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/

## Testing

[lab](https://github.com/hapijs/lab) and [code](https://github.com/hapijs/code) are used for unit testing.

See the test `example/test` for more information.

## Linting

[standard.js](http://standardjs.com/) is used to lint both the server-side and client-side javascript code.

One Style to Rule Them All. No decisions to make. No .eslintrc, .jshintrc, or .jscsrc files to manage. It just works.

It's defined as a build task and can be run using `npm run lint`.
