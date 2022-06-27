FROM node:current-alpine3.16

WORKDIR /var/www/node

COPY . .

RUN apk update && \
    apk add

ENV PORT=3000

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start"]