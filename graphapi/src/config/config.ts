import dotenv from 'dotenv';

dotenv.config();
const environment = process.env.NODE_ENV || 'development';
const port = process.env.SERVER_PORT || 5601;
const apiRoot = process.env.API_ROOT || 'graphql';

const config = { port, environment, apiRoot };

export default config;
