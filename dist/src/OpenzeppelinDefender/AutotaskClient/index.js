"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defender_autotask_client_1 = require("defender-autotask-client");
class AutotaskClients {
    constructor(credentialClient) {
        this.client = new defender_autotask_client_1.AutotaskClient(credentialClient);
    }
    //List
    list() {
        return this.client.list();
    }
    //Utils
    getEncodedZippedCodeFromFolder(code) {
        return this.client.getEncodedZippedCodeFromFolder(code);
    }
    //Create
    create(CreateAutotaskRequest) {
        return this.client.create(CreateAutotaskRequest);
    }
    //Retrieve
    get(autoTaskId) {
        return this.client.get(autoTaskId);
    }
    //Update
    update(UpdateAutotaskRequest) {
        return this.client.update(UpdateAutotaskRequest);
    }
    //Delete
    delete(autoTaskId) {
        return this.client.delete(autoTaskId);
    }
    //Update Code
    updateCodeFromFolder(autoTaskId, code) {
        return this.client.updateCodeFromFolder(autoTaskId, code);
    }
    updateCodeFromSources(autoTaskId, code) {
        return this.client.updateCodeFromSources(autoTaskId, code);
    }
    //Autotask Runs
    runAutotask(autoTaskId, data) {
        return this.client.runAutotask(autoTaskId, data);
    }
    listAutotaskRuns(autoTaskId) {
        return this.client.listAutotaskRuns(autoTaskId);
    }
    getAutotaskRun(autoTaskRunId) {
        return this.client.getAutotaskRun(autoTaskRunId);
    }
}
exports.default = AutotaskClients;
//# sourceMappingURL=index.js.map