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

export interface BulkBOLData extends v2.OpenAttestationDocument {
  recipient?: BulkBOLRecipient
  bolProof?: BulkBolProof
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
