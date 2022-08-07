import { AdminClient, Contract,  } from 'defender-admin-client';

import { credentialClient } from '../models/type';

import { PauseParams, UpgradeParams,CreateProposalRequest,ProposalResponseWithUrl } from './models/types';

export default class AdminClients {
  
  private client:AdminClient

  constructor(credentialClient:credentialClient) {
    this.client = new AdminClient(credentialClient);
  }

  public addContract(Contract:Contract):Promise<Contract> {
    return this.client.addContract(Contract);
  }

  public createProposal(CreateProposalRequest:CreateProposalRequest):Promise<ProposalResponseWithUrl> {
    return this.client.createProposal(CreateProposalRequest);
  }

  public proposeUpgrade(UpgradeParams:UpgradeParams,contract:CreateProposalRequest['contract']):Promise<ProposalResponseWithUrl> {
    return this.client.proposeUpgrade(UpgradeParams,contract);
  }

  public proposeUnpause(PauseParams:PauseParams,contract:CreateProposalRequest['contract']):Promise<ProposalResponseWithUrl>{
    return this.client.proposeUnpause(PauseParams,contract);
  }

  public listProposals():Promise<ProposalResponseWithUrl[]> {
    return this.client.listProposals();
  }
}
