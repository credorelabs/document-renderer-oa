import { v2 } from "@govtechsg/open-attestation";


export interface ShippingDocument extends v2.OpenAttestationDocument{
  certificateNumber: string;
  packingNumber: string;
  totalVolume: number;
  totalWeight: number;
  portOfLading: string;
  portOfDischarge: string;
  placeOfDelivery: string;
  sellerReferrence: string;
  buyerReference: string;
  temperature: number;
  noOfPackages: number;
  weightUnit: string;
  conveyanceRefNo: string;
  modeOfTransport: string;
  transportContractNumber: string;
  transportServiceProvider: string;
  seller: string;
  buyer: string;
  consignment: string;
  containerNo: string;
  goods: any[];
  invoice: Invoice,
  supplierSignName: string;
  supplier_sign_time: string;
  supplier_sign_name: string;
  supplierPosition: string;
  supplier_email: string;
  supplierEmail: string;
  supplier_name: string;
  chamberSignTime: string;
  chamberEmail: string;
  chamber_email:string;
  chamber_sign_time:string;
  chamberPosition: string;
  issuers: any;
  template: string;
}
interface Invoice {
  invoice_number: string;
  invoice_date: string;
  due_date: string;
  amount: string;
  currency: string;
  supplier_name: string;
  supplier_address: string;
  supplier_vat_number: string;
  supplier_contact_email: string;
  supplier_contact_name: string;
  supplier_contact_phone: string;
  customer_name: string;
  customer_address: string;
  customer_vat_number: string;
  customer_contact_name: string;
  customer_contact_email: string;
  Invoice_Lines: InvoiceLine[];
  countryOfOrigin: string;
  contractNumber: string;
  salesOrderNumber: string;
  ladingPort: string;
  dischargePort: string;
  vesselName: string;
  moisture: string;
  taxAmount: string;
  creditedAmount: string;
  customer_contact_phone: string;
  buyerContractNumber: string;
  quantities: string;
  bankName: string;
  bankAccountNo: string;
  IFSCCode: string;
  bankHolderName: string;
}

interface InvoiceLine {
  description: string;
  quantity: string;
  unit_price: string;
  discount: string;
  line_total: string;
  hsCode: string
}

