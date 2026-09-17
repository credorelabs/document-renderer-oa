import { W3CCargoDocument, CargoDocument } from "./types";

export const adaptW3CDocument = (document: W3CCargoDocument | undefined): CargoDocument => {
  const credentialSubject = document?.credentialSubject;
  const recipient = Array.isArray(credentialSubject) ? credentialSubject[0] : credentialSubject;

  return {
    recipient: recipient ?? {}
  } as CargoDocument;
};