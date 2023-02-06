import { describe, expect, it, jest } from '@jest/globals';
import CatFactsAPI from './catfactsapi';
import { CatFact } from './catfactsapi';
import { DataSourceFetchResult } from '@apollo/datasource-rest';

const myFact: DataSourceFetchResult<CatFact> = {
  parsedBody: {
    fact: 'hello',
    length: 23,
  },
} as DataSourceFetchResult<CatFact>;

describe('CatFactsAPI', () => {
  it('should return a cat fact', async () => {
    const myMock = jest.spyOn(CatFactsAPI.prototype, 'fetch').mockImplementation(() => {
      return new Promise<DataSourceFetchResult<CatFact>>((resolve) => {
        resolve(myFact);
      });
    });
    const catFactApi = new CatFactsAPI();

    const fact = await catFactApi.getCatFact();
    expect(fact).toBeTruthy();
    expect(fact.fact).toBe('hello');
    expect(fact.length).toBe(23);
    expect(myMock).toHaveBeenCalledTimes(1);
  });
});
