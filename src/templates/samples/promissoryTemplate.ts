import { v2 } from "@govtechsg/open-attestation";
import { Prom } from "../promissory/types";
export const promissoryTemplate: Prom = {
  pNoteId: "2b2ede20-6552-4fa5-94d7-dfd167b0f84f",
  commitmentDate: "2024-05-02T08:30:00Z",
  drawerCompanyName: "CREDORE",
  drawerCin: "7008297411",
  drawerEmail: "raj@credore.xyz",
  drawerJurisdiction: "India",
  draweeCompany: "KALINGA SUPPLIERS",
  draweeEmail: "supplier@example.com",
  draweeCIN: "7008297411",
  draweeJurisdiction: "Singapore",
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
  drawer: "43567897654356789",
  drawee:"53467890765432456789",
  txHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
  drawerWalletAddress: "c594c93e-c74b-4937-bf2a-c47135fad8ce:string:0x6F8DB93537748De1e9Dfc7BAC1FFFfee278E1DF4",
  draweeWalletAddress: "192bfada-0bdd-462f-ad32-ae270c2d41e3:string:0x92Da16147624B4Cb8A49b3cfe39909599d6D7DbB",
  signerLocation: "Bhubaneswar",
  signerIPAddress: "137.345.23.10",
  pNoteProof: {
    a0: "1883415604158045018758784307621608541141656088150671126336919119463579281976",
    a1: "481486531415174545861518055832704512332066754785381752517889213186204020854",
    b0: "19472865000851586587233492554418613501307819590551265018263417518504616128719",
    b1: "19042321348336369171156220546957910039570548376126055917178173290093728727059",
    b2: "12454320893011956406728307167101154280673518520526064558279469282445580260562",
    b3: "6135457810494506073647459415868749459270479612062963917114595795650808536942",
    c0: "632298289898394378764433953656537542932208624038552230205734932116637754329",
    c1: "20512704515447428000231780480269601301199455727786440182564501953727451428201",
    scalarPubKey0: "16551728319327439168317300279856018011041840639624811157340627997761414256717",
    scalarPubKey1: "21676599011130813512183056032443407887594316023951962444664078281579755267315"
  },
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
