// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../../src/index";


const config: HardhatUserConfig = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  OpenzeppelinDefenderCredential: {
    apiKey: "8xmFdQmwyiPqvtQs6Zms5StoXxicyv7b",
    apiSecret:"Vq3iM39nxWHMHYAbVHgmJ1pLfd1iDMV2P1gKXEaWwwDCrDvjb2UyMsPJqo72D7hd",
  },
};

export default config;
