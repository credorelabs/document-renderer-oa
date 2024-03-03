import { v2 } from "@govtechsg/open-attestation";
import { mumbaiCoO } from "../mumbai-CoO/types";

export const MumbaiCooTemplate: mumbaiCoO = {
  certificateNumber: "COO12345",
  supplier_name: "MASTER COMPONENTS PRIVATE LIMITED",
  supplier_address: "D-10/A And D-10/B,M.I.D.C.Ambad, Nashik-422010, Maharashtra, India.",
  supplier_contact_gst: "27AADCM3035D1ZW",
  supplier_contact_phone: "91-253 - 6604094, 6604938",
  supplier_contact_email: "suplier@gmail.com",
  customer_name: "VISHAY ELECTRONIC SPOL. S.R.O.",
  customer_address: "456 Customer Ave, Customer City",
  customer_contact_name: "Customer Contact",
  customer_contact_phone: "(+420) 377981115",
  customer_contact_email: "customer@email.com",

  dateOfIssuance: "2023-11-16T15:30:00Z",
  termsOfShipment: "FOB",
  vessel_name: "Example Vessel",
  chamber_name: "Maharashtra Chamber of Commerce, Industry and Agriculture",
  chamber_address: "789 chamber St, chamber City",
  chamber_contact_name: "chamber Contact",
  chamber_contact_phone: "Nos. 2285 5859 / 60 / 6739 5800 (30 Lines)",
  chamber_contact_email: "maccia@maccia.org.in",
  portOfLading: "Nhava Sheva",
  portOfDischarge: "Jebel Ali, UAE",
  buyerSignTime: "2023-11-17T10:00:00Z",
  supplierSignTime: "2023-11-16T15:30:00Z",
  supplier_sign_name: "Zakir Shaikh",
  supplier_sign_time: "2023-11-16T10:00:00Z",
  supplier_position: "CEO",
  supplier_email: "psingh@gmail.xyz",

  chamber_sign_name: "Avinash Pathak",
  chamber_sign_time: "2023-11-17T15:30:00Z",
  chamber_position: "Asst. Secretary",
  chamber_email: "chamber@chamber.com",
  manufacturer_name: "XYZ Manufacturing Inc.",
  manufacturer_address: "456 Manufacturer Ave, Production Town, Country",
  manufacturer_country: "Manufacturia",

  meansOfTransport: "ship",

  hsCode: "HS001",
  quantity: 150,
  totalWeight: "1000 kilograms",
  totalVolume: "10 cubic meters",
  route: "sea",

  //   chamber_logo: "../mumbai-CoO/logo.png",
  chamber_fax: "(022) 2285 5861",

  kindOfPackage: "s",
  containerNo: "conNo",
  descriptionOfGood: "description",
  dimenssionOfPallets: "76x76x76",
  totalNetWeight: "1200 kilograms",
  termsOfShippment: "terms",
  value: "USD something",
  numOfPackages: "12",
  markOfPackage: "Corrugated Boxes packed in one Pallet",

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
    name: "MUMBAI_CERTIFICATE_OF_ORIGIN",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
