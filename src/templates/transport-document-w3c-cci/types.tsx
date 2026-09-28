import { Recipient } from "../transport-document/types";

export interface CCIW3CCargoDocument {
  "@context"?: string[];
  type?: string[];
  credentialSubject?: Recipient | Recipient[];
}
