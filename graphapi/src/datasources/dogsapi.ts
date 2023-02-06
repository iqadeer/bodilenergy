import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { find } from 'lodash';
import dogs from '../data/dogs.json';

export interface Dog {
  id: number;
  name: string;
  imageFileName: string;
}

class DogsAPI extends DataSource {
  constructor() {
    super();
  }
  initialize(config: DataSourceConfig<any>): void | Promise<void> {}
  getDogs = (): Dog[] => dogs;
  getDogsById = (id: number): Dog | undefined => find(dogs, { id });
}

export default DogsAPI;
