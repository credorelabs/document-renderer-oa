import { v2 } from "@govtechsg/open-attestation";

export interface PurchaseOrder extends v2.OpenAttestationDocument {
  purchaseOrderNo?: string;
  purchaseOrderDate?: string;
  deliveryDate?: string;
  currency?: string;
  modeOfTransport?: string;
  deliveryIncoTerm?: string;
  placeOfDelivery?: string;
  paymentTerms?: string;
  quotationNumber?: string;
  tax?: string;
  totalAmount?: string;
  subTotal?: string;
  othersCost?: string;
  purchasePartiesDetails: purchasePartiesDetails;
  productDetails: productDetails[];
  blockchainName?: string;
  mintTxHash?: string;
}

interface purchasePartiesDetails {
  exporterCompanyName?: string;
  exporterName?: string;
  exporterPhoneNumber?: string;
  exporterCountry?: string;
  exporterPinCode?: string;
  exporterEmail?: string;
  exporterAddress?: string;
  importerCompanyName?: string;
  importerName?: string;
  importerPhoneNumber?: string;
  importerCountry?: string;
  importerPinCode?: string;
  importerEmail?: string;
  importerAddress?: string;
}
interface productDetails {
  description: string;
  quantity: string;
  unitPrice: string;
  lineTotal: string;
  hsCode: string;
  item: string;
}
