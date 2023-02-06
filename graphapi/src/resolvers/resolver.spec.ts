import { describe, expect, it, jest } from '@jest/globals';
import resolvers from './resolvers';
import { ContextValue } from '../index';
import CatFactsAPI from '../datasources/catfactsapi';
import DogsAPI, { Dog } from '../datasources/dogsapi';
import { CatFact } from '../datasources/catfactsapi';

const mockedDogs: Dog[] = [
  {
    id: 1,
    name: 'dog 1',
    imageFileName: 'img.jpg',
  },
];

const mockedCatFact: CatFact = {
  fact: 'This is a fact',
  length: 20,
};
let context: ContextValue;
const setup = () => {
  const dogsAPI = new DogsAPI();
  const catFactsAPI = new CatFactsAPI();
  jest.spyOn(dogsAPI, 'getDogs').mockReturnValue(mockedDogs);
  jest.spyOn(dogsAPI, 'getDogsById').mockReturnValue(mockedDogs[0]);
  jest.spyOn(catFactsAPI, 'getCatFact').mockReturnValue(new Promise((resolve) => resolve(mockedCatFact)));

  context = {
    dataSources: {
      catFactsAPI,
      dogsAPI,
    },
  };
};

describe('resolvers', () => {
  describe('catFact', () => {
    it('query should return a catFact', async () => {
      setup();
      var catFact = await resolvers.Query.catFact(null, null, context);
      expect(catFact).toBeTruthy();
      expect(catFact.length).toBe(20);
      expect(catFact.fact).toBe('This is a fact');
    });

    it('query dogsById should return specific dog', () => {
      setup();
      var dog = resolvers.Query.dog(null, { id: 1 }, context);
      expect(dog).toBeTruthy();
      expect(dog!.id).toBe(1);
      expect(dog!.name).toBe('dog 1');
      expect(dog!.imageFileName).toBe('img.jpg');
    });
  });

  describe('dog', () => {
    it('query all should return all dogs', () => {
      setup();
      var dogs = resolvers.Query.dogs(null, null, context);
      expect(dogs).toBeTruthy();
      expect(dogs.length).toBe(1);
      expect(dogs[0].id).toBe(1);
      expect(dogs[0].name).toBe('dog 1');
      expect(dogs[0].imageFileName).toBe('img.jpg');
    });

    it('query dogsById should return specific dog', () => {
      setup();
      var dog = resolvers.Query.dog(null, { id: 1 }, context);
      expect(dog).toBeTruthy();
      expect(dog!.id).toBe(1);
      expect(dog!.name).toBe('dog 1');
      expect(dog!.imageFileName).toBe('img.jpg');
    });
  });
});
