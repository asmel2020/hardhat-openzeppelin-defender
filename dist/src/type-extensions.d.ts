import "hardhat/types/config";
import "hardhat/types/runtime";
import AdminClients from "./OpenzeppelinDefender/adminClient";
import AutotaskClients from "./OpenzeppelinDefender/AutotaskClient";
import RelayClients from "./OpenzeppelinDefender/RelayClient";
import SentinelClients from "./OpenzeppelinDefender/SentinelClient";
interface OpenzeppelinDefenderCredential {
    apiKey: string;
    apiSecret: string;
}
declare module "hardhat/types/config" {
    interface HardhatUserConfig {
        OpenzeppelinDefenderCredential?: OpenzeppelinDefenderCredential;
    }
    interface HardhatConfig {
        OpenzeppelinDefenderCredential: OpenzeppelinDefenderCredential;
    }
}
declare module "hardhat/types/runtime" {
    interface HardhatRuntimeEnvironment {
        OpenzeppelinDefender: {
            AdminClient: AdminClients;
            AutoTaskClint: AutotaskClients;
            RelayClient: RelayClients;
            SentinelClient: SentinelClients;
        };
    }
}
export {};
//# sourceMappingURL=type-extensions.d.ts.map