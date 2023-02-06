import { GraphQLClient } from 'graphql-request';

const graphAPIUrl = 'http://localhost:5601/graphql';
const graphQLClient = new GraphQLClient(graphAPIUrl);

export default graphQLClient;
