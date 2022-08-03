import { Contract } from 'defender-admin-client';
import { credentialClient } from '../models/type';
export default class AdminClients {
    private client;
    constructor(credentialClient: credentialClient);
    addContract(Contract: Contract): Promise<Contract>;
}
//# sourceMappingURL=index.d.ts.map