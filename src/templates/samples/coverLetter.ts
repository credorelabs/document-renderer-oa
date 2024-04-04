import { v2 } from "@govtechsg/open-attestation";
import { Cover } from "../cover-letter/types";

export const coverLetter: Cover = {
  letterDate: "2024-02-04T08:30:00Z",
  referenceNumber: "5678984",
  companyLogo:
    "https://ctfdevblob.blob.core.windows.net/ctf-dev-blob-container/3d858872-649c-4fde-a3b2-55176f4f07f8/image",
  fromCompanyNumber: "+917008297411",
  fromCompanyEmail: "rpatrasm@gmail.com ",
  fromCompanyAddress: `B/105, Shree Manibhadra Estate SNo-130/1, Kala Khadak , Pune  - 411057 , CIN - U72900PN2020PTC190756`,
  fromContactName: "Lingaraj Mahanand",
  fromCompanyName: "Trustless Private Limited",
  letterContent:
    `<p><span class="ql-size-large">To</span></p><p><span class="ql-size-large">Dy. Secretary</span></p><p><span class="ql-size-large">Maharashtra Chamber of Commerce, Industry &amp; Agriculture (MACCIA)</span></p><p><span class="ql-size-large">Oricon House, 6th Flr., Maharashtra Chamber of Commerce Lane,</span></p><p><span class="ql-size-large">Kala Ghoda, Fort, Mumbai– 400001</span></p><p><br></p><p><strong class="ql-size-large">Subject: Request for Assistance in Electronic Certificate of Origin Approval</strong></p><p><br></p><p><br></p><p><strong class="ql-size-large">﻿Dear Sir,</strong></p><p><br></p><p>I hope this letter finds you in good health and high spirits. I am writing to seek your assistance and approval</p><p><br></p><p>on behalf of</p><p>Conqoreeon Exim Private Limited</p><p>, a Nashik-based trader.</p><p><br></p><p>The trader is actively involved in exporting goods to the United Arab Emirates and is expecting a substantial</p><p>number of orders from UAE. In our efforts to streamline and enhance the efficiency of trade processes, we</p><p><br></p><p>have adopted the use of electronic documentation provided by the Credore platform. Credore is an MLETR</p><p>(UNCITRAL Model Law on Electronic Transferable Records) compliant platform approved by the IMDA,</p><p><br></p><p>Singapore government.</p><p><br></p><p>We wish to clarify that the issuance of the traditional paper-based Certificates of Origin will continue as usual</p><p>However, we seek your approval to create an electronic counterpart of the paper-based CoO through the</p><p>Credore platform. This electronic version will be duly attested by the competent authority at MACCIA, Nashik,</p><p>ensuring its legal validity and adherence to established trade standards.</p><p><br></p><p>Additionally, this initiative is crucial for Conqoreeon Exim Private Limited's working capital requirements.</p><p>Through the electronic CoO, the company will be able to access financial support from Singapore-based</p><p>financial institution, XDC Trade Network. This collaboration aims to provide timely and efficient financial</p><p>solutions to the exporter.</p><p><br></p><p><strong>With Regards,</strong></p>`,
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
