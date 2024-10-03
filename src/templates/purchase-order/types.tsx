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
  importerDns?: string;
  signerLocation?: string;
  signerIPAddress?: string;
}

interface purchasePartiesDetails {
  exporterCompanyName?: string;
  exporterName?: string;
  exporterPhoneNumber?: string;
  exporterCountry?: string;
  exporterPinCode?: string;
  exporterEmail?: string;
  exporterAddress?: string;
  exporterLei?: string;
  importerCompanyName?: string;
  importerName?: string;
  importerPhoneNumber?: string;
  importerCountry?: string;
  importerPinCode?: string;
  importerEmail?: string;
  importerAddress?: string;
  importerLei?: string;
}
interface productDetails {
  description: string;
  quantity: string;
  unitPrice: string;
  lineTotal: string;
  hsCode: string;
  item: string;
}
