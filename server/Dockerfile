FROM node:current-alpine3.16

RUN apk update

WORKDIR /var/www/node

COPY package*.json ./

RUN yarn

COPY . .

CMD [ "yarn", "start-dev"]