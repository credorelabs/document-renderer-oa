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
    "<p><strong>To</strong></p><p>Dy. Secretary</p><p>Maharashtra Chamber of Commerce, Industry &amp; Agriculture (MACCIA)</p><p>Oricon House, 6th Flr., Maharashtra Chamber of Commerce Lane,</p><p>Kala Ghoda, Fort, Mumbai– 400001</p><p><br></p><p><strong>Subject</strong>: Request for Assistance in Electronic Certificate of Origin Approval</p><p><br></p><p>Dear Sir,</p><p><br></p><p>I hope this letter finds you in good health and high spirits. I am writing to seek your assistance and approval on behalf of Conqoreeon Exim Private Limited, a Nashik-based trader.</p><p><br></p><p>The trader is actively involved in exporting goods to the United Arab Emirates and is expecting a substantial number of orders from UAE. In our efforts to streamline and enhance the efficiency of trade processes, we have adopted the use of electronic documentation provided by the Credore platform. Credore is an MLETR (UNCITRAL Model Law on Electronic Transferable Records) compliant platform approved by the IMDA, Singapore government.</p><p><br></p><p>We wish to clarify that the issuance of the traditional paper-based Certificates of Origin will continue as usual. However, we seek your approval to create an electronic counterpart of the paper-based CoO through the Credore platform. This electronic version will be duly attested by the competent authority at MACCIA, Nashik, ensuring its legal validity and adherence to established trade standards.</p><p><br></p><p>Additionally, this initiative is crucial for Conqoreeon Exim Private Limited's working capital requirements. Through the electronic CoO, the company will be able to access financial support from Singapore-based financial institution, XDC Trade Network. This collaboration aims to provide timely and efficient financial solutions to the exporter.</p><p><br></p><p>During our recent visit to MACCIA's Nashik office, we had the pleasure of meeting with Mr. Dilip Salverkar and the dedicated staff, who expressed their willingness to assist in attesting the electronic Certificates of Origin for Conqoreeon Exim Private Limited. We are grateful for their cooperation and support in this regard.</p><p><br></p><p>However, we understand that formal approval is required for such initiatives. Therefore, we kindly seek your approval to proceed with the issuance of the electronic Certificate of Origin for Conqoreeon Exim Private Limited. This approval is crucial as the exporter has impending orders to fulfill this month, and the electronic format will significantly contribute to expediting the process.</p><p><br></p><p>We assure you that all applicable charges for attestation will be duly paid, and we are committed to complying with any necessary requirements or procedures specified by MACCIA.</p><p><br></p><p>Your prompt approval will not only facilitate the exporter's trade operations but will also contribute to the broader goal of promoting efficient and modern trade practices.</p><p><br></p><p>Thank you for considering our request, and we look forward to your positive response.</p><p><br></p><p><br></p><p><br></p><p><strong>Yours Sincerely,</strong></p><p><br></p><p>Lingraj Mahanand</p><p>Director</p><p>DIN - 08740196</p>",
  blockchainName: "XDC",
  mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
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
