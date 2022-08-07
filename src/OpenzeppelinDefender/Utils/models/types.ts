import { Interface } from "@ethersproject/abi";
interface AbiInterfaceParams {
  abiInterface: Interface;
  name: string;
  type: "function" | "event";
}
interface eventSignature {
  eventSignature: string;
}
interface functionSignature {
  functionSignature: String;
}
interface AbiInterfaceParamsResponse {
  name: string;
  signature: eventSignature | functionSignature;
  inputs: any[];
  fragment: string;
}

export { AbiInterfaceParams, AbiInterfaceParamsResponse };
