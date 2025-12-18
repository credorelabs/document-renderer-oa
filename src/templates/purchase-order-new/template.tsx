import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { NewPurchaseOrder, Recipient } from "./types";
import moment from "moment";

export const NewPurchaseOrderTemplate: FunctionComponent<TemplateProps<NewPurchaseOrder>> = ({ document }) => {
  const recipient = (document.recipient ?? {}) as Recipient;
  const {
    purchaseOrderNo,
    purchaseOrderDate,
    deliveryDate,
    currency,
    modeOfTransport,
    deliveryIncoTerm,
    placeOfDelivery,
    paymentTerms,
    quotationNumber,
    tax = "0",
    totalAmount,
    subTotal = "0",
    othersCost,
    purchasePartiesDetails,
    productDetails,
    blockchainName,
    mintTxHash,
    importerDns,
    signerIPAddress,
    signerLocation,
    poProof,
    signerDate,
    signerDns,
    termsAndConditions,
    companyLogo,
    consignee,
    notifyParty
  } = recipient;

  let taxAm = parseInt(tax, 10);
  let subAmout = parseInt(subTotal, 10);
  const result = (taxAm / 100) * subAmout;

  return (
    <div
      style={{
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#B8B9BD",
        // padding: "20px",
        margin: "auto",
        width: "80%",
        fontFamily: "Arial, sans-serif",
      }}
      role="document"
      aria-label="Purchase Order"
    >
      {/* Header with Logo and QR Code */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "12px" }}>
        {companyLogo && (
          <img
            src={companyLogo}
            alt="Company Logo"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
              backgroundColor: "#ffffff",
            }}
          />
        )}
      </div>

      {/* PO Number and Date */}
      <div
        style={{
          borderWidth: "0",
          borderTopWidth: "2px",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#B8B9BD",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: "14px" }}>
          <span style={{ color: "#656565", fontWeight: 400 }}>PO Number:</span> {purchaseOrderNo}
        </div>
        <div style={{ fontWeight: 600, fontSize: "14px" }}>
          <span style={{ color: "#656565", fontWeight: 400 }}>Date:</span>{" "}
          {moment(purchaseOrderDate).utc().add(5, "hours").add(30, "minutes").format("DD-MM-YYYY")}
        </div>
      </div>

      {/* Supplier and Buyer Sections */}
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", borderWidth: "0", borderRightWidth: "2px", borderStyle: "solid", borderColor: "#B8B9BD" }}>
          <div
            style={{
              backgroundColor: "#E2E8F0",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderStyle: "solid",
              borderColor: "#B8B9BD",
              padding: "12px 20px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            SUPPLIER
          </div>
          <div style={{ padding: "12px 20px", color: "#656565", fontWeight: 600, fontSize: "14px" }}>
            <div>
              <b style={{ color: "#000000" }}>Company Name:</b> {purchasePartiesDetails?.exporterCompanyName || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Contact Name:</b> {purchasePartiesDetails?.exporterName || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Street Address:</b> {purchasePartiesDetails?.exporterAddress || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Country:</b> {purchasePartiesDetails?.exporterCountry || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Pin Code:</b> {purchasePartiesDetails?.exporterPinCode || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Phone Number:</b> {purchasePartiesDetails?.exporterPhoneNumber || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Email:</b> {purchasePartiesDetails?.exporterEmail || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>LEI:</b> {purchasePartiesDetails?.exporterLei || ""}
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              backgroundColor: "#E2E8F0",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderStyle: "solid",
              borderColor: "#B8B9BD",
              padding: "12px 20px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            BUYER
          </div>
          <div style={{ padding: "12px 20px", color: "#656565", fontWeight: 600, fontSize: "14px" }}>
            <div>
              <b style={{ color: "#000000" }}>Company Name:</b> {purchasePartiesDetails?.importerCompanyName || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Contact Name:</b> {purchasePartiesDetails?.importerName || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Street Address:</b> {purchasePartiesDetails?.importerAddress || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Country:</b> {purchasePartiesDetails?.importerCountry || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Pin Code:</b> {purchasePartiesDetails?.importerPinCode || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Phone Number:</b> {purchasePartiesDetails?.importerPhoneNumber || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Email:</b> {purchasePartiesDetails?.importerEmail || ""}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>LEI:</b> {purchasePartiesDetails?.importerLei || ""}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", borderWidth: "0", borderRightWidth: "2px", borderStyle: "solid", borderColor: "#B8B9BD" }}>
          <div
            style={{
              backgroundColor: "#E2E8F0",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderTopWidth: "2px",
              borderStyle: "solid",
              borderColor: "#B8B9BD",
              padding: "12px 20px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            CONSIGNEE
          </div>
          <div style={{ padding: "12px 20px", color: "#656565", fontWeight: 600, fontSize: "14px" }}>
            <div>
              <b style={{ color: "#000000" }}>Company Name:</b> {consignee?.partyCompanyName || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Contact Name:</b> {consignee?.partyName || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Street Address:</b> {consignee?.partyAddress || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Country:</b> {consignee?.partyCountry || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Pin Code:</b> {consignee?.partyPinCode || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Phone Number:</b> {consignee?.partyISD || "- -"}&nbsp;{consignee?.partyPhone}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Email:</b> {consignee?.partyEmail || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>LEI:</b> {consignee?.leiNumber || "- -"}
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div
            style={{
              backgroundColor: "#E2E8F0",
              borderWidth: "0",
              borderBottomWidth: "2px",
              borderTopWidth: "2px",
              borderStyle: "solid",
              borderColor: "#B8B9BD",
              padding: "12px 20px",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            NOTIFY PARTY
          </div>
          <div style={{ padding: "12px 20px", color: "#656565", fontWeight: 600, fontSize: "14px" }}>
            <div>
              <b style={{ color: "#000000" }}>Company Name:</b> {notifyParty?.partyCompanyName || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Contact Name:</b> {notifyParty?.partyName || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Street Address:</b> {notifyParty?.partyAddress || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Country:</b> {notifyParty?.partyCountry || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Pin Code:</b> {notifyParty?.partyPinCode || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Phone Number:</b> {notifyParty?.partyISD || "- -"}&nbsp;{notifyParty?.partyPhone}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>Email:</b> {notifyParty?.partyEmail || "- -"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <b style={{ color: "#000000" }}>LEI:</b> {notifyParty?.leiNumber || "- -"}
            </div>
          </div>
        </div>
      </div>

      {/* Quotation Table */}
      <table
        style={{
          width: "100%",
          borderWidth: "0",
          borderTopWidth: "2px",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#B8B9BD",
          borderSpacing: "0",
        }}
        aria-label="Quotation Details"
      >
        <thead>
          <tr style={{ backgroundColor: "#B8B9BD70" }}>
            <th
              style={{
                borderWidth: "0",
                borderBottomWidth: "2px",
                borderRightWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                width: "25%",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Quotation No.
            </th>
            <th
              style={{
                borderWidth: "0",
                borderBottomWidth: "2px",
                borderRightWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                width: "25%",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Mode Of Transport
            </th>
            <th
              style={{
                borderWidth: "0",
                borderBottomWidth: "2px",
                borderRightWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                width: "25%",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Place of Delivery
            </th>
            <th
              style={{
                borderWidth: "0",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                width: "25%",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Delivery date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                borderWidth: "0",
                // borderBottomWidth: "2px",
                borderRightWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {quotationNumber}
            </td>
            <td
              style={{
                borderWidth: "0",
                // borderBottomWidth: "2px",
                borderRightWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {modeOfTransport}
            </td>
            <td
              style={{
                borderWidth: "0",
                // borderBottomWidth: "2px",
                borderRightWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {placeOfDelivery}
            </td>
            <td
              style={{
                borderWidth: "0",
                // borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {moment(deliveryDate).utc().add(5, "hours").add(30, "minutes").format("DD/MM/YYYY")}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Item Details Table */}
      <table
        style={{
          width: "100%",
          borderWidth: "0",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#B8B9BD",
          borderSpacing: "0",
          // marginTop: "20px",
        }}
        aria-label="Item Details"
      >
        <thead>
          <tr style={{ backgroundColor: "#B8B9BD70", borderWidth: "0", borderBottomWidth: "2px", borderStyle: "solid", borderColor: "#B8B9BD" }}>
            <th
              style={{
                borderWidth: "0",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              HS Code
            </th>
            <th
              style={{
                borderWidth: "0",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Item
            </th>
            <th
              style={{
                borderWidth: "0",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Description of Goods
            </th>
            <th
              style={{
                borderWidth: "0",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Unit Quantity(Kg)
            </th>
            <th
              style={{
                borderWidth: "0",
                borderRightWidth: "2px",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Unit Price(USD)
            </th>
            <th
              style={{
                borderWidth: "0",
                borderBottomWidth: "2px",
                borderStyle: "solid",
                borderColor: "#B8B9BD",
                padding: "16px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Amount(USD)
            </th>
          </tr>
        </thead>
        <tbody>
          {productDetails?.map((item, index) => (
            <tr key={index} style={{ backgroundColor: "#ffffff" }}>
              <td
                style={{
                  borderWidth: "0",
                  borderRightWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#B8B9BD",
                  padding: "16px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {item.hsCode}
              </td>
              <td
                style={{
                  borderWidth: "0",
                  borderRightWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#B8B9BD",
                  padding: "16px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {item.item}
              </td>
              <td
                style={{
                  borderWidth: "0",
                  borderRightWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#B8B9BD",
                  padding: "16px",
                  fontSize: "14px",
                }}
              >
                {item.description}
              </td>
              <td
                style={{
                  borderWidth: "0",
                  borderRightWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#B8B9BD",
                  padding: "16px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {item.quantity}
              </td>
              <td
                style={{
                  borderWidth: "0",
                  borderRightWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "#B8B9BD",
                  padding: "16px",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {parseFloat(item.unitPrice).toFixed(2)}
              </td>
              <td style={{ padding: "16px", textAlign: "center", fontSize: "14px" }}>{item.lineTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Financial Summary */}
      <div style={{ width: "100%", display: "flex", marginTop: "24px", marginBottom: "16px" }}>
        <div style={{ marginLeft: "auto", marginRight: "40px", width: "50%", textAlign: "right", display: "flex" }}>
          <div style={{ width: "50%", fontWeight: 700, fontSize: "14px" }}>
            <div>SUBTOTAL</div>
            <div style={{ marginTop: "16px" }}>TAX</div>
            <div style={{ marginTop: "16px" }}>OTHER</div>
          </div>
          <div style={{ width: "50%", fontSize: "14px" }}>
            <div>
              {currency} {subTotal}
            </div>
            <div style={{ marginTop: "16px" }}>
              ({tax}%) {currency} {result.toFixed(2)}
            </div>
            <div style={{ marginTop: "16px" }}>
              {currency} {othersCost}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderWidth: "0",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#B8B9BD",
          width: "33%",
          marginLeft: "auto",
          marginRight: "32px",
        }}
      ></div>
      <div style={{ width: "100%", display: "flex", marginTop: "16px", marginBottom: "16px" }}>
        <div style={{ marginLeft: "auto", marginRight: "40px", width: "50%", textAlign: "right", display: "flex" }}>
          <div style={{ width: "50%", fontWeight: 700, fontSize: "14px" }}>TOTAL</div>
          <div style={{ width: "50%", fontSize: "14px" }}>
            {currency} {totalAmount}
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div
        style={{
          width: "100%",
          borderWidth: "0",
          borderTopWidth: "2px",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#B8B9BD",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            borderWidth: "0",
            backgroundColor: "#B8B9BD70",
            textAlign: "center",
            padding: "16px",
            fontWeight: 700,
            fontSize: "16px",
            borderBottomWidth: "2px",
            borderStyle: "solid",
            borderColor: "#B8B9BD",
            textTransform: "uppercase",
          }}
        >
          Terms and Conditions
        </div>
        <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
          <div style={{ fontWeight: 600, fontSize: "18px" }}>Terms of Delivery:</div>
          {deliveryIncoTerm ? (
            <div>
              <span style={{ color: "#656565", fontWeight: 600, fontSize: "15px", marginTop: "4px", display: "block" }}>
                {deliveryIncoTerm.code} -{" "}
                {deliveryIncoTerm.description}
              </span>
              <div style={{ fontSize: "14px", marginTop: "4px" }}>
                <div>
                  <span style={{ fontWeight: 600 }}>Delivery Point:</span>{" "}
                  {deliveryIncoTerm.deliveryPoint}
                </div>
                <div>
                  <span style={{ fontWeight: 600 }}>Responsible Buyer:</span>{" "}
                  {deliveryIncoTerm.responsibilityBuyer}
                </div>
                <div>
                  <span style={{ fontWeight: 600 }}>Responsible Seller:</span>{" "}
                  {deliveryIncoTerm.responsibilitySeller}
                </div>
              </div>
            </div>
          ) : (
            <p style={{ color: "#DC2626", fontSize: "14px" }}>No item found for the given ID.</p>
          )}
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderWidth: "0",
            borderTopWidth: "2px",
            borderStyle: "solid",
            borderColor: "#B8B9BD",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: "18px" }}>Terms & Conditions:</div>
          <div
            style={{ marginTop: "4px", fontWeight: 500, color: "#656565", fontSize: "14px" }}
            dangerouslySetInnerHTML={{ __html: termsAndConditions || "" }}
          />
        </div>
      </div>

      {/* Digital Signature and Disclaimer */}
        <div>
          <div
            style={{
              fontSize: "14px",
              borderWidth: "0",
              lineHeight: "20px",
              opacity: "0.8",
              textAlign: "justify",
              borderBottomWidth: "2px",
              borderStyle: "solid",
              borderColor: "#B8B9BD",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              // marginTop: "40px",
            }}
          >
            <span style={{ color: "#DC2626", fontWeight: 600, fontSize: "16px" }}>Digitally Signed By:</span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ marginTop: "4px" }}>
                  <b>Signer Name:</b> {purchasePartiesDetails?.exporterName}
                </span>
                <span style={{ marginTop: "4px" }}>
                  <b>Timestamp:</b>{" "}
                  {moment
                    .utc(signerDate)
                    .add(5, "hours")
                    .add(30, "minutes")
                    .format("DD/MM/YYYY hh:mm A [IST]")}
                </span>
                <span style={{ marginTop: "4px" }}>
                  <b>DNS:</b> did:ethr:{signerDns}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ marginTop: "4px" }}>
                  <b>Signer Email:</b> {purchasePartiesDetails?.exporterEmail}
                </span>
                <span style={{ marginTop: "4px" }}>
                  <b>Signer IP:</b> {signerIPAddress}
                </span>
                <span style={{ marginTop: "4px" }}>
                  <b>Signer Place:</b> {signerLocation}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              borderWidth: "0",
              opacity: "0.8",
              textAlign: "justify",
              borderBottomWidth: "2px",
              borderStyle: "solid",
              borderColor: "#B8B9BD",
              padding: "16px",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "14px" }}>Note:</span> This verifiable document is issued on
            Credore's platform in accordance with the ICC Digital Standards Initiative and TradeTrust recommended format. It
            holds full legal validity, and any unauthorized alterations or modifications are strictly prohibited. You can
            verify the document's integrity, authenticity, and traceability through TradeTrust or its authorized verification
            channels.
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", padding: "8px 16px" }}>
            <div>
              <b>Blockchain:</b>{" "}
              {blockchainName === "xinfin" ? "XDC Network" : blockchainName}
            </div>
          </div>
        </div>
    </div>
  );
};