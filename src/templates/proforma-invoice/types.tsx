import { v2 } from "@govtechsg/open-attestation";

export interface ProformaInvoice extends v2.OpenAttestationDocument {
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
  supplier_lei_number: string;
  customer_name: string;
  customer_address: string;
  customer_vat_number: string;
  customer_contact_name: string;
  customer_contact_email: string;
  customer_lei_number: string;
  Invoice_Lines: InvoiceLine[];
  countryOfOrigin: string;
  contractNumber: string;
  salesOrderNumber: string;
  ladingPort: string;
  dischargePort: string;
  vesselName: string;
  moisture: string;
  taxAmount: string;
  outstanding: string;
  customer_contact_phone: string;
  buyerContractNumber: string;
  quantities: string;
  bankName: string;
  bankAccountNo: string;
  IFSCCode: string;
  bankHolderName: string;
  subTotal: string;
  blockchainName?: string;
  mintTxHash?: string;
  signerLocation?: string;
  signerIPAddress?: string;
  invoiceProof?: InvoiceProof;
  paymentMethod?: string;
  paymentTerms?: string;
  incoterm?: IncoTerm;
  termsAndConditions?: string;
  signerDate?: string;
  signerDns?: string;
  companyLogo?: string;
}

interface IncoTerm {
  code?: string;                 
  description?: string;             
  responsibilityBuyer?: string;     
  responsibilitySeller?: string;    
  deliveryPoint?: string;           
}

interface InvoiceLine {
  description: string;
  quantity: string;
  unit_price: string;
  discount: string;
  line_total: string;
  hsCode: string;
}

interface InvoiceProof {
  a0: string;
  a1: string;
  b0: string;
  b1: string;
  b2: string;
  b3: string;
  c0: string;
  c1: string;
  scalarPubKey0: string;
  scalarPubKey1: string;
}