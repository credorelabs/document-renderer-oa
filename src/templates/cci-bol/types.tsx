import { Recipient } from "../transport-document-cci/types";

export interface CCICargoDocument {
  "@context"?: string[];
  type?: string[];
  credentialSubject?: Recipient | Recipient[];
}
