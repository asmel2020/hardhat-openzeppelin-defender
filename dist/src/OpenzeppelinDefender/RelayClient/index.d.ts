import { CreateRelayerRequest, UpdateRelayerRequest } from 'defender-relay-client';
import { credentialClient } from "../../types";
export default class RelayClients {
    private client;
    constructor(credentialClient: credentialClient);
    create(CreateRelayerRequest: CreateRelayerRequest): Promise<import("defender-relay-client").RelayerGetResponse>;
    createKey(apiKey: string): Promise<import("defender-relay-client").RelayerApiKey>;
    get(apiKey: string): Promise<import("defender-relay-client").RelayerGetResponse>;
    list(): Promise<import("defender-relay-client").RelayerListResponse>;
    listKeys(apiKey: string): Promise<import("defender-relay-client").RelayerApiKey[]>;
    update(apiKey: string, UpdateRelayerRequest: UpdateRelayerRequest): Promise<import("defender-relay-client").RelayerGetResponse>;
    deleteKey(apiKey: string, keyId: string): Promise<import("defender-relay-client").DeleteRelayerApiKeyResponse>;
}
//# sourceMappingURL=index.d.ts.map