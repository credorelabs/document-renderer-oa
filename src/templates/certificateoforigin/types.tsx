import { v2 } from "@govtechsg/open-attestation";

export interface CertificateOfOrigin extends v2.OpenAttestationDocument {
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
  carrier_name: "Carrier Co.",
  carrier_address: "789 Carrier St, Carrier City",
  carrier_contact_name: "Carrier Contact",
  carrier_contact_phone: "111-222-3333",
  carrier_contact_email: "carrier@email.com",
  portOfLading: "Port A",
  portOfDischarge: "Port B",
  buyerSignTime: "2023-11-17T10:00:00Z",
  supplierSignTime: "2023-11-16T15:30:00Z",
  supplier_sign_name: "P Singh",
  supplier_sign_time: "2023-11-16T10:00:00Z",
  supplier_position: "CEO",
  supplier_email: "psingh@gmail.xyz",
  meansOfTransport: "ship",
  
  hsCode: "HS001",
  quantity: 150,
  totalWeight: "1000 kg",
  totalVolume: "10 cubic meters",
  route: "sea",
  
  chamber_sign_name: "Chamber boi",
  chamber_sign_time: "2023-11-17T15:30:00Z",
  chamber_position: "Director",
  chamber_email: "chamber@chamber.com", 

  manufacturer_name: "XYZ Manufacturing Inc.",
  manufacturer_address: "456 Manufacturer Ave, Production Town, Country",
  manufacturer_country: "Manufacturia",
  invoiceNumber: "INV0001022020"
}