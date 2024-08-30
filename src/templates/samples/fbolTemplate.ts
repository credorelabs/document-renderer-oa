import { v2 } from "@govtechsg/open-attestation";
import { FiataEBLData } from "../fiata-bol/types";

export const fiataBolCertificate: FiataEBLData = {
  issuers: [
    {
      name: "CREDORE",
      tokenRegistry: "0x0687bD3B7Df4DaF3A66140293601aF67ed83eC37",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "td.credore.xyz"
      }
    }
  ],
  $template: {
    name: "FIATA_BOL",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
