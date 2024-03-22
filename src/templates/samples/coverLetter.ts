import { v2 } from "@govtechsg/open-attestation";
import { Cover } from "../cover-letter/types";

export const coverLetter: Cover = {
  letterDate: "2024-02-04T08:30:00Z",
  referenceNumber: "5678984",
  companyLogo:
    "https://ctfdevblob.blob.core.windows.net/ctf-dev-blob-container/3d858872-649c-4fde-a3b2-55176f4f07f8/image",
  fromCompanyNumber: "+917008297411",
  fromCompanyEmail: "rpatrasm@gmail.com ",
  fromCompanyAddress: "135,Bahadalpur ,dumduma ,India ,751019",
  letterContent:
    "<p><strong>To</strong></p><p>Dy. Secretary</p><p>Maharashtra Chamber of Commerce, Industry &amp; Agriculture (MACCIA)",
  blockchainName: "XDC",
  mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
  customerName: "Raj Patra",
  createdAt: "2024-03-21T11:05:10.842Z",
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
    name: "COVER_LETTER",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
