import {Address , ExternalApiCreateProposalRequest as CreateProposalRequest,} from 'defender-admin-client/lib/models/proposal';
import { ProposalResponseWithUrl } from 'defender-admin-client/lib/api';


declare type UpgradeParams = {
    title?: string;
    description?: string;
    proxyAdmin?: string;
    via?: Address;
    viaType?: 'EOA' | 'Gnosis Safe' | 'Gnosis Multisig';
    newImplementation: string;
    newImplementationAbi?: string;
};

declare type PauseParams = {
    title?: string;
    description?: string;
    via: Address;
    viaType: 'EOA' | 'Gnosis Safe' | 'Gnosis Multisig';
};

export{
    ProposalResponseWithUrl,
    CreateProposalRequest,
    UpgradeParams,
    PauseParams
}