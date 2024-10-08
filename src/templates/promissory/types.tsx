import { v2 } from "@govtechsg/open-attestation";

export interface Prom extends v2.OpenAttestationDocument {
  pNoteId: string;
  commitmentDate: string;
  drawerCompanyName: string;
  drawerCin: string;
  drawerEmail: string;
  drawerJurisdiction: string;
  draweeCompany: string;
  draweeEmail: string;
  draweeCIN: string;
  draweeJurisdiction: string;
  currency: string;
  amount: string;
  dueDate: string;
  payableAt: string;
  draweeAccountNumber: string;
  draweeBankName: string;
  draweeSortCode: string;
  draweeIBAN: string;
  signerTimeStamp: string;
  signerName: string;
  signerPosition: string;
  signerEmail: string;
  blockchainName: string;
  txHash: string;
  drawer: string;
  drawee: string;
  drawerWalletAddress: string;
  draweeWalletAddress: string;
  signerLocation?: string;
  signerIPAddress?: string;
  pNoteProof?: PNoteProof;
}


interface PNoteProof {
  a0: string;
  a1: string;
  b0: string;
  b1: string;
  b2: string;
  b3: string;
  c0: string;
  c1: string;
  scalarPubKey0: string;
  scalarPubKey1: string;
}
