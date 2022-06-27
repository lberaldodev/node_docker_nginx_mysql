FROM node:current-alpine3.16

WORKDIR /var/www/node

COPY . .

RUN apk update && \
    apk add

RUN yarn

CMD [ "yarn", "start"]