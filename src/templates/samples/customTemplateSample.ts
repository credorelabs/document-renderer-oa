import { v2 } from "@govtechsg/open-attestation";

export interface BILL_OF_EXCHANGE extends v2.OpenAttestationDocument {
  name: string;
}

export const boeTemplateCertificate: BILL_OF_EXCHANGE = {
  name: "Bill of Exchange",
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
      },
    },
  ],
  $template: {
    name: "BILL_OF_EXCHANGE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};