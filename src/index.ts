import { extendConfig, extendEnvironment, subtask, task } from "hardhat/config";
import { lazyObject } from "hardhat/plugins";
import { HardhatConfig, HardhatUserConfig } from "hardhat/types";
import "./type-extensions";




import {RelayClient} from 'defender-relay-client';
import {AdminClient} from 'defender-admin-client';
import {AutotaskClient} from "defender-autotask-client";
import RelaySigners from "./OpenzeppelinDefender/RelaySigners";
import { SentinelClient} from 'defender-sentinel-client';
import { KeyValueStoreClient } from 'defender-kvstore-client';
import Utils from "./OpenzeppelinDefender/Utils";

extendConfig(
  (config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {}
);

extendEnvironment((hre) => {
  hre.OpenzeppelinDefender = lazyObject(() => {

    const Credential = hre.config.OpenzeppelinDefenderCredential;

    const AdminClients = new AdminClient(Credential);
    const RelayClients = new RelayClient(Credential);
    const RelaySigner = new RelaySigners()
    const AutotaskClients = new AutotaskClient(Credential);
    const SentinelClients = new SentinelClient(Credential);
    const KeyValueStoreClients = new KeyValueStoreClient({path: './secret.json'});
    const Util = new Utils();

    return {
      AdminClient:AdminClients,
      RelayClient:RelayClients,
      RelaySigner,
      AutotaskClient:AutotaskClients,
      SentinelClient:SentinelClients,
      KeyValueStoreClient:KeyValueStoreClients,
      Utils: Util,
    };
  });
});

task("OpenzeppelinDefender", "Prints a greeting'")
  .addOptionalParam("relay", "The greeting to print", undefined)
  .addOptionalParam("autotask", "The greeting to print", undefined)
  .setAction(async ({ relay, autotask }, hre, runSuper) => {
    if (relay) {
      console.log(await hre.run("relay", { params: relay }));
    }

    if (autotask) {
      console.log(await hre.run("autotask", { params: autotask }));
    }
  });

subtask("relay", "Prints a message")
  .addParam("params", "The message to print")
  .setAction(async ({ params }, hre) => {
    if (params === "list") {
      return hre.OpenzeppelinDefender.RelayClient.list();
    }
  });

subtask("autotask", "Prints a message")
  .addParam("params", "The message to print")
  .setAction(async ({ params }, hre) => {
    if (params === "list") {
      return hre.OpenzeppelinDefender.AutotaskClient.list();
    }
  });
