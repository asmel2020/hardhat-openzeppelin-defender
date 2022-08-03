"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defender_relay_client_1 = require("defender-relay-client");
class RelayClients {
    constructor(credentialClient) {
        this.client = new defender_relay_client_1.RelayClient(credentialClient);
    }
    create(CreateRelayerRequest) {
        return this.client.create(CreateRelayerRequest);
    }
    createKey(apiKey) {
        return this.client.createKey(apiKey);
    }
    get(apiKey) {
        return this.client.get(apiKey);
    }
    list() {
        return this.client.list();
    }
    listKeys(apiKey) {
        return this.client.listKeys(apiKey);
    }
    update(apiKey, UpdateRelayerRequest) {
        return this.client.update(apiKey, UpdateRelayerRequest);
    }
    deleteKey(apiKey, keyId) {
        return this.client.deleteKey(apiKey, keyId);
    }
}
exports.default = RelayClients;
//# sourceMappingURL=index.js.map