import DogsAPI from './dogsapi';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { DataSourceConfig } from 'apollo-datasource';

jest.mock(
  '../data/dogs.json',
  () => [
    {
      id: 1,
      name: 'dog 1',
      imageFileName: 'imagefile1.jpg',
    },
    {
      id: 2,
      name: 'dog 2',
      imageFileName: 'imagefile2.jpg',
    },
  ],
  { virtual: true },
);

describe('dogsApi', () => {
  beforeEach(() => {});
  it('should return all dogs', () => {
    const api = new DogsAPI();
    var dogsList = api.getDogs();
    expect(dogsList.length).toBe(2);
    expect(dogsList[0].id).toBe(1);
    expect(dogsList[1].id).toBe(2);
  });

  it('should return all dogs', () => {
    const api = new DogsAPI();
    var dog = api.getDogsById(1);
    expect(dog).toBeTruthy();
    expect(dog?.id).toBe(1);
    expect(dog?.name).toBe('dog 1');
    expect(dog?.imageFileName).toBe('imagefile1.jpg');
  });

  it('should initialize', async () => {
    const api = new DogsAPI();
    await api.initialize({} as DataSourceConfig<any>);
    expect(true).toBeTruthy();
  });
});
