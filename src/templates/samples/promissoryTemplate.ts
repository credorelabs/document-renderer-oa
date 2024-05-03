import { v2 } from "@govtechsg/open-attestation";
import { Prom } from "../promissory/types";
export const promissoryTemplate: Prom = {
  dlpcId: "2b2ede20-6552-4fa5-94d7-dfd167b0f84f",
  createdAt: "2024-05-02T08:30:00Z",
  issuerCompanyName: "CREDORE",
  issuerContactNum: "7008297411",
  issuerEmail: "raj@credore.xyz",
  issuerJurisdiction: "India",
  holderCompanyName: "KALINGA SUPPLIERS",
  holderEmail: "supplier@example.com",
  holderContactNum: "7008297411",
  holderJurisdiction: "India",
  currency: "EURO",
  amount: "200000",
  maturityDate: "2024-05-02T08:30:00Z",
  paymentPlace: "Jebel Ali, Dubai",
  accountNumber: "123456789896",
  bankName: "KALINGA BANK",
  bankBranch: "KALINGA BRANCH",
  branchAddress: "KALINGA BRANCH ADDRESS",
  bankIFSC: "KALINGA BRANCH IFSC",
  signedAt: "2024-05-02T08:30:00Z",
  signerName: "KALINGA",
  signerPosition: "CEO",
  signerEmail: "kalingsa@kalingsa.com",
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
    name: "PROMISSORY_NOTE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
