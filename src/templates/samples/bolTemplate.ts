import { v2 } from "@govtechsg/open-attestation";
import { BillOfLadingData } from "../bol/types";

export const billOfLadingCertificate: BillOfLadingData = {
  blNumber: "BOL12345",

  bookingReferenceNumber: "BK123456",
  consignment_containerNumber: "CNT123",
  consignment_containerSizeTypeISO: "20GP",
  consignment_containerReeferType: "Dry",
  consignment_fullOrEmptyIndicator: "Full",
  contractQuoteReferenceNumber: "CQ123",
  date_actualDateOfPlaceOfDelivery: "2023-11-30T10:00:00Z",
  date_actualDateOfPlaceOfReceipt: "2023-11-25T12:00:00Z",
  date_actualTimeOfArrival: "2023-11-28T08:30:00Z",
  date_actualTimeOfDeparture: "2023-11-28T09:30:00Z",
  date_estimatedDateOfPlaceOfDelivery: "2023-12-01T10:00:00Z",
  date_estimatedDateOfPlaceOfReceipt: "2023-11-27T12:00:00Z",
  date_estimatedTimeOfArrival: "2023-11-30T08:30:00Z",
  date_estimatedTimeOfDeparture: "2023-11-30T09:30:00Z",
  freightForwardersReferenceNumber: "FFR123",
  goods_HSCode: "Str",
  goods_IMDG: "IMDG123",
  goods_dangerLevel: "High",
  goods_descriptionOfGoods: "[{\"hsCode\":\"071334 - Vegetables, leguminous; bambara beans (Vigna subterranea or Voandzeia subterranea), shelled, whether or not skinned or split, dried\",\"desc\":\"vegetablesss\"},{\"hsCode\":\"030119 - Fish; live, ornamental, other than freshwater\",\"desc\":\"Live fish\"},{\"hsCode\":\"300242 - Vaccines, toxins, cultures of micro-organisms (excluding yeasts) and similar products; for veterinary medicine\",\"desc\":\"Corona vaccine\"}]",
  goods_numberOfPackages: "100",
  goods_productIdentifier: "PID123",
  goods_properShippingTechnicalName: "Shipping goods",
  goods_typeOfPackagingCEFACT: "TypeA",
  location_placeOfDelivery: "Destination City",
  location_placeOfPaymentUNLOCODE: "LOC456",
  location_placeOfReceipt: "Origin City",
  location_portOfDischarge: "Discharge Port",
  location_portOfLoading: "Loading Port",
  measure_temperatureSettingForReeferContainers: "25°C",
  measure_temperatureUnitsUNCEFACT: "Celsius",
  measure_totalNumberOfContainers: "50",
  measure_volume: "2000 cubic meters",
  measure_weight: "5000 kilograms",
  party_SCAC: "SCAC123",
  party_SMFG: "SMFG456",
  party_consignee: "Consignee Name",
  party_notifyParty: "Notify Party Name",
  party_shipper: "Shipper Name",
  shippersReferenceNumber: "SRN123",
  terms: "FOB",
  transport_IMOvesselNumber: "IMO123",
  transport_conveyanceReferenceNumber: "CRN123",
  transport_modeOfTransportUNCEFACT: "Ship",
  transport_vesselName: "VesselXYZ",

  importerCompanyName: "ABC",
  importerAddress: "Dubai",
  importerName: "Prads",
  importer_email: "importer@importingcompany.com",
  importer_phone: "000000000000",
  importer_address: "address",
  importer_lei: "65SDF6757676",

  exporterCompanyName: "XYZ",
  exporterAddress: "india",
  exporterName: "Aditi",
  exporter_sign_time: "2023-11-30T09:30:00Z",
  exporterEmail: "aditi@credore.xyz",
  exporterPhone: "99999999999",
  exporterLei: "765467DFBSDJH",

  shipping_company_sign_time: "2023-11-30T09:30:00Z",
  shipping_company_signer: "Maersk",
  carrier_name: "Carrier Company",
  carrier_contact_name: "Gujral",
  carrier_address: "YNV, Canada",
  carrier_lei: "6755SFGS67578",
  carrier_contact_email: "cemail@gmail.com",
  carrier_contact_phone: "7008297411",

  notify_name: "Notifier company",
  notify_contact_name: "Harsh",
  notify_address: "XYZ, India",
  notify_lei: "765DSGSG67544",
  notify_contact_email: "nemail@gmail.com",
  notify_contact_phone: "7787009005",

  blockchainName: "XDC",
  mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
  carrier_signer_place: "Dubai",
  exporter_signer_place: "India",
  shippingBillNo: '435678976',

  invoiceNumber: 'INV-4356789',
  invoiceDate: '2023-11-30T09:30:00Z',
  sealNumber: '43256789dtrfyg',
  humidity: 'dtrfyghu',
  ventilation: 'cfgvbhj',
  tokenRegistryAddress: '0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3',

  primaryLogo: 'https://stock.adobe.com/search?k=%22company+logo%22',
  secondaryLogo: 'https://stock.adobe.com/search?k=it+logo',

  currency: "USD",

  exporterSignIp: "127.345.23.134",
  shippingCompanySignIp: "132.234.45.67",
  bolProof: {
    a0: "1883415604158045018758784307621608541141656088150671126336919119463579281976",
    a1: "481486531415174545861518055832704512332066754785381752517889213186204020854",
    b0: "19472865000851586587233492554418613501307819590551265018263417518504616128719",
    b1: "19042321348336369171156220546957910039570548376126055917178173290093728727059",
    b2: "12454320893011956406728307167101154280673518520526064558279469282445580260562",
    b3: "6135457810494506073647459415868749459270479612062963917114595795650808536942",
    c0: "632298289898394378764433953656537542932208624038552230205734932116637754329",
    c1: "20512704515447428000231780480269601301199455727786440182564501953727451428201",
    scalarPubKey0: "16551728319327439168317300279856018011041840639624811157340627997761414256717",
    scalarPubKey1: "21676599011130813512183056032443407887594316023951962444664078281579755267315"
  },
  issuers: [
    {
      name: "CREDORE",
      tokenRegistry: "0x0687bD3B7Df4DaF3A66140293601aF67ed83eC37",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "td.credore.xyz"
      }
    }
  ],
  $template: {
    name: "BOL_CORDELIA",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
