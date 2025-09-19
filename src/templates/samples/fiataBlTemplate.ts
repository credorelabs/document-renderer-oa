import { v2 } from "@govtechsg/open-attestation";
import { FiataBL } from "../fiata-bl/types";

export const fiataBlCertificate: FiataBL = {
  issuers: [
    {
      name: "Demo Issuer",
      tokenRegistry: "0xc5E039FCdda54E8F507962EA66529C5FD1Ab126D",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "8742f7ec-a70d-45b2-9b38-75453f314f57:string:title.shoundiksamaj.in"
      }
    }
  ],
  $template: {
    name: "FIATA_BL",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  recipient: {
    fblFile:
      "https://ctfdevblob.blob.core.windows.net/ctf-dev-blob-container/fiata-ebls/raj%40credore.xyz/D582F9740714B220C.pdf",
    fBlNo: "D582F9740714B220C",
    blockchainName: "xinfin",
    txHash: "0x2ddf7d93b7a7959d25b5fdd88f107868b4a556156ce1137a0a6bc3043353875a",
    signerName: "Raj kishore Patra",
    signerEmail: "raj@credore.xyz",
    signerPosition: "admin",
    signerTimeStamp: "2025-09-18T07:03:11.366Z",
    signerIPAddress: "192.168.1.100",
    signerLocation: "Bhubaneswar, Odisha, India"
  }
};
