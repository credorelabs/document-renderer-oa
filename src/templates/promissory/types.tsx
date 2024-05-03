import { v2 } from "@govtechsg/open-attestation";

export interface Prom extends v2.OpenAttestationDocument {
  dlpcId: string;
  createdAt: string;
  issuerCompanyName: string;
  issuerContactNum: string;
  issuerEmail: string;
  issuerJurisdiction: string;
  holderCompanyName: string;
  holderEmail: string;
  holderContactNum: string;
  holderJurisdiction: string;
  currency: string;
  amount: string;
  maturityDate: string;
  paymentPlace: string;
  accountNumber: string;
  bankName: string;
  bankBranch: string;
  branchAddress: string;
  bankIFSC: string;
  signedAt: string;
  signerName: string;
  signerPosition: string;
  signerEmail: string;
  blockchainName: string;
  mintTxHash: string;
}
