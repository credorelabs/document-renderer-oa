import { W3CCargoDocument } from "../transport-document-w3c/types";
import { cargoDocumentTemplate } from "./transportDocSample";

export const CCIw3cCargoDocument: W3CCargoDocument = {
  "@context": ["https://www.w3.org/ns/credentials/v2"],
  type: ["VerifiableCredential"],
  credentialSubject: cargoDocumentTemplate.recipient
};
