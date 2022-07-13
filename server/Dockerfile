FROM node:lts

RUN apt-get update && apt-get upgrade

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

ENTRYPOINT ./docker-entrypoint.sh