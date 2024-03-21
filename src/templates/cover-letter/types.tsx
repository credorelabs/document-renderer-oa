import { v2 } from "@govtechsg/open-attestation";

export interface Cover extends v2.OpenAttestationDocument {
  letterDate?: string;
  referenceNumber?: string;
  companyLogo?: string;
  fromCompanyNumber?: string;
  fromCompanyEmail?: string;
  fromCompanyAddress?: string;
  letterContent?: string;
  blockchainName?: string;
  mintTxHash?: string;
  txHash?: string;
  customerName?: string;
  email?: string;
  address?: string;
  createdAt?: string;
  fromContactName?: string;
}
