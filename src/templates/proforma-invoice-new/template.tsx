import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { NewProformaInvoice, Recipient } from "./types";
import moment from "moment";

export const NewProformaInvoiceTemplate: FunctionComponent<TemplateProps<NewProformaInvoice>> = ({ document }) => {
  const recipient = (document.recipient ?? {}) as Recipient;
  const {
    invoice_number,
    customer_name,
    customer_contact_email,
    customer_contact_name,
    customer_address,
    customer_lei_number,
    supplier_lei_number,
    supplier_name,
    supplier_contact_email,
    supplier_contact_name,
    supplier_contact_phone,
    supplier_address,
    invoice_date,
    due_date,
    amount,
    currency,
    Invoice_Lines,
    customer_vat_number,
    supplier_vat_number,
    countryOfOrigin,
    contractNumber,
    salesOrderNumber,
    ladingPort,
    dischargePort,
    vesselName,
    moisture,
    taxAmount = "0",
    outstanding,
    customer_contact_phone,
    buyerContractNumber,
    quantities,
    bankAccountNo,
    bankName,
    IFSCCode,
    bankHolderName,
    subTotal,
    blockchainName,
    mintTxHash,
    signerIPAddress,
    signerLocation,
    invoiceProof,
    paymentMethod,
    paymentTerms,
    incoterm,
    termsAndConditions,
    signerDate,
    signerDns,
    companyLogo
  } = recipient;

  let tax = parseInt(taxAmount, 10);
  let subAmount = parseInt(subTotal, 10);
  const taxResult = (tax / 100) * subAmount;

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        width: "80%",
        fontFamily: "Arial, sans-serif",
        // borderWidth: "2px",
        // borderStyle: "solid",
        // borderColor: "#000000"
      }}
      role="document"
      aria-label="Proforma Invoice"
    >
      <table
        style={{
          width: "100%",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#000000",
          borderSpacing: "0"
        }}
      >
        <tr>
          <td colSpan={2} style={{ padding: "15px" }}>
            {companyLogo && (
              <img
                src={companyLogo}
                alt="Company Logo"
                style={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                  padding: "15px",
                  backgroundColor: "#ffffff",
                  marginLeft: "10px"
                }}
              />
            )}
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderWidth: "1px",
              borderTopWidth: "2px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              verticalAlign: "top"
            }}
          >
            <h2 style={{ marginBottom: "-8px", fontWeight: 700, fontSize: "20px" }}>{supplier_contact_name || ""}</h2>
            <br />
            <div style={{ fontSize: "14px", lineHeight: "20px" }}>
              {supplier_name || ""} <br />
              {supplier_address || ""} <br />
              ✉️: {supplier_contact_email || ""} <br />
              📞: {supplier_contact_phone || ""} <br />
              VAT No.: {supplier_vat_number || ""} <br />
              LEI No.: {supplier_lei_number || ""}
            </div>
          </td>
          <td
            style={{
              borderWidth: "1px",
              borderTopWidth: "2px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              textAlign: "right",
              verticalAlign: "top"
            }}
            colSpan={2}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                  <h1 style={{ textAlign: "right", margin: "0", fontWeight: 700, fontSize: "20px" }}>INVOICE:</h1>
                  <span style={{ fontWeight: 400, fontSize: "18px" }}># {invoice_number || ""}</span>
                </div>
                <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginTop: "4px" }}>
                  <h1 style={{ textAlign: "right", margin: "0", fontWeight: 700, fontSize: "20px" }}>INVOICE TYPE:</h1>
                  <span style={{ fontWeight: 400, fontSize: "18px" }}>Proforma</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              verticalAlign: "top"
            }}
            rowSpan={4}
          >
            <b style={{ fontWeight: 700, fontSize: "14px" }}>BILL TO:</b>
            <br />
            <br />
            <div style={{ fontSize: "14px", lineHeight: "20px" }}>
              {customer_contact_name || ""}, <br />
              {customer_name || ""} <br />
              {customer_address || ""} <br />
              ✉️: {customer_contact_email || ""} <br />
              📞: {customer_contact_phone || ""} <br />
              VAT No.: {customer_vat_number || ""} <br />
              LEI No.: {customer_lei_number || ""}
            </div>
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              textAlign: "center"
            }}
            colSpan={2}
          >
            <b style={{ fontWeight: 700, fontSize: "14px" }}>ISSUE DATE</b>
            <br />
            {invoice_date ? moment(invoice_date).format("DD/MM/YYYY") : ""}
          </td>
        </tr>
        <tr>
          <td
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              textAlign: "center"
            }}
            colSpan={3}
          >
            <b style={{ fontWeight: 700, fontSize: "14px" }}>PAYMENT METHOD</b>
            <br />
            {paymentMethod || ""}
          </td>
        </tr>
      </table>

      {/* Transport Details */}
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          marginTop: "16px",
          padding: "8px"
        }}
      >
        Transport Details:
      </h3>
      <table
        style={{
          width: "100%",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#000000",
          borderSpacing: "0"
        }}
        aria-label="Transport Details"
      >
        <tr>
          <td
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              width: "33.33%"
            }}
          >
            <b style={{ fontWeight: 700, fontSize: "14px" }}>PORT OF LADING:</b>
            <br />
            {ladingPort || ""}
          </td>
          <td
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              width: "33.33%"
            }}
          >
            <b style={{ fontWeight: 700, fontSize: "14px" }}>PORT OF DISCHARGE:</b>
            <br />
            {dischargePort || ""}
          </td>
          <td
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#000000",
              padding: "16px",
              width: "33.33%"
            }}
          >
            <b style={{ fontWeight: 700, fontSize: "14px" }}>VESSEL NAME:</b>
            <br />
            {vesselName || ""}
          </td>
        </tr>
      </table>

      {/* Item Information */}
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          marginTop: "16px",
          padding: "8px"
        }}
      >
        Item Information:
      </h3>
      <table
        style={{
          width: "100%",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#000000",
          borderSpacing: "0"
        }}
        aria-label="Item Details"
      >
        <thead>
          <tr style={{ backgroundColor: "#cbd5e1" }}>
            <th
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#334155"
              }}
            >
              Product Code
            </th>
            <th
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#334155"
              }}
            >
              Description of Goods
            </th>
            <th
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#334155"
              }}
            >
              Unit Quantity
            </th>
            <th
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#334155"
              }}
            >
              Unit Price(USD)
            </th>
            <th
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#334155"
              }}
            >
              Discount
            </th>
            <th
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
                color: "#334155"
              }}
            >
              Amount(USD)
            </th>
          </tr>
        </thead>
        <tbody>
          {Invoice_Lines?.map((item, index) => (
            <tr key={index} style={{ backgroundColor: "#ffffff" }}>
              <td
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  padding: "12px 24px",
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                {item?.hsCode || ""}
              </td>
              <td
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  padding: "12px 24px",
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                {item.description || ""}
              </td>
              <td
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  padding: "12px 24px",
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                {item.quantity || ""}
              </td>
              <td
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  padding: "12px 24px",
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                {parseFloat(item.unit_price).toFixed(2) || "0.00"}
              </td>
              <td
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  padding: "12px 24px",
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                {item.discount ? `${item.discount}%` : "0%"}
              </td>
              <td
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  padding: "12px 24px",
                  color: "#4B5563",
                  fontWeight: 500,
                  fontSize: "14px"
                }}
              >
                {item.line_total || ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Financial Summary */}
      <table
        style={{
          width: "100%",
          padding: "0",
          borderSpacing: "0",
          marginTop: "16px",
          textAlign: "right"
        }}
      >
        <tr>
          <td style={{ padding: "6px", fontWeight: 700, fontSize: "14px" }}>
            <b>SUBTOTAL</b>
          </td>
          <td style={{ fontSize: "14px" }}>{subTotal || "0"}</td>
        </tr>
        <tr>
          <td style={{ padding: "6px", fontWeight: 700, fontSize: "14px" }}>
            <b>OUTSTANDING</b>
          </td>
          <td style={{ fontSize: "14px" }}>{outstanding || "0"}</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <div
              style={{
                marginLeft: "auto",
                marginRight: "0",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#000000",
                width: "50%"
              }}
            ></div>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "6px", fontWeight: 700, fontSize: "14px" }}>
            <b>INVOICE TOTAL</b>
          </td>
          <td style={{ fontSize: "14px" }}>
            {currency} {Number(amount).toFixed(2) || "0.00"}
          </td>
        </tr>
      </table>

      {/* Incoterm Rule */}
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          textAlign: "justify",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#000000",
          padding: "8px",
          marginTop: "32px"
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "18px" }}>IncoTerm Rule:</span>
        <br />
        {incoterm ? (
          <div style={{ fontSize: "14px", marginTop: "8px" }}>
            <span style={{ color: "#656565", fontWeight: 600, fontSize: "14px" }}>
              {incoterm.code} - {incoterm.description}
            </span>
            <br />
            <div style={{ fontSize: "14px", marginTop: "8px" }}>
              <span style={{ fontWeight: 600 }}>Delivery Point:</span> {incoterm.deliveryPoint || ""}
              <br />
              <span style={{ fontWeight: 600 }}>Responsible Buyer:</span> {incoterm.responsibilityBuyer || ""}
              <br />
              <span style={{ fontWeight: 600 }}>Responsible Seller:</span> {incoterm.responsibilitySeller || ""}
            </div>
          </div>
        ) : (
          <p style={{ color: "#DC2626", fontSize: "14px" }}>No item found for the given ID.</p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          textAlign: "justify",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#000000",
          borderTopWidth: "0",
          padding: "8px"
        }}
      >
        <div>
          <span style={{ fontWeight: 700, fontSize: "18px" }}>Terms and Conditions:</span>
          <div
            style={{ marginTop: "8px", fontWeight: 500, color: "#656565", fontSize: "14px" }}
            dangerouslySetInnerHTML={{ __html: termsAndConditions || "" }}
          />
        </div>
      </div>

      {/* Payment Terms */}
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          textAlign: "justify",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#000000",
          borderTopWidth: "0",
          padding: "8px"
        }}
      >
        <div>
          <span style={{ fontWeight: 700, fontSize: "18px" }}>Payment Terms:</span>
          <div
            style={{ marginTop: "8px", fontWeight: 500, color: "#656565", fontSize: "14px" }}
            dangerouslySetInnerHTML={{ __html: paymentTerms || "" }}
          />
        </div>
      </div>

      {/* Digital Signature and Disclaimer */}
      <div>
        <div
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            textAlign: "justify",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#000000",
            borderBottomWidth: "0",
            padding: "8px",
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <span style={{ color: "#DC2626", fontWeight: 600, fontSize: "16px" }}>Digitally Signed By:</span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>
                <b>Signer Name:</b> {supplier_contact_name || ""}
              </span>
              <br />
              <span>
                <b>Timestamp:</b>{" "}
                {moment
                  .utc(signerDate)
                  .add(5, "hours")
                  .add(30, "minutes")
                  .format("DD/MM/YYYY hh:mm A [IST]")}
              </span>
              <br />
              <span>
                <b>DNS:</b> did:ethr:{signerDns || ""}
              </span>
            </div>
            <div>
              <span>
                <b>Signer Email:</b> {supplier_contact_email || ""}
              </span>
              <br />
              <span>
                <b>Signer IP:</b> {signerIPAddress || ""}
              </span>
              <br />
              <span>
                <b>Signer Place:</b> {signerLocation || ""}
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            textAlign: "justify",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#000000",
            padding: "8px",
            // marginTop: "32px"
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "14px" }}>Note:</span> This verifiable document is issued on
          Credore's platform in accordance with the ICC Digital Standards Initiative and TradeTrust recommended format.
          It holds full legal validity, and any unauthorized alterations or modifications are strictly prohibited. You
          can verify the document's integrity, authenticity, and traceability through TradeTrust or its authorized
          verification channels.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", padding: "8px 0" }}>
          <div>
            <b>Blockchain:</b> {blockchainName || ""}
          </div>
        </div>
      </div>
    </div>
  );
};
