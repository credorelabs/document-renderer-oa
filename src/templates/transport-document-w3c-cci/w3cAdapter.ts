import { CargoDocument } from "../transport-document/types";
import { CCIW3CCargoDocument } from "./types";

export const adaptW3CDocument = (document: CCIW3CCargoDocument | undefined): CargoDocument => {
  const credentialSubject = document?.credentialSubject;
  const recipient = Array.isArray(credentialSubject) ? credentialSubject[0] : credentialSubject;

  return {
    recipient: recipient ?? {}
  } as CargoDocument;
};
