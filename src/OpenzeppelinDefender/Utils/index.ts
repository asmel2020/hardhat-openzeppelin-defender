import { AbiInterfaceParams, AbiInterfaceParamsResponse } from "./models/types";
import { Network,fromChainId,isValidNetwork } from 'defender-base-client'
import {FormatTypes,Interface} from '@ethersproject/abi';

export default class Utils {
  
  public fromChainId(chainId: number):Network | undefined {
    const network = fromChainId(chainId) || ' '
    return isValidNetwork(network) ? network : undefined
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
      functionGet: "getFunction",
      consult: "functions",
      signatures: "functionSignature",
    };

    let AbiInterfaceParamsResponse:any={
      name,
      signature:{}
    };

    const { functionGet, consult, signatures } =
      type === "event" ? eventParams : functionParams;
      
    AbiInterfaceParamsResponse.inputs = abiInterface[functionGet](name).inputs.map(
      ({ name, type }: any) => {
        return { name, type };
      }
    );

    AbiInterfaceParamsResponse.signature[signatures] = Object.keys(
      abiInterface[consult]
    ).find((e) => e.split("(")[0] === name) || '';

    AbiInterfaceParamsResponse.fragment = AbiInterfaceParamsResponse.signature[signatures] || '';

    return AbiInterfaceParamsResponse;
  }

  public AbiJsonString(abiInterface:Interface){
    return abiInterface.format(FormatTypes.json)
  }
}
