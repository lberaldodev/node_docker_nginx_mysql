<h1 align="center">Welcome to Nodejs with Docker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/lberaldodev/node_docker_nginx_mysql/blob/master/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Simple NodeJS example with nginx to proxy redirect (by default port 3000 to 8080) and MySQL

### 🏠 [Homepage](https://github.com/lberaldodev/node_docker_nginx_mysql)

## Setup the .env in root folder (check the .env.example)
```sh
.env
```

## Build the containers

```sh
docker-compose up --build -d
```

## After all containers running execute the mysqldump to create the first table

```sh
cat backup.sql | docker exec -i db /usr/bin/mysql -u <DB_USER (root as default)> --password=<MYSQL_ROOT_PASSWORD> <MYSQL_DATABASE>
```

## Open your browser

```sh
http://localhost:8080
```

## Create a new register in database

```sh
http://localhost:8080?name=Example
```

## Author

👤 **Lucas da Silva Beraldo**

* Github: [@lberaldodev](https://github.com/lberaldodev)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_