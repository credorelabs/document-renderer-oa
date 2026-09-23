import { CargoDocument } from "../transport-document/types";
import { CCICargoDocument } from "./types";

export const adaptW3CDocument = (document: CCICargoDocument | undefined): CargoDocument => {
  const credentialSubject = document?.credentialSubject;
  const recipient = Array.isArray(credentialSubject) ? credentialSubject[0] : credentialSubject;

  return {
    recipient: recipient ?? {}
  } as CargoDocument;
};
