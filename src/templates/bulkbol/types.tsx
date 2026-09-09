import { v2 } from '@govtechsg/open-attestation'

interface BulkBOLParty {
  name?: string
  address?: string
  organisationId?: string | number
}

interface BulkBOLRecipient extends v2.Recipient {
  scac?: string
  parties?: {
    carrier?: BulkBOLParty
    shipper?: BulkBOLParty
    consignee?: BulkBOLParty
    notifyParty?: BulkBOLParty
  }
  vesselName?: string
  dateOfIssue?: string
  measurement?: string
  documentType?: string
  placeOfIssue?: string
  portOfLoading?: string
  shippedOnDeck?: boolean
  blockchainName?: string
  documentNumber?: string
  freightPayable?: string
  cargoWeightUnit?: string
  measurementUnit?: string
  portOfDischarge?: string
  referenceNumber?: string
  cargoDescription?: string
  cargoGrossWeight?: string
  charterPartyDate?: string
  numberOfOriginals?: string | number
  shippedOnBoardDate?: string
  termsAndConditions?: string
  carrier_signer_place?: string
  tokenRegistryAddress?: string
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
}
