import { AdminClient, Contract,  } from 'defender-admin-client';
import { credentialClient } from '../models/type';

export default class AdminClients {
  
  private client:AdminClient

  constructor(credentialClient:credentialClient) {
    this.client = new AdminClient(credentialClient);
  }

  public addContract(Contract:Contract) {
    return this.client.addContract(Contract);
  }
  public createProposal(ProposalResponseWithUrl:any) {
    return this.client.createProposal(ProposalResponseWithUrl);
  }

  public proposeUpgrade(UpgradeParams:any,contract:any) {
    return this.client.proposeUpgrade(UpgradeParams,contract);
  }

  public proposeUnpause(PauseParams:any,contract:any) {
    return this.client.proposeUnpause(PauseParams,contract);
  }

  public listProposals(PauseParams:any,contract:any) {
    return this.client.listProposals();
  }
}
