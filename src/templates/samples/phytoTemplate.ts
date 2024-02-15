import { v2 } from "@govtechsg/open-attestation";
import { Phyto } from "../phyto-certificate/types";
export const phytoTemplate: Phyto = {
  regNumber: "PSC160Na20200O6006",
  invoiceNumber: "INV-ORGELK2001",
  invoiceDate: "2024-02-04T08:30:00Z",
  fromOrganisation: "INDIA",
  toOrganisation: "United Arab Emirates",
  expoterName: "ATOZ EXPORTS IMPORTS",
  expoterAddress: "ARIF PALACE, FATIMA NAGAR,PAKHAL ROAD, NASHIK, MAHARASHTRA",
  expoterPinCode: "422011",
  consigneeName: "H B S FOOD STUFF TRADING LLC",
  consigneeAddress: "M-22, BUILDING 10, ALAWEER FRUITS & VEGETABLE MARKET,DUBAI, U,A.E",
  consigneePinCode: "614288",
  meansOfConveyance: "By Sea",
  placeOfOrigin: "NASHIK - India",
  pointOfEntry: "JEBEL ALI",
  distinguishMark: "AS PER INVOICE",
  numberOfPackages: "1482",
  descriptionOfPackages: "Boxes",
  nameOfProduce: "Lemon - Fruits, INDIAN FRESH LEMON",
  quantity: "10374.000",
  treatmentDate: "NIL",
  treatment: "NIL",
  chemical: "NIL",
  duration: "NIL",
  temperature: "NIL",
  concentration: "NIL",
  additionalInformation: "NIL",
  issueDate: "2024-02-13T08:30:00Z",
  placeOfIssue: "Nashik",
  codeNo: "(PPOS) 1 (58)",
  signedBy: "Laxmi Chand",
  designation: "Plant Protection Officer",

  issuers: [
    {
      id: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller",
      name: "CREDORE",
      revocation: {
        type: v2.RevocationType.None
      },
      identityProof: {
        location: "tt.credore.xyz",
        type: v2.IdentityProofType.DNSDid,
        key: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller"
      }
    }
  ],
  $template: {
    name: "PHYTOSANITARY_CERTIFICATE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
