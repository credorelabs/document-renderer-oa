import { W3CCargoDocument, CargoDocument } from "./types";

export const adaptW3CDocument = ( document: W3CCargoDocument ): CargoDocument => {
  return {
    recipient: document.credentialSubject ?? {},
  } as CargoDocument;
};