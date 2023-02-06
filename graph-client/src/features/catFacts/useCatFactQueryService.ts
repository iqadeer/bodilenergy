import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import graphQLClient from '../common/graphqlClient';

interface CatFact {
  catFact: {
    fact: string;
    length: number;
  };
}

const useCatFactQuery = () =>
  useQuery(['getNewCatFact'], async () => {
    const catFact = await graphQLClient.request<CatFact>(gql`
      query {
        catFact {
          fact
          length
        }
      }
    `);
    return catFact;
  });
export default useCatFactQuery;
