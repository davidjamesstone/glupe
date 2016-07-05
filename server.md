# Server

The hapi server is the central component and is responsible for handling the requests and responses.

The configuration is found in `config/server.json`. Click (here)[config.md] to read more about configuration.

## Why hapi?

Use of open source software is great in many ways but it can leave you vulnerable and exposed.

Node.js prides itself on the wealth of plugins available in it's npm package manager. 
For lot's of development having free reign to pick and choose these packages is fine. 
For enterprise level development though, a more stringent approach should be adopted.

Hapi.js is an opensource framework for building web applications and services just like express.js. 
The major difference is (and the reason it is the choice for many enterprises/corporations) that it (and it's ecosystem of plugins) has very strict guidelines on quality and testing.
The packages we use are quality, pre-vetted components which give us a huge step up in terms of the resilience of the software we deliver. 
It also gives us consistency over the stack of software and services we build.

[Learn hapi](https://github.com/nelsonic/learn-hapi) - a tutorial for hapi

- [hapi](http://hapijs.com/) - The core framework docs
- [glue](https://github.com/hapijs/glue) - Server composer for hapi.js
- [good](https://github.com/hapijs/good) - A logging plugin (Ops, server and request logs)
- [boom](https://github.com/hapijs/boom) - HTTP-friendly error objects
- [joi](https://github.com/hapijs/joi) - validator for JavaScript objects
- [lout](https://github.com/hapijs/lout) - browsable documentation generator
- [vision](https://github.com/hapijs/vision) - Templates rendering support|
- [inert](https://github.com/hapijs/inert) - Static file and directory handlers