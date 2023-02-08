import { GraphQLClient } from 'graphql-request';

export const graphAPIBaseUrl = process.env.REACT_APP_GRAPH_API_BASE_URL || 'http://localhost:5601';
const graphAPIUrl = `${graphAPIBaseUrl}/graphql`;
const graphQLClient = new GraphQLClient(graphAPIUrl);

console.log(process.env.REACT_APP_GRAPH_API_BASE_URL);

export default graphQLClient;
