import { v2 } from "@govtechsg/open-attestation";
import { PDFVerifiable } from "../pdf-verifiable/types";

export const pdfVerifiableCertificate: PDFVerifiable = {
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
    name: "PDF_VERIFIABLE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  },
  recipient: {
    fileUrl: "https://ctfdevblob.blob.core.windows.net/ctf-dev-blob-container/wrappedPdf-raj%40credore.xyz/pdf-1762160764159",
    signerEmail: "raj@credore.xyz",
    signerIP: "127.0.0.1",
    signerLocation: "Bhubaneswar, India"
  }
};
