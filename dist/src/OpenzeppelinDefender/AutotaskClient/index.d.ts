import { credentialClient } from "../../types";
import { CreateAutotaskRequest, data, SourceFiles, UpdateAutotaskRequest } from "./models/types";
export default class AutotaskClients {
    private client;
    constructor(credentialClient: credentialClient);
    list(): Promise<import("defender-autotask-client/lib/models/response").AutotaskListResponse>;
    getEncodedZippedCodeFromFolder(code: string): Promise<string>;
    create(CreateAutotaskRequest: CreateAutotaskRequest): Promise<import("defender-autotask-client/lib/models/autotask").Autotask>;
    get(autoTaskId: string): Promise<import("defender-autotask-client/lib/models/autotask").Autotask>;
    update(UpdateAutotaskRequest: UpdateAutotaskRequest): Promise<import("defender-autotask-client/lib/models/autotask").Autotask>;
    delete(autoTaskId: string): Promise<import("defender-autotask-client/lib/models/response").AutotaskDeleteResponse>;
    updateCodeFromFolder(autoTaskId: string, code: string): Promise<void>;
    updateCodeFromSources(autoTaskId: string, code: SourceFiles): Promise<void>;
    runAutotask(autoTaskId: string, data: data): Promise<import("defender-autotask-client/lib/models/autotask-run.res").AutotaskRunBase>;
    listAutotaskRuns(autoTaskId: string): Promise<import("defender-autotask-client/lib/models/autotask-run.res").AutotaskRunListResponse>;
    getAutotaskRun(autoTaskRunId: string): Promise<import("defender-autotask-client/lib/models/autotask-run.res").AutotaskRunResponse>;
}
//# sourceMappingURL=index.d.ts.map