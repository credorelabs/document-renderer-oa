import { v2 } from "@govtechsg/open-attestation";
import { CargoDocument } from "../transport-document/types";

export const cargoDocumentTemplate: CargoDocument = {
  recipient: {
   primaryLogo: "https://imgs.search.brave.com/ju0dBzUiF5JbCT6wRZGfy61um0D9ntUXUU9GsSggplk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzIvbmlsZS1j/YXJnby1jYXJyaWVy/LXVnYW5kYS1sb2dv/LXBuZ19zZWVrbG9n/by02MTA1MzgucG5n",
  dcsaBlNumber: "BOL-789012",
  shippingInstructionsReference: "a1b2c3d4-5678-9012-e3f4-g5h6i7j8k9l0",
  date_actualDateOfPlaceOfReceipt: "2025-05-25T00:00:00.000Z",
  goods_HSCode: "654321",
  goods_descriptionOfGoods: "Consumer Electronics - Smartphones",
  goods_numberOfPackages: "15",
  location_placeOfDelivery: "SG SIN - Singapore Port",
  location_placeOfReceipt: "IN MAA - Chennai Port",
  location_portOfDischarge: "SG SIN - Singapore Port",
  location_portOfLoading: "IN MAA - Chennai Port",
  importerCompanyName: "Global Imports Pte Ltd",
  importerName: "Amit Singh",
  importer_email: "amit.singh@globalimports.com",
  importer_phone: "+6598765432",
  importer_address: "123 Marina Bay, Singapore 018983",
  importer_lei: "LEI-9876543210",
  exporterCompanyName: "Tech Exports Ltd",
  exporterAddress: "456 Industrial Estate, Chennai, India",
  exporterName: "Priya Menon",
  exporterEmail: "priya.menon@techexports.in",
  exporterPhone: "+919876543210",
  carrier_name: "Evergreen Line",
  carrier_contact_name: "John Lee",
  carrier_address: "789 PortARE Road, Singapore 099253",
  carrier_contact_email: "john.lee@evergreenline.com",
  carrier_contact_phone: "+6567890123",
  other_name: "Freight Forwarders Co",
  other_contact_name: "Sarah Tan",
  other_address: "101 Logistics Hub, Dubai, UAE",
  other_contact_email: "sarah.tan@freightforwarders.ae",
  other_contact_phone: "+971501234567",
  other_lei: "LEI-4567891230",
  notify_name: "Notify Logistics Ltd",
  notify_contact_name: "Michael Chen",
  notify_address: "202 Trade Center, Singapore 049321",
  notify_contact_email: "michael.chen@notifylogistics.com",
  notify_contact_phone: "+6590123456",
  notify_lei: "LEI-3216549870",
  carrier_signer_place: "SG SIN - Singapore Port",
  blockchainName: "TradeChain",
  txHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  carrierSignIp: "192.168.1.100",
  carrierSignTime: "2025-05-25T10:00:00.000Z",
  sealNumber: "SEAL789456",
  humidity: "60%",
  ventilation: "Standard",
  exporterLei: "LEI-1237894560",
  carrier_lei: "LEI-6541239870",
  containerType: "dry cargo",
  containerSize: "40ft",
  onCarriageBy: "TRUCK",
  preCarriageBy: "RAIL",
  numberOfPackages: "15",
  documentType: "BOL",
  documentReferenceNumber: "TD456",
  expectedArrivalAtPlaceOfDeliveryStartDate: "2025-06-01T00:00:00.000Z",
  containerNumber: "EGHU1234567",
  temperature: "25°C",
  grossWeight: 1200,
  grossWeightUnit: "KGM",
  numberOfContainer: "12"
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
    name: "SHIPPING_INSTRUCTION",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
}