import { v2 } from "@govtechsg/open-attestation";

export interface PDFVerifiable extends v2.OpenAttestationDocument {
    recipient?: Recipient;
}

export interface Recipient extends v2.Recipient {
  fileUrl?: string;
  signerEmail?: string;
  signerIP?: string;
  signerLocation?: string;
  signerName?: string;
  signerDate?: string;
}