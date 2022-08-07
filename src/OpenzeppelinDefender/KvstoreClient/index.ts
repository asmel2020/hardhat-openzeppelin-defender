import { KeyValueStoreClient } from 'defender-kvstore-client';


export default class KvstoreClients {

  private client:KeyValueStoreClient;
 
  constructor() {
    this.client = new KeyValueStoreClient({ path: './secret.json'})
  }

  public put(key: string, value: string): Promise<void> {
    return this.client.put(key,value)
  }
  
  public get(key: string): Promise<string | undefined> {
    return this.client.get(key)
  }

  public del(key: string): Promise<void> {
    return this.client.del(key)
  }
}
