# Tasks

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
