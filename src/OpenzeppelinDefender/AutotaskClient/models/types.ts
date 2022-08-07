import {CreateAutotaskRequest,UpdateAutotaskRequest,Autotask } from "defender-autotask-client/lib/models/autotask";
import { AutotaskListResponse,AutotaskDeleteResponse } from "defender-autotask-client/lib/models/response";
import { AutotaskRunBase,AutotaskRunListResponse,AutotaskRunResponse } from "defender-autotask-client/lib/models/autotask-run.res";
declare type SourceFiles = {
  'index.js': string;
  [name: string]: string;
};

declare type data={
    [key: string]: any;
}

export{
    AutotaskListResponse,
    CreateAutotaskRequest,
    UpdateAutotaskRequest,
    AutotaskDeleteResponse,
    Autotask,
    AutotaskRunBase,
    AutotaskRunListResponse,
    AutotaskRunResponse,
    SourceFiles,
    data
}