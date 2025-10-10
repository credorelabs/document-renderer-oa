import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { ShippingInstruction } from "./types";
import moment from "moment";

const PAYMENT_METHODS = [
  { value: "A", label: "Payment in Cash (A)" },
  { value: "B", label: "Payment by Credit Card (B)" },
  { value: "C", label: "Payment by Cheque (C)" },
  { value: "D", label: "Other e.g. Direct Debit to Cash Account (D)" },
  { value: "H", label: "Electronic Funds Transfer (H)" },
  { value: "Y", label: "Account Holder with Carrier (Y)" },
  { value: "Z", label: "Not Pre-paid (Z)" }
];

export const ShippingInstructionTemplate: FunctionComponent<TemplateProps<ShippingInstruction>> = ({ document }) => {
  const recipient = document.recipient ?? {};
  const {
    carrierLogo,
    documentPartiesShipper,
    documentPartiesCarrier,
    shippingInstructionsReference,
    organisationName,
    bookingReferenceNumber,
    shippingInstructionsStatus,
    transportDocumentTypeCode,
    isShippedOnBoardType,
    isToOrder,
    requestedCarrierCertificates,
    requestedCarrierClauses,
    displayedNameForPlaceOfReceipt,
    displayedNameForPortOfLoad,
    displayedNameForPlaceOfDelivery,
    displayedNameForPortOfDischarge,
    placeOfIssue,
    invoicePayableAt,
    utilizedTransportEquipments,
    isCarriersAgentAtDestinationRequired,
    documentParties,
    partyContactDetails,
    isCargoDeliveredInICS2Zone,
    exportLicense,
    importLicense,
    consignmentItems,
    isHouseBillOfLadingsIssued,
    references,
    customsReference,
    advanceManifestFilings,
    houseBillofLading,
    carrierSignature
  } = recipient;

  console.log(recipient)
  const tableBorderStyle: React.CSSProperties = { border: "1px solid #e5e7eb" };
  const headerStyle: React.CSSProperties = {
    backgroundColor: "#1f2937",
    color: "#ffffff",
    padding: "8px 12px",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: "13px"
  };
  const cellStyle: React.CSSProperties = {
    padding: "8px 12px",
    verticalAlign: "top",
    fontSize: "12px",
    color: "#374151",
    wordBreak: "break-word",
    maxWidth: "180mm"
  };
  const subHeaderStyle: React.CSSProperties = {
    backgroundColor: "#d1d5db",
    padding: "6px 12px",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: "12px",
    color: "#1f2937"
  };
  const sectionHeaderStyle: React.CSSProperties = {
    backgroundColor: "#e5e7eb",
    padding: "6px 12px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#1f2937",
    marginBottom: "8px"
  };
  const sectionStyle: React.CSSProperties = {
    pageBreakInside: "avoid" as const,
    pageBreakBefore: "auto" as const,
    marginBottom: "20px"
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        padding: "10px",
        width: "210mm",
        margin: "auto",
        border: "2px solid #1f2937",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        display: "block",
        boxSizing: "border-box"
      }}
      id="shipping-instruction-document"
    >
      {/* Header Section */}
      <div style={{ ...sectionStyle, textAlign: "center", pageBreakAfter: "avoid" as const }}>
        <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
          {carrierLogo && (
            <img
              src={carrierLogo}
              alt="Company Logo"
              style={{
                width: "100px",
                height: "auto",
                objectFit: "contain",
                //   border: "1px solid #e5e7eb",
                padding: "4px",
                backgroundColor: "#ffffff"
              }}
            />
          )}
        </div>
        <h2 style={{ margin: "0 0 5px", fontSize: "22px", color: "#111827", fontWeight: "bold" }}>
          SHIPPING INSTRUCTION
        </h2>
      </div>

      {/* Shipper and Carrier */}
      <div
        style={{ ...sectionStyle, display: "flex", justifyContent: "space-between", pageBreakInside: "avoid" as const }}
      >
        <div style={{ width: "48%" }}>
          <div style={sectionHeaderStyle}>SHIPPER</div>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Company Name:</strong> {documentPartiesShipper?.companyName || organisationName || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Contact Name:</strong> {documentPartiesShipper?.contactName || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Phone Number:</strong> {documentPartiesShipper?.phoneNumber || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Email:</strong> {documentPartiesShipper?.email || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>LEI:</strong> {documentPartiesShipper?.lei || "--"}
          </p>
        </div>
        <div style={{ width: "48%" }}>
          <div style={sectionHeaderStyle}>CARRIER</div>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Company Name:</strong> {documentPartiesCarrier?.companyName || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Contact Name:</strong> {documentPartiesCarrier?.contactName || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Phone Number:</strong> {documentPartiesCarrier?.phoneNumber || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Email:</strong> {documentPartiesCarrier?.email || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>LEI:</strong> {documentPartiesCarrier?.lei || "--"}
          </p>
        </div>
      </div>

      {/* Reference Section */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={tableBorderStyle}>
              <th style={{ ...headerStyle, width: "33.33%" }}>Reference No.</th>
              <th style={{ ...headerStyle, width: "33.33%" }}>Booking Reference No.</th>
              <th style={{ ...headerStyle, width: "33.33%" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td style={cellStyle}>{shippingInstructionsReference || "--"}</td>
              <td style={cellStyle}>{bookingReferenceNumber || "--"}</td>
              <td style={cellStyle}>{shippingInstructionsStatus?.replace("_", " ") || "--"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* General Details */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                GENERAL DETAILS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Transport Document Type:</strong> {transportDocumentTypeCode || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Shipped Onboard:</strong> {isShippedOnBoardType ? "Yes" : "No"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>To Order:</strong> {isToOrder ? "Yes" : "No"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                <strong>Carrier Certificates:</strong> {requestedCarrierCertificates?.join(", ") || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Carrier Clauses:</strong> {requestedCarrierClauses || "--"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Location & Transport Equipment */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                LOCATION & TRANSPORT EQUIPMENT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Place of Receipt:</strong> {displayedNameForPlaceOfReceipt?.[0] || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Port of Load:</strong> {displayedNameForPortOfLoad?.[0] || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Place of Issue:</strong> {placeOfIssue?.UNLocationCode || placeOfIssue || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Place of Delivery:</strong> {displayedNameForPlaceOfDelivery?.[0] || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Port of Discharge:</strong> {displayedNameForPortOfDischarge?.[0] || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Invoice Payable At:</strong> {invoicePayableAt?.UNLocationCode || "--"}
              </td>
            </tr>
            {utilizedTransportEquipments?.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Transport Equipment {index + 1}
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Shipping Marks:</strong> {item?.shippingMarks || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Empty Indicator:</strong> {item?.emptyIndicatorCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Shipper Owned:</strong> {item?.shipperOwnedEquipment?.isShipperOwned ? "Yes" : "No"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Equipment Ref:</strong>{" "}
                    {item?.shipperOwnedEquipment?.isShipperOwned
                      ? item?.shipperOwnedEquipment?.equipment?.equipmentReference
                      : item?.carrierOwnedEquipment?.equipment?.equipmentReference || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>ISO Code:</strong> {item?.shipperOwnedEquipment?.equipment?.ISOEquipmentCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Tare Weight:</strong> {item?.shipperOwnedEquipment?.equipment?.tareWeight?.value || "--"}{" "}
                    {item?.shipperOwnedEquipment?.equipment?.tareWeight?.unit || ""}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={3} style={cellStyle}>
                    <strong>Seals:</strong>{" "}
                    {item?.seals?.map((seal, idx) => `${idx + 1}. ${seal?.number} - ${seal?.source}`).join(", ") ||
                      "--"}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Party Contact Details */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                PARTY CONTACT DETAILS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td colSpan={3} style={cellStyle}>
                <strong>Carrier Agent at Destination:</strong> {isCarriersAgentAtDestinationRequired ? "Yes" : "No"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Shipper:</strong> {organisationName || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Consignee:</strong> {documentParties?.consignee?.partyCompanyName || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Endorsee:</strong> {documentParties?.endorsee?.partyCompanyName || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Issue To:</strong> {documentParties?.issueTo?.partyCompanyName || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Buyer:</strong> {documentParties?.buyer?.partyCompanyName || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Seller:</strong> {documentParties?.seller?.partyCompanyName || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Notifying Party:</strong> {documentParties?.notifyParties?.partyCompanyName || "--"}
              </td>
              <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                <strong>Other Party:</strong> {documentParties?.other?.otherParty?.partyCompanyName || "--"} (
                {documentParties?.other?.partyFunction || "--"})
              </td>
            </tr>
            {partyContactDetails?.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Contact {index + 1}
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Name:</strong> {item?.name || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Email:</strong> {item?.email || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Phone:</strong> {item?.phone || "--"}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Regulatory & Compliance */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                REGULATORY & COMPLIANCE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td colSpan={3} style={cellStyle}>
                <strong>ICS2 Zone Delivery:</strong> {isCargoDeliveredInICS2Zone ? "Yes" : "No"}
              </td>
            </tr>
            {exportLicense?.reference && (
              <>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Export License
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Required:</strong> {exportLicense?.isRequired ? "Yes" : "No"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Ref No:</strong> {exportLicense?.reference || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Issue Date:</strong>{" "}
                    {moment(exportLicense?.issueDate)
                      .utc()
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("DD/MM/YYYY") || "--"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={3} style={cellStyle}>
                    <strong>Expiry Date:</strong>{" "}
                    {moment(exportLicense?.expiryDate)
                      .utc()
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("DD/MM/YYYY") || "--"}
                  </td>
                </tr>
              </>
            )}
            {importLicense?.reference && (
              <>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Import License
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Required:</strong> {importLicense?.isRequired ? "Yes" : "No"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Ref No:</strong> {importLicense?.reference || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Issue Date:</strong>{" "}
                    {moment(importLicense?.issueDate)
                      .utc()
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("DD/MM/YYYY") || "--"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={3} style={cellStyle}>
                    <strong>Expiry Date:</strong>{" "}
                    {moment(importLicense?.expiryDate)
                      .utc()
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("DD/MM/YYYY") || "--"}
                  </td>
                </tr>
              </>
            )}
            {advanceManifestFilings?.manifestTypeCode && (
              <>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Advance Manifest Filings
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Manifest Type Code:</strong> {advanceManifestFilings?.manifestTypeCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Country Code:</strong> {advanceManifestFilings?.countryCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Self Filer Code:</strong> {advanceManifestFilings?.selfFilerCode || "--"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                    <strong>House BL Performed By:</strong>{" "}
                    {advanceManifestFilings?.advanceManifestFilingsHouseBLPerformedBy || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>ID Number:</strong> {advanceManifestFilings?.identificationNumber || "--"}
                  </td>
                </tr>
              </>
            )}
            {customsReference?.type && (
              <>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Customs Reference
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Type:</strong> {customsReference?.type || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Country Code:</strong> {customsReference?.countryCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Value:</strong> {customsReference?.values || "--"}
                  </td>
                </tr>
              </>
            )}
            {references?.type && (
              <>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Reference
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={3} style={cellStyle}>
                    <strong>Type:</strong> {references?.type || "--"} <br />
                    <strong>Value:</strong> {references?.value || "--"}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Consignment Items */}
      <div style={{ ...sectionStyle, pageBreakBefore: "always" as const }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                CONSIGNMENT ITEMS
              </th>
            </tr>
          </thead>
          <tbody>
            {consignmentItems?.map((item, index) => (
              <React.Fragment key={index}>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Item {index + 1}
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Booking Ref:</strong> {item?.carrierBookingReference || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Sub Ref:</strong> {item?.commoditySubReference || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Shipping Marks:</strong> {item?.shippingMarks?.[0] || "--"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={3} style={cellStyle}>
                    <strong>Goods:</strong>{" "}
                    {item?.hSCodes
                      ?.map((hsItem, hsIndex) => `${hsIndex + 1}. ${hsItem} - ${item?.descriptionOfGoods?.[hsIndex]}`)
                      .join(", ") || "--"}
                  </td>
                </tr>
                {item?.nationalCommodityCodes && (
                  <>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        National Commodity Code
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Type:</strong> {item?.nationalCommodityCodes?.type || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Country Code:</strong> {item?.nationalCommodityCodes?.countryCode || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Value:</strong> {item?.nationalCommodityCodes?.values || "--"}
                      </td>
                    </tr>
                  </>
                )}
                {item?.customsReference && (
                  <>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        Customs Reference
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Type:</strong> {item?.customsReference?.type || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Country Code:</strong> {item?.customsReference?.countryCode || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Value:</strong> {item?.customsReference?.values || "--"}
                      </td>
                    </tr>
                  </>
                )}
                {item?.references && (
                  <>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        Reference
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td colSpan={3} style={cellStyle}>
                        <strong>Type:</strong> {item?.references?.type || "--"} <br />
                        <strong>Value:</strong> {item?.references?.value || "--"}
                      </td>
                    </tr>
                  </>
                )}
                {item?.cargoItems?.map((cargoItem, cargoIndex) => (
                  <React.Fragment key={cargoIndex}>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        Cargo Item {cargoIndex + 1}
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Equipment Ref:</strong> {cargoItem?.equipmentReference || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>House BL Ref:</strong> {cargoItem?.houseBillOfLadingReference || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Gross Weight:</strong> {cargoItem?.cargoGrossWeight?.value || "--"}{" "}
                        {cargoItem?.cargoGrossWeight?.unit || ""}
                      </td>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Gross Volume:</strong> {cargoItem?.cargoGrossVolume?.value || "--"}{" "}
                        {cargoItem?.cargoGrossVolume?.unit || ""}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Net Weight:</strong> {cargoItem?.cargoNetWeight?.value || "--"}{" "}
                        {cargoItem?.cargoNetWeight?.unit || ""}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Net Volume:</strong> {cargoItem?.cargoNetVolume?.value || "--"}{" "}
                        {cargoItem?.cargoNetVolume?.unit || ""}
                      </td>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Package Code:</strong> {cargoItem?.OuterPackaging?.packageCode || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>No. of Packages:</strong> {cargoItem?.OuterPackaging?.numberOfPackages || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Description:</strong> {cargoItem?.OuterPackaging?.description || "--"}
                      </td>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td colSpan={3} style={cellStyle}>
                        <strong>Wood Declaration:</strong> {cargoItem?.OuterPackaging?.woodDeclaration || "--"}
                      </td>
                    </tr>
                    {cargoItem?.customsReference && (
                      <>
                        <tr>
                          <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                            Customs Reference
                          </th>
                        </tr>
                        <tr style={tableBorderStyle}>
                          <td style={{ ...cellStyle, width: "33.33%" }}>
                            <strong>Type:</strong> {cargoItem?.customsReference?.type || "--"}
                          </td>
                          <td style={{ ...cellStyle, width: "33.33%" }}>
                            <strong>Country Code:</strong> {cargoItem?.customsReference?.countryCode || "--"}
                          </td>
                          <td style={{ ...cellStyle, width: "33.33%" }}>
                            <strong>Value:</strong> {cargoItem?.customsReference?.values || "--"}
                          </td>
                        </tr>
                      </>
                    )}
                    {cargoItem?.nationalCommodityCodes?.length !== 0 && (
                      <>
                        <tr>
                          <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                            National Commodity Code
                          </th>
                        </tr>
                        <tr style={tableBorderStyle}>
                          <td style={{ ...cellStyle, width: "33.33%" }}>
                            <strong>Type:</strong> {cargoItem?.nationalCommodityCodes?.[0]?.type || "--"}
                          </td>
                          <td style={{ ...cellStyle, width: "33.33%" }}>
                            <strong>Country Code:</strong> {cargoItem?.nationalCommodityCodes?.[0]?.countryCode || "--"}
                          </td>
                          <td style={{ ...cellStyle, width: "33.33%" }}>
                            <strong>Value:</strong> {cargoItem?.nationalCommodityCodes?.[0]?.values || "--"}
                          </td>
                        </tr>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* House Bill of Lading */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                HOUSE BILL OF LADING
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td colSpan={3} style={cellStyle}>
                <strong>Issued:</strong> {isHouseBillOfLadingsIssued ? "Yes" : "No"}
              </td>
            </tr>
            {isHouseBillOfLadingsIssued && (
              <>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Basic Details
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Reference:</strong> {houseBillofLading?.houseBillOfLadingReference || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>ICS2 Zone:</strong> {houseBillofLading?.isCargoDeliveredInICS2Zone ? "Yes" : "No"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Payment Method:</strong>{" "}
                    {PAYMENT_METHODS.find(item => item.value === houseBillofLading?.methodOfPayment)?.label || "--"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>To Order:</strong> {houseBillofLading?.isToOrder ? "Yes" : "No"}
                  </td>
                  <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                    <strong>Routing Countries:</strong> {houseBillofLading?.routingOfConsignmentCountries?.[0] || "--"}
                  </td>
                </tr>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Place of Acceptance
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>UN Location Code:</strong> {houseBillofLading?.placeOfAcceptance?.UNLocationCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Country Code:</strong> {houseBillofLading?.placeOfAcceptance?.countryCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Location:</strong> {houseBillofLading?.placeOfAcceptance?.locationName || "--"}
                  </td>
                </tr>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Place of Delivery
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>UN Location Code:</strong> {houseBillofLading?.placeOfFinalDelivery?.UNLocationCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Country Code:</strong> {houseBillofLading?.placeOfFinalDelivery?.countryCode || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Location:</strong> {houseBillofLading?.placeOfFinalDelivery?.locationName || "--"}
                  </td>
                </tr>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Document Parties
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Consignee:</strong>{" "}
                    {houseBillofLading?.documentParties?.consignee?.partyCompanyName || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Buyer:</strong> {houseBillofLading?.documentParties?.buyer?.partyCompanyName || "--"}
                  </td>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Seller:</strong> {houseBillofLading?.documentParties?.seller?.partyCompanyName || "--"}
                  </td>
                </tr>
                <tr style={tableBorderStyle}>
                  <td style={{ ...cellStyle, width: "33.33%" }}>
                    <strong>Notifying Party:</strong>{" "}
                    {houseBillofLading?.documentParties?.notifyParties?.partyCompanyName || "--"}
                  </td>
                  <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                    <strong>Other Party:</strong>{" "}
                    {houseBillofLading?.documentParties?.other?.otherParty?.partyCompanyName || "--"} (
                    {houseBillofLading?.documentParties?.other?.partyFunction || "--"})
                  </td>
                </tr>
                <tr>
                  <th colSpan={3} style={subHeaderStyle}>
                    Consignment Items
                  </th>
                </tr>
                <tr style={tableBorderStyle}>
                  <td colSpan={3} style={cellStyle}>
                    <strong>Description of Goods:</strong>{" "}
                    {houseBillofLading?.ConsignmentItems?.descriptionOfGoods || "--"}
                  </td>
                </tr>
                {houseBillofLading?.ConsignmentItems?.nationalCommodityCode && (
                  <>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        National Commodity Code
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Type:</strong>{" "}
                        {houseBillofLading?.ConsignmentItems?.nationalCommodityCode?.type || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Country Code:</strong>{" "}
                        {houseBillofLading?.ConsignmentItems?.nationalCommodityCode?.countryCode || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Value:</strong>{" "}
                        {houseBillofLading?.ConsignmentItems?.nationalCommodityCode?.values || "--"}
                      </td>
                    </tr>
                  </>
                )}
                {houseBillofLading?.ConsignmentItems?.cargoItems?.map((cargoItem, cargoIndex) => (
                  <React.Fragment key={cargoIndex}>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        Cargo Item {cargoIndex + 1}
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Equipment Ref:</strong> {cargoItem?.equipmentReference || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Gross Weight:</strong> {cargoItem?.cargoGrossWeight?.value || "--"}{" "}
                        {cargoItem?.cargoGrossWeight?.unit || ""}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Package Code:</strong> {cargoItem?.packageCode || "--"}
                      </td>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>No. of Packages:</strong> {cargoItem?.numberOfPackages || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Shipping Marks:</strong> {cargoItem?.shippingMarks || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>UN Number:</strong> {cargoItem?.UNNumber || "--"}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                {houseBillofLading?.ConsignmentItems?.customsReferences && (
                  <>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        Customs Reference
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Type:</strong> {houseBillofLading?.ConsignmentItems?.customsReferences?.type || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Country Code:</strong>{" "}
                        {houseBillofLading?.ConsignmentItems?.customsReferences?.countryCode || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Value:</strong> {houseBillofLading?.ConsignmentItems?.customsReferences?.values || "--"}
                      </td>
                    </tr>
                  </>
                )}
                {houseBillofLading?.UtilizedTransportEquipments?.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <th colSpan={3} style={{ ...subHeaderStyle, backgroundColor: "#e5e7eb" }}>
                        Utilized Transport Equipment {index + 1}
                      </th>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Equipment Ref:</strong> {item?.equipmentReference || "--"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Shipper Owned:</strong> {item?.isShipperOwned ? "Yes" : "No"}
                      </td>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>Empty Indicator:</strong> {item?.emptyIndicatorCode || "--"}
                      </td>
                    </tr>
                    <tr style={tableBorderStyle}>
                      <td style={{ ...cellStyle, width: "33.33%" }}>
                        <strong>ISO Code:</strong> {item?.ISOEquipmentCode || "--"}
                      </td>
                      <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                        <strong>Seals:</strong>{" "}
                        {item?.seals?.map((seal, idx) => `${idx + 1}. ${seal?.number} - ${seal?.source}`).join(", ") ||
                          "--"}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Signatures */}
      <div
        style={{
          ...sectionStyle,
          pageBreakBefore: "auto" as const,
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #e5e7eb",
          padding: "10px"
        }}
      >
        <div style={{ width: "100%", textAlign: "left", borderRight: "1px solid #e5e7eb" }}>
          <h3 style={{ margin: "0 0 10px", fontSize: "14px", color: "red", fontWeight: "bold" }}>
            Accepted & Digitally Signed By Carrier
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: "0", fontSize: "12px" }}>
                <strong>Name:</strong> {carrierSignature?.name || "--"}
              </p>
              <p style={{ margin: "0", fontSize: "12px" }}>
                <strong>Timestamp:</strong>{" "}
                {carrierSignature?.timeStamp ? moment(carrierSignature?.timeStamp).format("DD/MM/YYYY") : "--"}
              </p>
            </div>
            <div>
              <p style={{ margin: "0", fontSize: "12px" }}>
                <strong>Signer IP:</strong> {carrierSignature?.ip || "--"}
              </p>
              <p style={{ margin: "0", fontSize: "12px" }}>
                <strong>Signer Place:</strong> {carrierSignature?.place || "--"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
