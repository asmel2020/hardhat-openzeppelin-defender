// If your plugin extends types from another plugin, you should import the plugin here.

// To extend one of Hardhat's types, you need to import the module where it has been defined, and redeclare it.
import "hardhat/types/config";
import "hardhat/types/runtime";

import AdminClients from "./OpenzeppelinDefender/AdminClient";
import AutotaskClients from "./OpenzeppelinDefender/AutotaskClient";
import KvstoreClients from "./OpenzeppelinDefender/KvstoreClient";
import RelayClients from "./OpenzeppelinDefender/RelayClient";
import SentinelClients from "./OpenzeppelinDefender/SentinelClient";
import Utils from "./OpenzeppelinDefender/Utils";
interface OpenzeppelinDefenderCredential {
  apiKey:string;
  apiSecret:string;
}
declare module "hardhat/types/config" {
  interface HardhatUserConfig {
    OpenzeppelinDefenderCredential?:OpenzeppelinDefenderCredential
  }

  // We also extend the Config type, which represents the configuration
  // after it has been resolved. This is the type used during the execution
  // of tasks, tests and scripts.
  // Normally, you don't want things to be optional here. As you can apply
  // default values using the extendConfig function.
  interface HardhatConfig {
    OpenzeppelinDefenderCredential:OpenzeppelinDefenderCredential
  }
  
}

declare module "hardhat/types/runtime" {
  export interface HardhatRuntimeEnvironment {
    OpenzeppelinDefender:{
      AdminClient:AdminClients;
      AutoTaskClint:AutotaskClients;
      RelayClient:RelayClients;
      SentinelClient:SentinelClients,
      KvstoreClient:KvstoreClients,
      Utils:Utils,
    }
  }
}
