# Manifest

[Glue](https://github.com/hapijs/glue) is used as the hapi server composer & plugin loader.

Glue's [API](https://github.com/hapijs/glue/blob/master/API.md) is a single function `compose` accepting a JSON `manifest` file specifying the hapi server options, connections, and registrations.

The default manifest file can be found at `server/manifest.js`