# Scaffold

Use the script below to scaffold a new hapi project (Linux/MAC only).

It's a simple bash script that clones a base repository, makes some replacements installs npm dependencies and runs the build.

You can run these steps yourself if you wish but the scaffold makes it much easier.

Save the following as something like `scaffold.sh`.

```shell
#!/bin/bash 

if [ $1 = 'api' ]
then
  git clone -b api https://github.com/davidjamesstone/glupe-base.git $2
elif [ $1 = 'gov' ]
then
  git clone -b gov https://github.com/davidjamesstone/glupe-base.git $2
else
  git clone https://github.com/davidjamesstone/glupe-base.git $2
fi

cd $2
rm -rf .git

perl -pi -e s,glupe-base,$2,g package.json
perl -pi -e s,glupe-base,$2,g readme.md
perl -pi -e s,glupe-base,$2,g config/pm2.json

cp config/server.example.json config/server.json

npm i
npm run build
git init
```

Now make it executable with

`$ chmod +x scaffold.sh`

That's it.


To then scaffold a boilerplate glupe based hapi app, in the directory where you want the app, do:

`$ ../scaffold.sh [web|api|gov] [name]`

e.g.

```shell
$ ../scaffold.sh web my-web

or

$ ../scaffold.sh api my-api

or

$ ../scaffold.sh gov my-gov
```
