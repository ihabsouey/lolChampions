import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as championsJson from '../../assets/champion_info.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const champions = Object.values(championsJson.data);
    return { champions };
  }
}
