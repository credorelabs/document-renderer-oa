import { v2 } from "@govtechsg/open-attestation";
import { CertificateOfOrigin } from "../certificateoforigin/types";

export const certificateofOriginTemplate: CertificateOfOrigin = {
  certificateNumber: "COO12345",
  supplier_name: "ABC Supplier",
  supplier_address: "123 Supplier St, Supplier City",
  supplier_contact_email: "supplier@email.com",
  supplier_contact_name: "Supplier Contact",
  supplier_contact_phone: "123-456-7890",
  customer_name: "XYZ Customer",
  customer_address: "456 Customer Ave, Customer City",
  customer_contact_name: "Customer Contact",
  customer_contact_phone: "987-654-3210",
  customer_contact_email: "customer@email.com",

  dateOfIssuance: "2023-11-16T15:30:00Z",
  termsOfShipment: "FOB",
  vessel_name: "Example Vessel",
  chamber_name: "chamber Co.",
  chamber_address: "789 chamber St, chamber City",
  chamber_contact_name: "chamber Contact",
  chamber_contact_phone: "111-222-3333",
  chamber_contact_email: "chamber@email.com",
  portOfLading: "Port A",
  portOfDischarge: "Port B",
  buyerSignTime: "2023-11-17T10:00:00Z",
  supplierSignTime: "2023-11-16T15:30:00Z",
  supplier_sign_name: "P Singh",
  supplier_sign_time: "2023-11-16T10:00:00Z",
  supplier_position: "CEO",
  supplier_email: "psingh@gmail.xyz",

  chamber_sign_name: "Chamber boi",
  chamber_sign_time: "2023-11-17T15:30:00Z",
  chamber_position: "Director",
  chamber_email: "chamber@chamber.com",
  manufacturer_name: "XYZ Manufacturing Inc.",
  manufacturer_address: "456 Manufacturer Ave, Production Town, Country",
  manufacturer_country: "Manufacturia",

  meansOfTransport: "ship",

  hsCode: "HS001",
  quantity: 150,
  totalWeight: "1000 kg",
  totalVolume: "10 cubic meters",
  route: "sea",

  chamber_logo: "logo",
  chamber_fax: "fax",

  kindOfPackage: "s",
  containerNo: "conNo",
  descriptionOfGood: "description",
  termsOfShippment: "terms",
  value: "USD something",

  invoiceNumber: "INV0001022020",
  blockchainName: "XDC",
  mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
  chamber_signer_place: "Dubai",
  supplier_signer_place: "India",
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
    name: "CERTIFICATE_OF_ORIGIN",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
