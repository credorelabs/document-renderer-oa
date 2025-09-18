import { v2 } from "@govtechsg/open-attestation";

export interface FiataBL extends v2.OpenAttestationDocument {
    recipient?: Recipient;
}

export interface Recipient extends v2.Recipient {
  fblFile?: string;
  fBlNo?: string;
  blockchainName?: string;
  txHash?: string;
  signerLocation?: string;
  signerIPAddress?: string;
  signerDate?: string;
  signerName?: string;
  signerEmail?: string;
  signerPosition?: string;
  signerTimeStamp?: string;
}