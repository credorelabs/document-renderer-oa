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
  fromCompanyName?: string;
  coverLetterDocuments?: coverLetter_Documents[];
}

interface coverLetter_Documents {
  id: string;
  coverLetterId: string;
  documentNumber: string;
  documentUrl: string;
  documentType: string;
  isTransferable: string;
  isCredore: string;
  createdAt: string;
  updatedAt: string;
}
