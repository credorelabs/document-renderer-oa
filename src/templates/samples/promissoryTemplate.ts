import { v2 } from "@govtechsg/open-attestation";
import { Prom } from "../promissory/types";
export const promissoryTemplate: Prom = {
  pNoteId: "2b2ede20-6552-4fa5-94d7-dfd167b0f84f",
  commitmentDate: "2024-05-02T08:30:00Z",
  drawerCompanyName: "CREDORE",
  drawerCin: "7008297411",
  issuerEmail: "raj@credore.xyz",
  drawerJurisdiction: "India",
  draweeCompany: "KALINGA SUPPLIERS",
  draweeEmail: "supplier@example.com",
  draweeCIN: "7008297411",
  draweeJurisdiction: "India",
  currency: "EURO",
  amount: "200000",
  dueDate: "2024-05-02T08:30:00Z",
  payableAt: "Jebel Ali, Dubai",
  draweeAccountNumber: "123456789896",
  draweeBankName: "KALINGA BANK",
  draweeSortCode: "SORT CODE",
  draweeIBAN: "IBAN ADDRESS",
  signerTimeStamp: "2024-05-02T08:30:00Z",
  signerName: "KALINGA",
  signerPosition: "CEO",
  signerEmail: "kalingsa@kalingsa.com",
  blockchainName: "XDC",
  txHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
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
