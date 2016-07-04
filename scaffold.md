# Scaffold

Use the script to scaffold a new hapi project.


```shell
#!/bin/bash 

if [ $1 = 'api' ]
then
  git clone -b api https://github.com/davidjamesstone/glupe-base.git $2
elif [ $1 = 'gov' ]
then
  git clone -b gov https://github.com/davidjamesstone/glupe-base.git $2
elif [ $1 = 'flood' ]
then
  git clone -b flood https://github.com/davidjamesstone/glupe-base.git $2
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
npm run build
git init
```

Save the file as `glupe-scaffold.sh`.

Then for a website execute:

`$ your-directory/glupe-scaffold.sh web your-web-project-name`

or for an api project:

`$ your-directory/glupe-scaffold.sh api your-api-project-name`.

For a gov.uk based web project it's:

`$ your-directory/glupe-scaffold.sh gov your-gov-web-project-name`

For a gov.uk flood based web project it's:

`$ your-directory/glupe-scaffold.sh flood your-gov-flood-web-project-name`

For an Admin LTE based web project it's:

`$ your-directory/glupe-scaffold.sh admin your-admin-web-project-name`
