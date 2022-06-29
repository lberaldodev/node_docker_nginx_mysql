FROM node:current-alpine3.16

RUN apk update

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

ENTRYPOINT ./docker-entrypoint.sh