import { v2 } from "@govtechsg/open-attestation";
import { CargoDocument } from "../transport-document/types";

export const cargoDocumentTemplate: CargoDocument = {
  recipient: {
    shippingInstructionsReference: "baf9bb64-6811-4163-ba19-a3e6dab2dc653",
    shippingInstructionsStatus: "COMPLETED",
    organisationName: "Esmos_Cartel",
    dcsaBolReferenceNumber: "BOL-123456",
    dcsaBlNumber: "BOL-123456",
    transportDocumentTypeCode: "BOL",
    isShippedOnBoardType: true,
    isToOrder: true,
    requestedCarrierCertificates: ["Certificate of Origin"],
    requestedCarrierClauses: "Standard Carrier Clauses",
    displayedNameForPlaceOfReceipt: ["Mumbai Port"],
    displayedNameForPlaceOfDelivery: ["AE RKP - Rak Khor Port"],
    displayedNameForPortOfLoad: ["AE FRP - Free Port"],
    displayedNameForPortOfDischarge: ["Dubai Port"],
    placeOfIssue: {
      UNLocationCode: "IN NSA - Nhava Sheva (Jawaharlal Nehru)"
    },
    invoicePayableAt: {
      UNLocationCode: "AE ARP - Ahmed Bin Rashid Port"
    },

    isCarriersAgentAtDestinationRequired: false,
    documentParties: {
      shipper: {
        partyCompanyName: "Esmos_Cartel"
      },
      consignee: {
        partyCompanyName: "Global Imports Ltd",
      },
      endorsee: {
        partyCompanyName: "TradeCo",
      },
      issueTo: {
        partyCompanyName: "Logistics Inc",
      },
      buyer: {
        partyCompanyName: "BuyerCorp",
      },
      seller: {
        partyCompanyName: "SellerCorp",
      },
      notifyParties: {
        partyCompanyName: "NotifyParty Ltd",
      },
      other: {
        otherParty: {
          partyCompanyName: "OtherParty Co",
        },
        partyFunction: "Agent"
      }
    },
    partyContactDetails: [
      {
        name: "Raj Kishore Patra",
        email: "rpatrasm@gmail.com",
        phone: "07008297411"
      },
      {
        name: "Priyanka Sharma",
        email: "priyanka@gmail.com",
        phone: "+1234567890"
      }
    ],
    isCargoDeliveredInICS2Zone: false,
    exportLicense: {
      isRequired: true,
      reference: "EXP12345",
      issueDate: "2025-01-01",
      expiryDate: "2025-12-31"
    },
    importLicense: {
      isRequired: true,
      reference: "IMP67890",
      issueDate: "2025-02-01",
      expiryDate: "2025-11-30"
    },

    customsReference: {
      type: "Customs Decl",
      countryCode: "IN",
      values: "CUSTVAL001"
    },
    references: {
      type: "Booking Reference No.",
      value: "BOOKING-AS-BOOKING0142"
    },
    consignmentItems: [
      {
        carrierBookingReference: "BOOKING-AS-BOOKING0142",
        commoditySubReference: "COMSUB001",
        shippingMarks: ["SHPMRK001"],
        hSCodes: ["123456"],
        descriptionOfGoods: ["Electronics - Laptops"],
        nationalCommodityCodes: {
          type: "NCC",
          countryCode: "AE",
          values: "NCCVAL001"
        },
        customsReference: {
          type: "Customs Ref",
          countryCode: "IN",
          values: "CUSTREF002"
        },
        references: {
          type: "Invoice Ref",
          value: "INV12345"
        },
        cargoItems: [
          {
            equipmentReference: "dtr",
            houseBillOfLadingReference: "HBL001",
            cargoGrossWeight: {
              value: 1000,
              unit: "KGM"
            },
            cargoGrossVolume: {
              value: 5,
              unit: "MTQ"
            },
            cargoNetWeight: {
              value: 900,
              unit: "KGM"
            },
            cargoNetVolume: {
              value: 4.5,
              unit: "MTQ"
            },
            customsReference: {
              type: "Cargo Customs",
              countryCode: "AE",
              values: "CARGOCUST003"
            },
            nationalCommodityCodes: [{
              type: "NCC",
              countryCode: "IN",
              values: "NCCVAL002"
            }],
            OuterPackaging: {
              packageCode: "BX",
              numberOfPackages: "10",
              description: "Cardboard Boxes",
              woodDeclaration: "No Wood Used"
            }
          }
        ]
      }
    ],

    bookingReferenceNumber: "BOOKING-AS-123",
    bookingStatus: "CONFIRMED",
    originPort: "BE KRI - Kaprijke",
    destinationPort: "AE RKP - Rak Khor Port",
    expectedDepartureDate: "2025-01-15",
    expectedArrivalAtPlaceOfDeliveryStartDate: "2025-01-20",
    shippingLine: "Maersk Line",
    vesselName: "Maersk Explorer",
    containerType: "reefer cargo booking",
    numberOfContainer: "10",
    shipper: "Esmos_Cartel",
    carrier: "Maersk Line",
    transportDocumentReference: "TD122",
    transportDocumentSubReference: "TDSRN1231",
    freightPaymentTermCode: "PRE",
    receivedForShipmentDate: "2025-05-28T00:00:00.000Z",
    plannedArrivalDate: "2025-05-28T00:00:00.000Z",
    plannedDepartureDate: "2025-05-28T00:00:00.000Z",
    preCarriageBy: "VESSEL",
    onCarriageBy: "BARGE",
    universalExportVoyageReference: "UNVYR123",
    carrierLogo: "https://imgs.search.brave.com/ju0dBzUiF5JbCT6wRZGfy61um0D9ntUXUU9GsSggplk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzYxLzIvbmlsZS1j/YXJnby1jYXJyaWVy/LXVnYW5kYS1sb2dv/LXBuZ19zZWVrbG9n/by02MTA1MzgucG5n",
  },
  issuers: [
    {
      id: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller",
      name: "CREDORE",
      revocation: {
        type: v2.RevocationType.None
      },
      identityProof: {
        location: "tt.credore.xyz",
        type: v2.IdentityProofType.DNSDid,
        key: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller"
      }
    }
  ],
  $template: {
    name: "SHIPPING_INSTRUCTION",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
}