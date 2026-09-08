import { v2 } from "@govtechsg/open-attestation";
import { BulkBOLData } from "../bulkbol/types";

export const bulkEblTemplate: BulkBOLData = {
  recipient:{
    scac: "12",
      parties: {
        carrier: {
          name: "Carrier",
          address: "One Didsbury Point 2 The Avenue, Manchester, GB, M20 2EY",
          organisationId: "25"
        },
        "shipper": {
          name: "Asif",
          address: "One Didsbury Point 2 The Avenue, Manchester, GB, M20 2EY",
          organisationId: "34"
        },
        "consignee": {
          name: "Asif",
          address: "2rf-171 sangram shai camo noamundi,jharkhand",
          organisationId: "34"
        },
        "notifyParty": {
          name: "Asif",
          address: "2rf-171 sangram shai camo noamundi,jharkhand",
          organisationId: "34"
        }
      },
      vesselName: "vessel",
      dateOfIssue: "2026-09-23T00:00:00.000Z",
      measurement: "20",
      documentType: "EBL",
      placeOfIssue: "12",
      portOfLoading: "AD PAS - Pas de la Casa",
      shippedOnDeck: true,
      blockchainName: "xinfin",
      documentNumber: "EBL12-021",
      freightPayable: "odisha",
      cargoWeightUnit: "KG",
      measurementUnit: "CBM",
      portOfDischarge: "AI MBB - Meads Bay Beach",
      referenceNumber: "23",
      cargoDescription: "Sausages and similar products, of meat, meat offal, blood or insects; food preparations based on these products",
      cargoGrossWeight: "12",
      charterPartyDate: "2026-09-04T00:00:00.000Z",
      numberOfOriginals: "1",
      shippedOnBoardDate: "2026-09-18T00:00:00.000Z",
      termsAndConditions: "Ok odne",
      carrier_signer_place: "Tiruppur, India",
      tokenRegistryAddress: "0x60dCA7EBFa69FbaC186Bc8201A3AA46553C68DC1"
  },

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
