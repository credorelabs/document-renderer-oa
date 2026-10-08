import { v2 } from "@govtechsg/open-attestation";
import { BulkBOLData } from "../bulkbol/types";

export const bulkEblTemplate: BulkBOLData = {
  recipient: {
    ip: "192.168.1.100",
    scac: "12",
    voyage: "voyage-123",
    parties: {
      carrier: {
        contactName: "John Doe",
        organizationName: "Carrier",
        address: "Gurgaon, India",
        email: "carrier1@yopmail.com",
        phone: "+91-9876543210",
        leiNo: "25"
      },
      shipper: {
        contactName: "Asif",
        organizationName: "Exporter",
        address: "One Didsbury Point 2 The Avenue, Manchester, GB, M20 2EY",
        email: "exporter@yopmail.com",
        phone: "+91-8765432109",
        leiNo: "34"
      },
      consignee: {
        contactName: "Asif",
        organizationName: "Importers",
        address: "2rf-171 sangram shai camo noamundi,jharkhand",
        email: "importer1@yopmail.com",
        phone: "+91-7654321098",
        leiNo: "34"
      },
      notifyParty: {
        contactName: "John Doe",
        organizationName: "Carrier",
        address: "Gurgaon, India",
        email: "carrier1@yopmail.com",
        phone: "+91-9876543210",
        leiNo: "25"
      }
    },
    corridor: "UK",
    goodsType: "Steel",
    netWeight: "50000 MT",
    vesselName: "vessel",
    dateOfIssue: "2026-09-23T00:00:00.000Z",
    grossWeight: "50000 MT",
    measurement: "20000",
    documentType: "EBL",
    placeOfIssue: "MAA - Chennai Port",
    portOfLoading: "AD PAS - Pas de la Casa",
    shippedOnDeck: true,
    volumeMeasure: "20000",
    blockchainName: "amoy",
    documentNumber: "EBL12-021",
    freightPayable: "odisha",
    placeOfReceipt: "SG SIN - Singapore Port",
    totalNetWeight: "50000 MT",
    cargoWeightUnit: "KG",
    documentVersion: "1.0",
    marksAndNumbers: "1234567890",
    measurementUnit: "CBM",
    placeOfDelivery: "SG SIN - Singapore Port",
    portOfDischarge: "AI MBB - Meads Bay Beach",
    referenceNumber: "23",
    cargoDescription: "Granulated slag (slag sand) from the manufacture of iron or steel",
    cargoGrossWeight: "55000 MT",
    charterPartyDate: "2026-09-04T00:00:00.000Z",
    totalGrossWeight: "55000 MT",
    numberOfOriginals: 1,
    shippedOnBoardDate: "2026-09-18T00:00:00.000Z",
    termsAndConditions: "Ok odne",
    totalVolumeMeasure: "30000 CBM",
    carrier_signer_place: "Chennai, India",
    tokenRegistryAddress: "0x60dCA7EBFa69FbaC186Bc8201A3AA46553C68DC1",
    transhipmentLocation: "Singapore",
    transportationServiceRequirement: "Standard",
    carrierLogo: "",
    totalNumberOfPackages: "15"
  },

  exporter_sign_time: "2026-09-23T00:00:00.000Z",
  exporterEmail: "",
  exporterPhone: "",
  exporterAddress: "",
  exporterName: "",
  exporterCompanyName: "",

  shipping_company_sign_time: "2026-09-23T00:00:00.000Z",
  shipping_company_signer: "",
  notify_name: "",
  notify_contact_name: "",
  notify_address: "",
  notify_contact_email: "",
  notify_contact_phone: "",
  exporter_signer_place: "",

  exporterSignIp: "",
  shippingCompanySignIp: "",
  currency: "",

  bolProof: {
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
      name: "CREDORE",
      tokenRegistry: "0x0687bD3B7Df4DaF3A66140293601aF67ed83eC37",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "td.credore.xyz"
      }
    }
  ],
  $template: {
    name: "BULK_EBL",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
