"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defender_admin_client_1 = require("defender-admin-client");
class AdminClients {
    constructor(credentialClient) {
        this.client = new defender_admin_client_1.AdminClient(credentialClient);
    }
    async addContract(Contract) {
        return await this.client.addContract(Contract);
    }
}
exports.default = AdminClients;
//# sourceMappingURL=index.js.map