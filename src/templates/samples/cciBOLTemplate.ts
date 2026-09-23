import { CCICargoDocument } from "../cci-bol/types";
import { cargoDocumentTemplate } from "./transportDocSample";

export const w3cCargoDocument: CCICargoDocument = {
  "@context": ["https://www.w3.org/ns/credentials/v2"],
  type: ["VerifiableCredential"],
  credentialSubject: cargoDocumentTemplate.recipient
};
