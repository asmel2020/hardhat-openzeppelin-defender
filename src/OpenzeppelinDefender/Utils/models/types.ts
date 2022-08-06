import { utils } from 'ethers';
interface AbiInterfaceParams{
    abiInterface:utils.Interface;
    name:string;
    type:'function' | 'event';
  }
  
  interface AbiInterfaceParamsResponse{
    name:string;
    signature:{};
    inputs:any[];
    fragment:string;
  }

  export{
    AbiInterfaceParams,
    AbiInterfaceParamsResponse
  }