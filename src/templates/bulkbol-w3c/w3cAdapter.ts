import { BulkBOLData } from "../bulkbol/types";
import { BulkEblW3CCargoDocument } from "./types";

export const adaptW3CDocument = (document: BulkEblW3CCargoDocument | undefined): BulkBOLData => {
  const credentialSubject = document?.credentialSubject;
  const subject = Array.isArray(credentialSubject) ? credentialSubject[0] : credentialSubject;

  if (subject && "recipient" in subject && subject.recipient) {
    return subject as BulkBOLData;
  }

  return { recipient: subject ?? {} } as BulkBOLData;
};
