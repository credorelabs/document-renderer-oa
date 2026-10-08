import { v2 } from '@govtechsg/open-attestation'

interface BulkBOLParty {
  contactName?: string
  organizationName?: string
  address?: string
  email?: string
  phone?: string
  leiNo?: string
}

interface BulkBOLRecipient extends v2.Recipient {
  ip?: string
  scac?: string
  voyage?: string
  parties?: {
    carrier?: BulkBOLParty
    shipper?: BulkBOLParty
    consignee?: BulkBOLParty
    notifyParty?: BulkBOLParty
  }
  corridor?: string
  goodsType?: string
  netWeight?: string
  vesselName?: string
  dateOfIssue?: string
  grossWeight?: string
  measurement?: string
  documentType?: string
  placeOfIssue?: string
  portOfLoading?: string
  shippedOnDeck?: boolean
  volumeMeasure?: string
  blockchainName?: string
  documentNumber?: string
  freightPayable?: string
  placeOfReceipt?: string
  totalNetWeight?: string
  cargoWeightUnit?: string
  documentVersion?: string
  marksAndNumbers?: string
  measurementUnit?: string
  placeOfDelivery?: string
  portOfDischarge?: string
  referenceNumber?: string | number
  cargoDescription?: string
  cargoGrossWeight?: string
  charterPartyDate?: string
  totalGrossWeight?: string
  numberOfOriginals?: string | number
  shippedOnBoardDate?: string
  termsAndConditions?: string
  totalVolumeMeasure?: string
  carrier_signer_place?: string
  tokenRegistryAddress?: string
  transhipmentLocation?: string
  transportationServiceRequirement?: string
  carrierLogo?: string
  totalNumberOfPackages?: string
}

interface BulkBolProof {
  a0: string
  a1: string
  b0: string
  b1: string
  b2: string
  b3: string
  c0: string
  c1: string
  scalarPubKey0: string
  scalarPubKey1: string
}

export interface BulkBOLData extends v2.OpenAttestationDocument {
  recipient?: BulkBOLRecipient
  bolProof?: BulkBolProof
  issuers: v2.Issuer[]
  exporter_sign_time: string
  exporterEmail: string
  exporterPhone: string
  exporterAddress: string
  exporterName: string
  exporterCompanyName: string

  shipping_company_sign_time: string
  shipping_company_signer: string
  notify_name: string
  notify_contact_name: string
  notify_address: string
  notify_contact_email: string
  notify_contact_phone: string
  exporter_signer_place: string

  exporterSignIp: string
  shippingCompanySignIp: string
  currency: string
}
