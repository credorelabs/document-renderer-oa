import { BulkEblW3CCargoDocument } from "../bulkbol-w3c/types";
import { bulkEblTemplate } from "./bulkBOLTemplate";

export const w3cBulkBOLCargoDocument: BulkEblW3CCargoDocument = {
  "@context": ["https://www.w3.org/ns/credentials/v2"],
  type: ["VerifiableCredential"],
  credentialSubject: bulkEblTemplate
};
