import { RESTDataSource } from '@apollo/datasource-rest';

export interface CatFact {
  fact: string;
  length: number;
}
class CatFactsAPI extends RESTDataSource {
  override baseURL = 'https://catfact.ninja/';

  async getCatFact(): Promise<CatFact> {
    return this.get<CatFact>(`fact`);
  }
}
export default CatFactsAPI;
