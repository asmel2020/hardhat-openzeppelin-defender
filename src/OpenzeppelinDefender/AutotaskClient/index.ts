import { AutotaskClient } from "defender-autotask-client";

import { credentialClient } from '../models/type'

import {
  Autotask,
  AutotaskDeleteResponse,
  AutotaskListResponse,
  AutotaskRunBase,
  AutotaskRunListResponse,
  AutotaskRunResponse,
  CreateAutotaskRequest,
  data,
  SourceFiles,
  UpdateAutotaskRequest,
} from "./models/types";

export default class AutotaskClients {
  private client: AutotaskClient;

  constructor(credentialClient: credentialClient) {
    this.client = new AutotaskClient(credentialClient);
  }

  //List
  public list():Promise<AutotaskListResponse> {
    return this.client.list();
  }

  //Utils
  public getEncodedZippedCodeFromFolder(code: string):Promise<string> {
    return this.client.getEncodedZippedCodeFromFolder(code);
  }

  //Create
  public create(CreateAutotaskRequest: CreateAutotaskRequest): Promise<Autotask> {
    return this.client.create(CreateAutotaskRequest);
  }
  //Retrieve
  public get(autoTaskId: string): Promise<Autotask> {
    return this.client.get(autoTaskId);
  }
  //Update
  public update(UpdateAutotaskRequest: UpdateAutotaskRequest): Promise<Autotask> {
    return this.client.update(UpdateAutotaskRequest);
  }
  //Delete
  public delete(autoTaskId: string):Promise<AutotaskDeleteResponse> {
    return this.client.delete(autoTaskId);
  }
  //Update Code
  public updateCodeFromFolder(autoTaskId: string, code: string):Promise<void> {
    return this.client.updateCodeFromFolder(autoTaskId, code);
  }

  public updateCodeFromSources(autoTaskId: string, code: SourceFiles):Promise<void> {
    return this.client.updateCodeFromSources(autoTaskId, code);
  }
  //Autotask Runs
  public runAutotask(autoTaskId: string, data: data):Promise<AutotaskRunBase> {
    return this.client.runAutotask(autoTaskId, data);
  }

  public listAutotaskRuns(autoTaskId: string):Promise<AutotaskRunListResponse> {
    return this.client.listAutotaskRuns(autoTaskId);
  }

  public getAutotaskRun(autoTaskRunId: string):Promise<AutotaskRunResponse> {
    return this.client.getAutotaskRun(autoTaskRunId);
  }

}
