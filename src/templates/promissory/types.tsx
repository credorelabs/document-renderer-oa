import { v2 } from "@govtechsg/open-attestation";

export interface Prom extends v2.OpenAttestationDocument {
  pNoteId: string;
  commitmentDate: string;
  drawerCompanyName: string;
  drawerCin: string;
  issuerEmail: string;
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
}
