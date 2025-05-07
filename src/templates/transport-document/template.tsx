import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import moment from "moment";
import { CargoDocument } from "./types";

const PAYMENT_METHODS = [
  { value: "A", label: "Payment in Cash (A)" },
  { value: "B", label: "Payment by Credit Card (B)" },
  { value: "C", label: "Payment by Cheque (C)" },
  { value: "D", label: "Other e.g. Direct Debit to Cash Account (D)" },
  { value: "H", label: "Electronic Funds Transfer (H)" },
  { value: "Y", label: "Account Holder with Carrier (Y)" },
  { value: "Z", label: "Not Pre-paid (Z)" }
];

export const CargoDocumentTemplate: FunctionComponent<TemplateProps<CargoDocument>> = ({ document }) => {
  const recipient = document.recipient ?? {};
  const {
    carrierLogo,
    documentPartiesShipper,
    documentCarrierCarrier,
    shippingInstructionsReference,
    organisationName,
    dcsaBolReferenceNumber,
    bookingReferenceNumber,
    bookingStatus,
    originPort,
    destinationPort,
    expectedDepartureDate,
    expectedArrivalAtPlaceOfDeliveryStartDate,
    shippingLine,
    vesselName,
    universalExportVoyageReference,
    containerType,
    numberOfContainer,
    shippingInstructionsStatus,
    transportDocumentTypeCode,
    shipper,
    carrier,
    isShippedOnBoardType,
    isToOrder,
    transportDocumentReference,
    transportDocumentSubReference,
    freightPaymentTermCode,
    receivedForShipmentDate,
    requestedCarrierCertificates,
    requestedCarrierClauses,
    displayedNameForPlaceOfReceipt,
    displayedNameForPortOfLoad,
    displayedNameForPlaceOfDelivery,
    displayedNameForPortOfDischarge,
    invoicePayableAt,
    placeOfIssue,
    plannedArrivalDate,
    plannedDepartureDate,
    preCarriageBy,
    onCarriageBy,
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
          TRANSPORT DOCUMENT
        </h2>
        <p style={{ margin: "0 0 5px", fontSize: "18px", color: "#111827", fontWeight: "bold" }}>
          {dcsaBolReferenceNumber}
        </p>
      </div>

      {/* Shipper and Carrier */}
      <div
        style={{ ...sectionStyle, display: "flex", justifyContent: "space-between", pageBreakInside: "avoid" as const }}
      >
        <div style={{ width: "48%" }}>
          <div style={sectionHeaderStyle}>BOOKING DETAILS</div>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Reference No:</strong> {bookingReferenceNumber || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Status:</strong> {bookingStatus || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Origin Port:</strong> {originPort || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Destination Port:</strong> {destinationPort || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Departure Date:</strong> {expectedDepartureDate || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Arrival Date:</strong> {expectedArrivalAtPlaceOfDeliveryStartDate || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Shipping Line:</strong> {shippingLine || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Vessel:</strong> {vesselName || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Container Type:</strong> {containerType || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>No. Of Containers:</strong> {numberOfContainer || "--"}
          </p>
        </div>
        <div style={{ width: "48%" }}>
          <div style={sectionHeaderStyle}>SHIPPING INSTRUCTIONS</div>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Reference No:</strong> {shippingInstructionsReference || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Status:</strong> {shippingInstructionsStatus || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Shipper:</strong> {shipper || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Carrier:</strong> {carrier || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Invoice Payable At:</strong> {invoicePayableAt?.UNLocationCode || "--"}
          </p>
          <p style={{ margin: "0 0 4px", fontSize: "12px" }}>
            <strong>Place Of Issue:</strong> {placeOfIssue?.UNLocationCode || "--"}
          </p>
        </div>
      </div>

      {/* General Details */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={4} style={headerStyle}>
                BASIC DOCUMENT INFORMATION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>BL Reference Number:</strong> {dcsaBolReferenceNumber || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Booking Reference Number:</strong> {bookingReferenceNumber || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Shipping Instruction Reference Number:</strong> {shippingInstructionsReference || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Carrier:</strong> {carrier || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td colSpan={2} style={{ ...cellStyle, width: "66.66%" }}>
                <strong>Shipper:</strong> {shipper || "--"}
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
              <th colSpan={4} style={headerStyle}>
                TRANSPORT DOCUMENT DETAILS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Transport Document Reference Number:</strong> {transportDocumentReference || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Transport Document Sub Reference Number:</strong> {transportDocumentSubReference || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Shipped on Board Type:</strong> {isShippedOnBoardType ? "Yes" : "No"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Freight Payment Term:</strong> {freightPaymentTermCode || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>To Order:</strong> {isToOrder ? "Yes" : "No"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Issue Date:</strong> {isToOrder ? "Yes" : "No"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Received for Shipment Date:</strong> {moment(receivedForShipmentDate).utc().format("DD-MM-YYYY")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Party Contact Details */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={3} style={headerStyle}>
                LOCATION AND ISSUANCE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td colSpan={3} style={cellStyle}>
                <strong>Displayed Name for Place of Receipt:</strong> {displayedNameForPlaceOfReceipt || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Displayed Name for Place of Delivery:</strong> {displayedNameForPlaceOfDelivery || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Displayed Name for Port of Load:</strong> {displayedNameForPortOfLoad || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Displayed Name for Port of Discharge:</strong> {displayedNameForPortOfDischarge || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Place of Issue:</strong> {placeOfIssue?.UNLocationCode || "--"}
              </td>
              <td style={{ ...cellStyle, width: "33.33%" }}>
                <strong>Invoice Payable At:</strong> {invoicePayableAt?.UNLocationCode || "--"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Regulatory & Compliance */}
      <div style={sectionStyle}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th colSpan={4} style={headerStyle}>
                TRANSPORT INFORMATION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={tableBorderStyle}>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Planned Arrival Date:</strong> {moment(plannedArrivalDate).utc().format("DD-MM-YYYY")}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Planned Departure Date:</strong> {moment(plannedDepartureDate).utc().format("DD-MM-YYYY")}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Pre Carriage By:</strong> {preCarriageBy || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>On Carriage By:</strong>{" "}
                {onCarriageBy || "--"}
              </td>
            </tr>
            <tr style={tableBorderStyle}>
              <td colSpan={1} style={cellStyle}>
                <strong>Vessel Name:</strong>{" "}
                {vesselName || "--"}
              </td>
              <td style={{ ...cellStyle, width: "25%" }}>
                <strong>Universal Export Voyage Number:</strong> {universalExportVoyageReference || "--"}
              </td>
            </tr>
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
