const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/docs/api-spec.json';
const endpointsFiles = ['./src/infra/server/index.ts'];

swaggerAutogen(outputFile, endpointsFiles);