# Client (browser code)

By default [Browserify](https://github.com/substack/node-browserify) is used for client side javascript code.

It was chosen as it mirrors server side development and the CJS style is simple. 

[SASS](https://github.com/sass/node-sass) is used stylesheet processing.

## JavaScript

### Config

Client side javascript is located in the `client/js` directory.
A simple `index.js` entry point file exists.

### Building

Use the task `npm run build:js` to build the client side javascript.
The bundle is output to the `server/public/build/js` directory as `bundle.js` and `bundle.js.map`.


## CSS

Use the task `npm run build:css` to build the client side stylesheets.
The compiled css is output to the `server/public/build/css` directory.