import { ContextValue } from '..';

const query = {
  dog: (parent: any, { id }: { id: number }, { dataSources }: ContextValue) => {
    return dataSources.dogsAPI.getDogsById(id);
  },
  dogs: (parent: any, args: any, { dataSources }: ContextValue) => {
    return dataSources.dogsAPI.getDogs();
  },
  catFact: async (parent: any, args: any, contextValue: ContextValue) => {
    return contextValue.dataSources.catFactsAPI.getCatFact();
  },
};

export default query;
