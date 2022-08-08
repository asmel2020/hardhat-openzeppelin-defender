import { Relayer } from 'defender-relay-client';

type credential = {
  apiKey:string ;
  apiSecret: string
}

export default class RelaySigners {
  public Relayer(credential:credential) {
    return new Relayer(credential);
  } 
}