import { v2 } from "@govtechsg/open-attestation";

export interface Phyto extends v2.OpenAttestationDocument {
  regNumber: string;
  invoiceNumber: string;
  invoiceDate: string;
  fromOrganisation: string;
  toOrganisation: string;
  expoterName: string;
  expoterAddress: string;
  expoterPinCode: string;
  consigneeName: string;
  consigneeAddress: string;
  consigneePinCode: string;
  meansOfConveyance: string;
  placeOfOrigin: string;
  pointOfEntry: string;
  distinguishMark: string;
  numberOfPackages: string;
  descriptionOfPackages: string;
  nameOfProduce: string;
  quantity: string;
  treatmentDate: string;
  treatment: string;
  chemical: string;
  duration: string;
  temperature: string;
  concentration: string;
  additionalInformation: string;
  issueDate: string;
  placeOfIssue: string;
  codeNo: string;
  signedBy: string;
  designation: string;
}
