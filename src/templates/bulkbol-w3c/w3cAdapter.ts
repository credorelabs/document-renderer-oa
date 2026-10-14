import { BulkBOLData } from "../bulkbol/types";
import { BulkEblW3CCargoDocument } from "./types";

export const adaptW3CDocument = (document: BulkEblW3CCargoDocument | undefined): BulkBOLData => {
  const credentialSubject = document?.credentialSubject;
  const recipient = Array.isArray(credentialSubject) ? credentialSubject[0] : credentialSubject;

  return {
    recipient: recipient ?? {}
  } as BulkBOLData;
};
