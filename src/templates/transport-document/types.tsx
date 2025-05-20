import { v2 } from "@govtechsg/open-attestation";

export interface CargoDocument extends v2.OpenAttestationDocument {
    recipient?: Recipient;
}

interface Recipient extends v2.Recipient {
    carrierLogo?: string;
    documentPartiesShipper?: DocumentPartiesShipper;
    documentCarrierCarrier?: DocumentCarrierCarrier;
    shippingInstructionsReference?: string;
    organisationName?: string;
    dcsaBolReferenceNumber?: string;
    bookingReferenceNumber?: string;
    bookingStatus?: string;
    originPort?: string;
    destinationPort?: string;
    expectedDepartureDate?: string;
    expectedArrivalAtPlaceOfDeliveryStartDate?: string;
    shippingLine?: string;
    vesselName?: string;
    containerType?: string;
    numberOfContainer?: string;
    shippingInstructionsStatus?: string;
    transportDocumentTypeCode?: string;
    shipper?: string;
    carrier?: string;
    transportDocumentReference?: string;
    transportDocumentSubReference?: string;
    freightPaymentTermCode?: string;
    receivedForShipmentDate?: string;
    plannedArrivalDate?: string;
    plannedDepartureDate?: string;
    preCarriageBy?: string;
    onCarriageBy?: string;
    universalExportVoyageReference?: string;
    isShippedOnBoardType?: boolean;
    isToOrder?: boolean;
    requestedCarrierCertificates?: string[];
    requestedCarrierClauses?: string;
    displayedNameForPlaceOfReceipt?: string[];
    displayedNameForPortOfLoad?: string[];
    displayedNameForPlaceOfDelivery?: string[];
    displayedNameForPortOfDischarge?: string[];
    placeOfIssue?: PlaceOfIssue;
    invoicePayableAt?: InvoicePayableAt;
    utilizedTransportEquipments?: UtilizedTransportEquipment[];
    isCarriersAgentAtDestinationRequired?: boolean;
    documentParties?: DocumentParties;
    partyContactDetails?: PartyContactDetails[];
    isCargoDeliveredInICS2Zone?: boolean;
    exportLicense?: ExportLicense;
    importLicense?: ExportLicense;
    consignmentItems?: ConsignmentItems[];
    isHouseBillOfLadingsIssued?: boolean;
    references?: References;
    customsReference?: CustomsReferences;
    advanceManifestFilings?: AdvanceManifestFilings;
    houseBillofLading?: HouseBillOfLading;
    shipperSignature?: Signature;
    carrierSignature?: Signature;

    dcsaBlNumber?: string;
    carrierClause?: string;
    consignment_containerNumber?: string;
    consignment_containerSizeTypeISO?: string;
    consignment_fullOrEmptyIndicator?: string;
    contractQuoteReferenceNumber?: string;

    date_actualDateOfPlaceOfDelivery?: string;
    date_actualDateOfPlaceOfReceipt?: string;
    date_actualTimeOfArrival?: string;
    date_actualTimeOfDeparture?: string;
    date_estimatedDateOfPlaceOfDelivery?: string;
    date_estimatedDateOfPlaceOfReceipt?: string;
    date_estimatedTimeOfArrival?: string;
    date_estimatedTimeOfDeparture?: string;

    freightForwardersReferenceNumber?: string;

    goods_HSCode?: string;
    goods_IMDG?: string;
    goods_dangerLevel?: string;
    goods_descriptionOfGoods?: string;
    goods_numberOfPackages?: string;
    goods_productIdentifier?: string;
    goods_properShippingTechnicalName?: string;
    goods_typeOfPackagingCEFACT?: string;

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

    party_SCAC?: string;
    party_SMFG?: string;
    party_consignee?: string;
    party_notifyParty?: string;
    party_shipper?: string;

    shippersReferenceNumber?: string;
    terms?: string;

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

    other_name?: string;
    other_contact_name?: string;
    other_address?: string;
    other_lei?: string;
    other_contact_email?: string;
    other_contact_phone?: string;

    blockchainName?: string;
    mintTxHash?: string;
    carrier_signer_place?: string;
    exporter_signer_place?: string;
    shippingBillNo?: string;

    invoiceNumber?: string;
    invoiceDate?: string;
    sealNumber?: string;
    humidity?: string;
    ventilation?: string;
    tokenRegistryAddress?: string;

    primaryLogo?: string;
    secondaryLogo?: string;

    currency?: string;
    consignment_containerReeferType?: string;

    exporterSignIp?: string;
    shippingCompanySignIp?: string;
    containerSize?: string;

