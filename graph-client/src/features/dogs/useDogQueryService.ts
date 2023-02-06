import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import graphQLClient from '../common/graphqlClient';

interface Dog {
  dog: {
    id: number;
    name: string;
    imageFileName: string;
  };
}

const useDogQuery = (dogId: number) =>
  useQuery(['getNewDog', dogId], async () => {
    const dog = await graphQLClient.request<Dog>(
      gql`
        query getDog($dogId: Int!) {
          dog(id: $dogId) {
            id
            name
            imageFileName
          }
        }
      `,
      { dogId },
    );
    return dog;
  });
export default useDogQuery;
