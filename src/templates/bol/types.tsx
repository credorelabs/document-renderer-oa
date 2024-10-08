import { v2 } from "@govtechsg/open-attestation";

export interface BillOfLadingData extends v2.OpenAttestationDocument {
  blNumber: string;
  bookingReferenceNumber: string;
  consignment_containerNumber: string;
  consignment_containerSizeTypeISO: string;
  consignment_fullOrEmptyIndicator: string;
  contractQuoteReferenceNumber: string;
  date_actualDateOfPlaceOfDelivery?: string;
  date_actualDateOfPlaceOfReceipt?: string;
  date_actualTimeOfArrival?: string;
  date_actualTimeOfDeparture?: string;
  date_estimatedDateOfPlaceOfDelivery?: string;
  date_estimatedDateOfPlaceOfReceipt?: string;
  date_estimatedTimeOfArrival?: string;
  date_estimatedTimeOfDeparture?: string;
  freightForwardersReferenceNumber: string;
  goods_HSCode: string;
  goods_IMDG: string;
  goods_dangerLevel: string;
  goods_descriptionOfGoods: string;
  goods_numberOfPackages: string;
  goods_productIdentifier: string;
  goods_properShippingTechnicalName: string;
  goods_typeOfPackagingCEFACT: string;
  location_placeOfDelivery?: string;
  location_placeOfPaymentUNLOCODE?: string;
  location_placeOfReceipt?: string;
  location_portOfDischarge?: string;
  location_portOfLoading?: string;
  measure_temperatureSettingForReeferContainers?: string;
  measure_temperatureUnitsUNCEFACT?: string;
  measure_totalNumberOfContainers?: string;
  measure_volume?: string;
  measure_weight?: string;
  party_SCAC: string;
  party_SMFG: string;
  party_consignee?: string;
  party_notifyParty?: string;
  party_shipper?: string;
  shippersReferenceNumber: string;
  terms: string;
  transport_IMOvesselNumber?: string;
  transport_conveyanceReferenceNumber?: string;
  transport_modeOfTransportUNCEFACT?: string;
  transport_vesselName?: string;

  exporter_sign_time?: string;
  exporterEmail?: string;
  exporterPhone?: string;
  exporterAddress?: string;
  exporterName?: string;
  exporterLei?: string;
  exporterCompanyName?: string;

  importerCompanyName?: string;
  importerAddress?: string;
  importerName?: string;
  importer_email?: string;
  importer_phone?: string;
  importer_lei?: string;
  importer_address?: string;

  shipping_company_sign_time?: string;
  shipping_company_signer?: string;

  carrier_name?: string;
  carrier_contact_name?: string;
  carrier_address?: string;
  carrier_lei?: string;
  carrier_contact_email?: string;
  carrier_contact_phone?: string;

  notify_name?: string;
  notify_contact_name?: string;
  notify_address?: string;
  notify_lei?: string;
  notify_contact_email?: string;
  notify_contact_phone?: string;

  blockchainName?: string;
  mintTxHash?: string;
  carrier_signer_place?: string;
  exporter_signer_place?: string;

  shippingBillNo?: string;
  invoiceNumber: string;
  invoiceDate: string;
  sealNumber: string;
  humidity: string;
  ventilation: string;
  tokenRegistryAddress: string;

  primaryLogo: string;
  secondaryLogo: string;

  currency: string;
  consignment_containerReeferType: string;

  exporterSignIp?: string;
  shippingCompanySignIp?: string;
  bolProof?: BolProof;
}

interface BolProof {
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
