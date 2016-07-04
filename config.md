# Config

Configuration files are found in the `config` directory. They are stored as JSON e.g. `server.json`.
This file is excluded from the source control using a .gitignore entry. 
An example file should be included in the source control though, allowing others users to understand what settings are required but avoid includeing any sensitive data.

## Config validation

System configuration is important. They are the parameters by which your system is defined.
For this reason we choose to validate all configuration files using [joi](https://github.com/hapijs/joi).

This not only forms a source of documentation for what config settings are available, it also ensures the server will not start unless the settings are valid.

## Server

The server config validation can be found in `confg/schema.js`.
The config can be `require`d like any other file using `var config = require('./config')` (assuming the current location is the project root)

By default, the config file contains a minimum of settings:

- Server settings (e.g. port, host)
- The [good](https://github.com/hapijs/good) logging configuration
- View settings (e.g. view caching options)

To add more settings, first change the schema file, `confg/schema.js`, and then include the values into `config/server.json`

### PM2

The pm2 config can be found in `config/pm2.json`.

This file includes the settings for running in both development mode (restarts on files changes etc.) and production.