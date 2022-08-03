import { AdminClient, Contract  } from 'defender-admin-client';
import { credentialClient } from '../models/type';

export default class AdminClients {
  
  private client:AdminClient

  constructor(credentialClient:credentialClient) {
    this.client = new AdminClient(credentialClient);
  }

  public async addContract(Contract:Contract) {
    return await this.client.addContract(Contract);
  }
}
