import { v2 } from "@govtechsg/open-attestation";

export interface ShippingInstruction extends v2.OpenAttestationDocument {
    recipient?: Recipient;
}

interface Recipient extends v2.Recipient {
    carrierLogo?: string;
    documentPartiesShipper?: DocumentPartiesShipper;
    documentCarrierCarrier?: DocumentCarrierCarrier;
    shippingInstructionsReference?: string;
    organisationName?: string;
    bookingReferenceNumber?: string;
    shippingInstructionsStatus?: string;
    transportDocumentTypeCode?: string;
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