# glupe

## Conventional hapi server composer

Info to follow...

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

Use the script to scaffold a new glupe project.

```shell
#!/bin/bash 

if [ $1 = 'api' ]
then
  git clone -b api https://github.com/davidjamesstone/glupe-base.git $2
elif [ $1 = 'gov' ]
then
  git clone -b gov https://github.com/davidjamesstone/glupe-base.git $2
elif [ $1 = 'admin' ]
then
  git clone -b admin https://github.com/davidjamesstone/glupe-base.git $2
else
  git clone https://github.com/davidjamesstone/glupe-base.git $2
fi

cd $2
rm -rf .git

perl -pi -e s,glupe-base,$2,g package.json
perl -pi -e s,glupe-base,$2,g readme.md
perl -pi -e s,glupe-base,$2,g config/pm2.example.json

cp config/server.example.json config/server.json
cp config/pm2.example.json config/pm2.json

npm i
git init
```

Save the file as `glupe-scaffold.sh`. For a website execute:

`$ your-directory/glupe-scaffold.sh web your-web-project-name`

or for an api project:

`$ your-directory/glupe-scaffold.sh api your-api-project-name`.

For a gov.uk based web project it's:

`$ your-directory/glupe-scaffold.sh gov your-web-project-name`

For an Admin LTE based web project it's:

`$ your-directory/glupe-scaffold.sh admin your-web-project-name`

