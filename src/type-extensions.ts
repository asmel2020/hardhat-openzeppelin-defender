// If your plugin extends types from another plugin, you should import the plugin here.

// To extend one of Hardhat's types, you need to import the module where it has been defined, and redeclare it.
import "hardhat/types/config";
import "hardhat/types/runtime";


import Utils from "./OpenzeppelinDefender/Utils";
import {RelayClient} from 'defender-relay-client';
import {AdminClient} from 'defender-admin-client';
import {AutotaskClient} from "defender-autotask-client";
import { KeyValueStoreClient } from 'defender-kvstore-client';
import { SentinelClient} from 'defender-sentinel-client';
import RelaySigners from './OpenzeppelinDefender/RelaySigners';
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
      AdminClient:AdminClient;
      AutotaskClient:AutotaskClient;
      RelayClient:RelayClient;
      SentinelClient:SentinelClient,
      KeyValueStoreClient:KeyValueStoreClient,
      RelaySigner:RelaySigners,
      Utils:Utils,
    }
  }
}
