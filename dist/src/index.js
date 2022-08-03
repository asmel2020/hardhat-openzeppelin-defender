"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
const plugins_1 = require("hardhat/plugins");
const adminClient_1 = __importDefault(require("./OpenzeppelinDefender/adminClient"));
// This import is needed to let the TypeScript compiler know that it should include your type
// extensions in your npm package's types file.
require("./type-extensions");
const AutotaskClient_1 = __importDefault(require("./OpenzeppelinDefender/AutotaskClient"));
const RelayClient_1 = __importDefault(require("./OpenzeppelinDefender/RelayClient"));
const SentinelClient_1 = __importDefault(require("./OpenzeppelinDefender/SentinelClient"));
config_1.extendConfig((config, userConfig) => {
});
config_1.extendEnvironment((hre) => {
    console.log(hre.config.paths.root);
    hre.OpenzeppelinDefender = plugins_1.lazyObject(() => {
        const AdminClient = new adminClient_1.default(hre.config.OpenzeppelinDefenderCredential);
        const AutoTaskClint = new AutotaskClient_1.default(hre.config.OpenzeppelinDefenderCredential);
        const RelayClient = new RelayClient_1.default(hre.config.OpenzeppelinDefenderCredential);
        const SentinelClient = new SentinelClient_1.default(hre.config.OpenzeppelinDefenderCredential);
        return {
            AdminClient,
            AutoTaskClint,
            RelayClient,
            SentinelClient
        };
    });
});
//# sourceMappingURL=index.js.map