    carrierSignTime?: string;
    carrierSignIp?: string;
    txHash?: string;
    numberOfPackages?: string;
    documentType?: string;
    documentReferenceNumber?: string;
    containerNumber?: string;
    temperature?: string;
    grossWeight?: number;
    grossWeightUnit ?: string;
}
interface Signature {
    name?: string;
    timeStamp?: string;
    ip?: string;
    place?: string;
}

interface PlaceOfIssue {
    UNLocationCode?: string;
}

interface InvoicePayableAt {
    UNLocationCode?: string;
}

interface DocumentParties {
    shipper?: {
        partyCompanyName: string;
    };
    consignee?: {
        partyCompanyName: string;
    };
    endorsee?: {
        partyCompanyName: string;
    };
    issueTo?: {
        partyCompanyName: string;
    };
    buyer?: {
        partyCompanyName: string;
    };
    seller?: {
        partyCompanyName: string;
    };
    notifyParties?: {
        partyCompanyName: string;
    };
    other?: {
        otherParty: {
            partyCompanyName: string;
        };
        partyFunction: string;
    };
}

interface PartyContactDetails {
    name?: string;
    email?: string;
    phone?: string;
}

interface References {
    type?: string;
    value?: string;
}

interface CustomsReferences {
    type?: string;
    countryCode?: string;
    values?: string;
}

interface AdvanceManifestFilings {
    manifestTypeCode?: string;
    countryCode?: string;
    selfFilerCode?: string;
    advanceManifestFilingsHouseBLPerformedBy?: string;
    identificationNumber?: string;
}

interface HouseBillOfLading {
    houseBillOfLadingReference?: string;
    isCargoDeliveredInICS2Zone?: boolean;
    isToOrder?: boolean;
    routingOfConsignmentCountries?: string[];
    methodOfPayment?: string;
    placeOfAcceptance?: PlaceOfAcceptance;
    placeOfFinalDelivery?: PlaceOfAcceptance;
    documentParties?: DocumentParties;
    ConsignmentItems?: HblConsignmentItems;
    UtilizedTransportEquipments?: UtilizedTransportEquipment[];
}

interface HblConsignmentItems {
    descriptionOfGoods?: string[];
    nationalCommodityCode?: CustomsReferences;
    customsReferences?: CustomsReferences;
    cargoItems?: CargoItems[];
}

interface PlaceOfAcceptance {
    UNLocationCode: string;
    countryCode: string;
    locationName: string;
}

interface ConsignmentItems {
    carrierBookingReference?: string;
    commoditySubReference?: string;
    shippingMarks?: string[];
    hSCodes?: string[];
    descriptionOfGoods?: string[];
    cargoItems?: CargoItems[];
    customsReference?: CustomsReferences;
    nationalCommodityCodes?: CustomsReferences;
    references?: References;
}

interface CargoItems {
    equipmentReference?: string;
    houseBillOfLadingReference?: string;
    cargoGrossWeight?: TareWeight;
    cargoGrossVolume?: TareWeight;
    cargoNetWeight?: TareWeight;
    cargoNetVolume?: TareWeight;
    customsReference?: CustomsReferences;
    nationalCommodityCodes?: CustomsReferences[];
    OuterPackaging?: OuterPackaging;
    packageCode?: string;
    numberOfPackages?: string;
    shippingMarks?: string;
    UNNumber?: string;
}

interface OuterPackaging {
    packageCode?: string;
    numberOfPackages?: string;
    description?: string;
    woodDeclaration?: string;
}


interface ExportLicense {
    isRequired?: boolean;
    reference?: string;
    issueDate?: string;
    expiryDate?: string;
}

interface UtilizedTransportEquipment {
    shippingMarks?: string;
    emptyIndicatorCode?: string;
    shipperOwnedEquipment?: ShipperOwned;
    carrierOwnedEquipment?: ShipperOwned;
    seals?: Seals[];
    equipmentReference?: string;
    isShipperOwned?: boolean;
    ISOEquipmentCode?: string;
}

interface ShipperOwned {
    isShipperOwned?: boolean;
    equipment?: EquipmentReference;
}

interface Seals {
    number?: string;
    source?: string;
}

interface EquipmentReference {
    equipmentReference?: string;
    ISOEquipmentCode?: string;
    tareWeight?: TareWeight;
}

interface TareWeight {
    value?: number;
    unit?: string;
}

interface DocumentPartiesShipper {
    companyName?: string;
    contactName?: string;
    phoneNumber?: string;
    email?: string;
    lei?: string;
}

interface DocumentCarrierCarrier {
    companyName?: string;
    contactName?: string;
    phoneNumber?: string;
    email?: string;
    lei?: string;
}