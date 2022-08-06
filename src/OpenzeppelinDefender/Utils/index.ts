import { AbiInterfaceParams, AbiInterfaceParamsResponse } from "./models/types";
import {utils} from 'ethers';
export default class Utils {
  public async fromChainId(chainId: number) {
    const network: any = {
      1: "mainnet",
      4: "rinkeby",
      3: "ropsten",
      42: "Kovan",
      420: "goerli",
      77: "sokol",
      122: "fuse",
      56: "bsc",
      97: "bsctest",
      250: "fantom",
      4002: "fantomtest",
      1287: "moonbase",
      1285: "moonriver",
      1284: "Moonbeam",
      137: "matic",
      80001: "mumbai",
      43114: "avalanche",
      43113: "fuji",
      10: "optimism",
      69: "optimism-kovan",
      42161: "arbitrum",
      421611: "arbitrum-rinkeby",
      42220: "celo",
      44787: "alfajores",
      1313161554: "aurora",
      1313161556: "auroratest",
    };
    return network[chainId];
  }

  public getAbiInterfaceParams(
    AbiInterfaceParams: AbiInterfaceParams
  ): AbiInterfaceParamsResponse {

    const { abiInterface, name, type }:any = AbiInterfaceParams;
    
    const eventParams = {
      functionGet: "getEvent",
      consult: "events",
      signatures: "eventSignature",
    };

    const functionParams = {
      functionGet: "getEvent",
      consult: "functions",
      signatures: "functionSignature",
    };

    let returnParams: any = {
      name,
      signature: {},
    };

    const { functionGet, consult, signatures } =
      type === "event" ? eventParams : functionParams;

    returnParams.inputs = abiInterface[functionGet](name).inputs.map(
      ({ name, type }: any) => {
        return { name, type };
      }
    );

    returnParams.signature[signatures] = Object.keys(
      abiInterface[consult]
    ).find((e) => e.split("(")[0] === name);

    returnParams.fragment = returnParams.signature[signatures];

    return returnParams;
  }

  public AbiJsonString(abiInterface:utils.Interface){
    return abiInterface.format(utils.FormatTypes.json)
  }
}
