import { v2 } from "@govtechsg/open-attestation";
import { BillOfExchangeMain } from "../boe-main/types";

export const packingListTemplate: any = {
  certificateNumber: null,
  packingNumber: "P27",
  totalWeight: "40",
  totalVolume: "100",
  portOfLading: "Port-1",
  portOfDischarge: "Port-2",
  seller: "tata steel",
  buyer: "Aditya",
  sellerReferrence: "SR1234",
  buyerReference: "BR1234",
  temperature: "20",
  noOfPackages: "4",
  weightUnit: "kG",
  conveyanceRefNo: "CR1234",

  goods: [
    {
      id: "4f6a588c-c99a-465b-8967-b2ba59c1a223",
      name: "New Item",
      quantity: 123,
      typeOfPacking: "box",
      shippingMarks: "yes",
      hsCode: "HSC1234",
      dangerousGood: null,
      description: null,
      properShipping: null,
      packagingRequirements: null,
      packingListId: "24f72d8c-dbf7-4ca8-82b1-32a2c96a6152"
    }
  ],
  invoice: {
    id: "6c1c9101-0aa9-4698-91cb-348a9f5d2b0e",
    invoice_number: "INV-0001",
    documentsRemitted: "Port-2",
    contractNumber: "C01",
    buyerContract: "B01",
    salesOrderNumber: "S01",
    countryOfOrigin: "INDIA",
    hsNumber: "HSC1234",
    quantity: "10",
    unitOfMeasurement: "Kg",
    moisture: "yes",
    invoice_date: "2024-01-23T00:00:00.000Z",
    due_date: "2024-01-24T00:00:00.000Z",
    bolDate: null,
    ladingPort: "Port-1",
    dischargePort: "Port-2",
    vesselName: "vessel-1",
    amount: "900.00",
    subTotal: "1000.00",
    outstanding: null,
    currency: "USD",
    supplier_name: "Birla",
    supplier_address: "Delhi, India, 852147",
    supplier_vat_number: null,
    supplier_contact_email: "abhilashsethi9@gmail.com",
    supplier_contact_name: "Aditya Birla",
    supplier_contact_phone: "+915252841198",
    supplier_fax_number: null,
    customer_name: "Mahindra",
    customer_address: "New Delhi, UP, India",
    customer_vat_number: "VAT100",
    customer_contact_name: "Abhilash Sethi",
    customer_contact_phone: "+917978186407",
    customer_contact_email: "abhilashsethi9@gmail.com",
    customer_fax_number: "F100",
    taxAmount: null,
    exchangeRate: "Port-2",
    creditAmount: "100",
    merkleRootCount: 1,
    incoterm: true,
    paymentTerm: true,
    paymentMethod: null,
    createdAt: "2024-01-22T05:38:44.616Z",
    updatedAt: "2024-01-22T05:38:44.667Z",
    organisationId: 3
  },
  supplier_sign_name: "Aditya Birla",
  supplier_sign_time: "2024-01-31T06:11:24.263Z",
  supplier_position: "new job title",
  supplier_email: "abhilashsethi9@gmail.com",
  chamber_sign_time: "2024-01-31T06:11:24.263Z",
  chamber_email: "abhilashsethi9@gmail.com",
  chamber_position: "INV-0001",
  blockchainName: "XDC",
  mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
  exporter_signer_place: "Dubai",
  importer_signer_place: "India",
  signerDate: "2023-05-30T04:59:19.539Z",
  signerDns: "verifiable.credore.xyz",
  signerLocation: "Bhubaneswar",
  signerIPAddress: "137.345.23.10",
  issuers: [
    {
      id: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec",
      name: "CREDORE",
      revocation: {
        type: "NONE"
      },
      identityProof: {
        type: "DNS-DID",
        location: "tt.credore.xyz",
        key: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller"
      }
    }
  ],
  $template: {
    name: "PACKING_LIST",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
