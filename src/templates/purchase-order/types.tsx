import { v2 } from "@govtechsg/open-attestation";

export interface PurchaseOrder extends v2.OpenAttestationDocument {
  purchaseOrderNo?: string;
  purchaseOrderDate?: string;
  deliveryDate?: string;
  currency?: string;
  modeOfTransport?: string;
  deliveryIncoTerm?: DeliveryIncoterm;
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
  poProof?: PoProof;
  signerDate?: string;
  signerDns?: string;
  termsAndConditions?: string;
}

interface PoProof {
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


interface DeliveryIncoterm {
  code?: string;
  description?: string;
  responsibilitySeller?: string;
  deliveryPoint?: string;
  responsibilityBuyer?: string;
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
