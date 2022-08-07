import { extendConfig, extendEnvironment } from "hardhat/config";
import { lazyObject } from "hardhat/plugins";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";
import AdminClients from "./OpenzeppelinDefender/AdminClient";

// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
import "./type-extensions";
import AutotaskClients from "./OpenzeppelinDefender/AutotaskClient";
import RelayClients from "./OpenzeppelinDefender/RelayClient";
import SentinelClients from "./OpenzeppelinDefender/SentinelClient";
import Utils from "./OpenzeppelinDefender/Utils";
import KvstoreClients from "./OpenzeppelinDefender/KvstoreClient";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
  }
);

extendEnvironment((hre) => {
  hre.OpenzeppelinDefender = lazyObject(() => {
    const Credential=hre.config.OpenzeppelinDefenderCredential

    const AdminClient = new AdminClients(Credential);

    const AutoTaskClint = new AutotaskClients(Credential);

    const RelayClient = new RelayClients(Credential);
    
    const SentinelClient = new SentinelClients(Credential);

    const KvstoreClient = new KvstoreClients();

    const Util = new Utils();
    
    return {
      AdminClient,
      AutoTaskClint,
      RelayClient,
      SentinelClient,
      KvstoreClient,
      Utils: Util
    };
  });
});
