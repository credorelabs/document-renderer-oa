import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { ProformaInvoice } from "./types";
import moment from "moment";

export const ProformaInvoiceTemplate: FunctionComponent<TemplateProps<ProformaInvoice>> = ({ document }) => {
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
    taxAmount,
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
  } = document;

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 80%;
  `;

  const tableTr = css`
    border: 1px solid black;
  `;

  const tableTd = css`
    border: 1px solid black;
    padding: 1em;
  `;

  let tax = parseInt(taxAmount, 10);
  let subAmout = parseInt(subTotal, 10);
  const result = (tax / 100) * subAmout;
  return (
    <>
      <div css={containerStyle}>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <h2 style={{ marginBottom: "-0.5em" }}>
                <b>{supplier_contact_name}</b>
              </h2>
              <br />
              {supplier_name} <br />
              {supplier_address} <br />
              ✉️:&nbsp;{supplier_contact_email} <br />
              📞:&nbsp;{supplier_contact_phone} <br />
              VAT No.:&nbsp;{supplier_vat_number} <br />
              LEI:&nbsp;{supplier_lei_number}
            </td>
            <td css={tableTd} colSpan={2} >
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              { companyLogo && 
                  <img
                    src={companyLogo}
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
                }
                <div style={{ textAlign: "right", display: "flex", justifyContent: "end", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <h2 style={{ textAlign: "right", marginBottom: "0" }}>
                      <b>INVOICE:</b> &nbsp;<span style={{ fontWeight: 400, fontSize: "1.3rem" }}>{invoice_number}</span>
                    </h2>
                  </div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <h2 style={{ textAlign: "right", marginBottom: "0" }}>
                      <b>INVOICE TYPE:</b> &nbsp;<span style={{ fontWeight: 400, fontSize: "1.3rem" }}>Proforma</span>
                    </h2>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr css={tableTr}>
            <td css={tableTd} rowSpan={4}>
              <b>BILL TO:</b> <br />
              <br />
              {customer_contact_name}, <br />
              {customer_name}, <br />
              {customer_address} <br />
              ✉️:&nbsp;{customer_contact_email} <br />
              📞:&nbsp;{customer_contact_phone} <br />
              VAT No.:&nbsp;{customer_vat_number} <br />
              LEI:&nbsp;{customer_lei_number}
            </td>
            <th css={tableTd} style={{ textAlign: "center" }}>
              {" "}
              <b>ISSUE DATE</b>{" "}
            </th>
            <td css={tableTd} style={{ textAlign: "center" }}>
              {moment(invoice_date)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}
            </td>
          </tr>

          {/* <tr css={tableTr}>
            <td css={tableTd} style={{ textAlign: "center" }}>
              {moment(invoice_date)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}
            </td>
            <td css={tableTd} style={{ textAlign: "center" }}>
              {moment(due_date)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}
            </td>
          </tr> */}
          <tr css={tableTr}>
            <th css={tableTd} style={{ textAlign: "center" }}>
              {" "}
              <b>PAYMENT METHOD</b>{" "}
            </th>

            <td css={tableTd} style={{ textAlign: "center" }}>
              {paymentMethod}
            </td>
          </tr>
          {/* <tr css={tableTr}>
            <td css={tableTd} style={{ textAlign: "center" }}>
              {currency}&nbsp;{amount}
            </td>
            <td css={tableTd} style={{ textAlign: "center" }}>
              {countryOfOrigin}
            </td>
          </tr> */}

          {/* <tr css={tableTr}>
            <td css={tableTd} colSpan={3}>
              <b>BANK DETAILS:</b>&nbsp;
              <br />
              <br />
              <b>Bank Name: </b>
              {bankName} <br />
              <b>Account Name: </b>
              {bankHolderName} <br />
              <b>Account Number: </b>
              {bankAccountNo} <br />
              <b>IFSC: </b>
              {IFSCCode}
            </td>
          </tr> */}
        </table>

        {/* <h3>Certificate Information:</h3>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>CONTRACT NO.:</b>
              <br />
              {contractNumber}
            </td>
            <td css={tableTd}>
              <b>BUYER CONTRACT NO.:</b> <br />
              {buyerContractNumber}
            </td>
            <td css={tableTd}>
              <b>SALES ORDER NO.:</b>
              <br />
              {salesOrderNumber}
            </td>
          </tr>
        </table> */}

        <h3>Transport Details:</h3>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>PORT OF LADING:</b>
              <br />
              {ladingPort}
            </td>
            <td css={tableTd}>
              <b>PORT OF DISCHARGE:</b> <br />
              {dischargePort}
            </td>
            <td css={tableTd}>
              <b>VESSEL NAME:</b>
              <br />
              {vesselName}
            </td>
          </tr>
        </table>

        <h3 style={{ marginTop: "2em" }}>Items Information:</h3>

        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr} style={{ backgroundColor: "#B8E7E2" }}>
            <th css={tableTd}>Product Code</th>
            <th css={tableTd}>Description of Goods</th>
            <th css={tableTd}>Unit Quantity</th>
            <th css={tableTd}>Unit Price(USD)</th>
            <th css={tableTd}>Discount</th>
            <th css={tableTd}>Amount(USD)</th>
          </tr>

          {Invoice_Lines.map((item, index) => (
            <tr css={tableTr} key={index} className="my-0 text-sm bg-white border dark:bg-gray-800">
              <td css={tableTd}>{item.hsCode}</td>
              <td css={tableTd}>{item.description}</td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {item.quantity}
              </td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {parseFloat(item.unit_price).toFixed(2)}
              </td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {item.discount ? item.discount : 0} %
              </td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {item.line_total}
              </td>
            </tr>
          ))}
          {/* </table> */}

          <tr css={tableTr}>
            <td css={tableTd} colSpan={6}>
              <table
                style={{
                  width: "100%",
                  padding: "0px",
                  borderSpacing: "0px",
                  marginTop: "1em",
                  textAlign: "right"
                }}
              >
                <tr>
                  <td style={{ padding: "0.4em" }}>
                    <b>SUBTOTAL</b>
                  </td>
                  <td>{subTotal}</td>
                </tr>
                {/* <tr>
                  <td style={{ padding: "0.4em" }}>
                    <b>TAX</b>
                  </td>
                  <td>
                    ({taxAmount}%)&nbsp;{result}
                  </td>
                </tr> */}
                <tr>
                  <td style={{ padding: "0.4em" }}>
                    <b>Outstanding</b>
                  </td>
                  <td>{outstanding}</td>
                </tr>

                <tr>
                  <td colSpan={2}>
                    <div
                      style={{
                        marginLeft: "auto",
                        marginRight: "0",
                        border: "1px solid black",
                        width: "45%"
                      }}
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.4em" }}>
                    <b>INVOICE TOTAL</b>
                  </td>
                  <td>
                    {currency}&nbsp;{amount}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <div
          style={{
            fontSize: "1rem",
            // lineHeight: "1rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            padding: "0.5rem",
            marginTop: "2rem"
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            IncoTerm Rule:
            <br />
            <div style={{ fontSize: "0.9rem", marginTop: "0.5rem", fontWeight: "normal" }}>
              {incoterm?.code} - {incoterm?.description}
              <br />
              <span style={{ fontWeight: "bold" }}>Delivery Point:</span> {incoterm?.deliveryPoint}
              <br />
              <span style={{ fontWeight: "bold" }}>Responsible Buyer:</span> {incoterm?.responsibilityBuyer}
              <br />
              <span style={{ fontWeight: "bold" }}>Responsible Seller:</span> {incoterm?.responsibilitySeller}
            </div>
          </span>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            borderTop: "0px",
            padding: "0.5rem"
          }}
        >
          <span style={{ fontWeight: "bold" }}>Terms and Conditions: {termsAndConditions}</span>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            borderTop: "0px",
            padding: "0.5rem"
          }}
        >
          <span style={{ fontWeight: "bold" }}>Payment Terms: {paymentTerms}</span>
        </div>

        <table
          style={{
            width: "100%",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "black",
            padding: "0px",
            borderSpacing: "0px",
            marginTop: "2rem"
          }}
        >
          <tr css={tableTr}>
            <td
              style={{
                padding: "0.8rem",
                borderWidth: "1px 0px 1px 1px",
                borderStyle: "solid",
                borderColor: "black"
                // width: "50%"
              }}
              colSpan={4}
            >
              <span
                style={{
                  color: "#DC2626", // Equivalent to text-red-600
                  fontWeight: 600, // Equivalent to font-semibold
                  fontSize: "1rem" // Equivalent to text-medium (adjusted to 1rem),.
                }}
              >
                Digitally Signed By:
              </span>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem"
                }}
              >
                <div>
                  <span>
                    <b>Signer Name:</b>&nbsp;{supplier_contact_name}
                  </span>
                  <br />
                  <span>
                    <b>Timestamp:</b>&nbsp;
                    {moment
                      .utc(signerDate)
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("DD/MM/YYYY hh:mm A [IST]")}
                  </span>
                  <br />
                  <span>
                    <b>DNS:</b>&nbsp; did:ethr:{signerDns}
                  </span>
                </div>

                <div>
                  <span>
                    <b>Signer Email:</b>&nbsp;{supplier_contact_email}
                  </span>
                  <br />
                  <span>
                    <b>Signer IP:</b>&nbsp;{signerIPAddress}
                  </span>
                  <br />
                  <span>
                    <b>Signer Place:</b>&nbsp;
                    {signerLocation}
                  </span>
                </div>
              </div>
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={4}>
              <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span>
              This verifiable document is issued on Credore's platform in accordance with the ICC Digital Standards
              Initiative and TradeTrust recommended format. It holds full legal validity, and any unauthorized
              alterations or modifications are strictly prohibited. You can verify the document's integrity,
              authenticity, and traceability through TradeTrust or its authorized verification channels.
            </td>
          </tr>
          {/* <tr css={tableTr}>
            <td css={tableTd} colSpan={4} style={{ fontSize: "0.8rem" }}>
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Proofs :</span> {invoiceProof?.a0},&nbsp;
              {invoiceProof?.a1},<br />
              &nbsp;{invoiceProof?.b0},&nbsp;{invoiceProof?.b1},<br />
              &nbsp;{invoiceProof?.b2},&nbsp;{invoiceProof?.b3},<br />
              &nbsp;{invoiceProof?.c0},&nbsp;{invoiceProof?.c1}
              <br />
              <br />
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Signer Public Key :</span>{" "}
              {invoiceProof?.scalarPubKey0},&nbsp;{invoiceProof?.scalarPubKey1}
            </td>
          </tr> */}
        </table>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <b>Tx Hash:</b>&nbsp;{mintTxHash}
          </div>
          <div>
            <b>Blockchain:</b>&nbsp;{blockchainName}
          </div>
        </div>
      </div>
    </>
  );
};
