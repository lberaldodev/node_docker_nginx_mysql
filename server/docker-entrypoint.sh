echo "wait db server"
dockerize -wait tcp://db:3306 -timeout 20s

echo "generate prisma client"
npx prisma generate --schema=./src/infra/database/prisma/schema.prisma

echo "start node server"
yarn start-dev