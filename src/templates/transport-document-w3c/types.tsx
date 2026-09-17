import { Recipient } from "../transport-document/types";

export interface W3CCargoDocument {
  "@context"?: string[];
  type?: string[];
  credentialSubject?: Recipient | Recipient[];
}
