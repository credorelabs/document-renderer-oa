import { v2 } from "@govtechsg/open-attestation";
import { PurchaseOrder } from "../purchase-order/types";
export const purchaseOrderTemplate: PurchaseOrder = {
  purchaseOrderNo: "PO123457",
  purchaseOrderDate: "2024-06-24T12:00:00Z",
  deliveryDate: "2024-07-10T12:00:00Z",
  currency: "USD",
  modeOfTransport: "Air",
  deliveryIncoTerm: "FOB",
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
    name: "PURCHASE_ORDER",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
