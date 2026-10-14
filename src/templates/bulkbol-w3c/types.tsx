import { BulkBOLData } from "../bulkbol/types";

export interface BulkEblW3CCargoDocument {
  "@context"?: string[];
  type?: string[];
  credentialSubject?: BulkBOLData | BulkBOLData[];
}
