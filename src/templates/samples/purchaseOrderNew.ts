import { v2 } from "@govtechsg/open-attestation";
import { NewPurchaseOrder } from "../purchase-order-new/types";
export const purchaseOrderTemplateNew: NewPurchaseOrder = {
  recipient: {
    purchaseOrderNo: "PO123457",
    purchaseOrderDate: "2024-06-24T12:00:00Z",
    deliveryDate: "2024-07-10T12:00:00Z",
    currency: "USD",
    modeOfTransport: "Air",
    deliveryIncoTerm: {
      code: "FOB",
      description: '',
      responsibilitySeller: '',
      deliveryPoint: '',
      responsibilityBuyer: '',
    },
    placeOfDelivery: "New York, USA",
    paymentTerms: "Net 30",
    quotationNumber: "QO789012",
    tax: "5%",
    totalAmount: "10000.00",
    subTotal: "9500.00",
    othersCost: "500.00",
    purchasePartiesDetails: {
      exporterCompanyName: "Exporter Inc.",
      exporterName: "John Doe",
      exporterPhoneNumber: "1234567890",
      exporterCountry: "USA",
      exporterPinCode: "10001",
      exporterLei: "DSFGHJKHGFDGHJKFDGHJK",
      exporterEmail: "kp_sambhavani@yahoo.com",
      exporterAddress: "123 Export St, New York, NY",
      importerCompanyName: "Importer LLC",
      importerName: "Jane Smith",
      importerPhoneNumber: "0987654321",
      importerCountry: "USA",
      importerPinCode: "20001",
      importerLei: "DSFGHJKGFDGHJKGFDHJKGF",
      importerEmail: "a2zhoneywala@gmail.com",
      importerAddress: "456 Import Ave, Washington, DC"
    },
    blockchainName: "XDC",
    mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
    importerDns: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
    signerLocation: "Bhubaneswar",
    signerIPAddress: "137.345.23.10",
    signerDate: "2023-05-30T04:59:19.539Z",
    signerDns: "verifiable.credore.xyz",
    productDetails: [
      {
        hsCode: "123456",
        quantity: "100",
        unitPrice: "50.00",
        description: "Product Description 1",
        item: "Item 1",
        lineTotal: "5000.00"
      },
      {
        hsCode: "789012",
        quantity: "50",
        unitPrice: "90.00",
        description: "Product Description 2",
        item: "Item 2",
        lineTotal: "4500.00"
      }
    ],
    poProof: {
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
    consignee: {
      leiNumber: "335800E6C75YGSGD5T66",
      partyCompanyName: "TATA STEEL LIMITED",
      partyAddress: "BOMBAY HOUSE, 24, HOMI MODY STREET,FORT, MUMBAI, MUMBAI, IN, 400001",
      partyName: "Praduman",
      partyEmail: "praduman@credore.xyz",
      partyPhone: "7008297411",
      partyISD: "+91",
    },
    notifyParty: {
      leiNumber: "335800E6C75YGSGD5T66",
      partyCompanyName: "TATA STEEL LIMITED",
      partyAddress: "BOMBAY HOUSE, 24, HOMI MODY STREET,FORT, MUMBAI, MUMBAI, IN, 400001",
      partyName: "Praduman",
      partyEmail: "praduman@credore.xyz",
      partyPhone: "7008297411",
      partyISD: "+91",
    },
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
    name: "PURCHASE_ORDER_V2",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
