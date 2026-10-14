import { BulkBOLData, BulkBOLRecipient } from "../bulkbol/types";

export type BulkEblW3CCredentialSubject = Partial<BulkBOLData> & BulkBOLRecipient;

export interface BulkEblW3CCargoDocument {
  "@context"?: string[];
  type?: string[];
  credentialSubject?: BulkEblW3CCredentialSubject | BulkEblW3CCredentialSubject[];
}
