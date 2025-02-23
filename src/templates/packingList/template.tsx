import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";
import background from "./boeBackground.svg";
import credoreLogo from "https://www.credore.xyz/assets/images/Logo.png";
import moment from "moment";
import { ShippingDocument } from "./types";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

export const PackingListTemplate: FunctionComponent<TemplateProps<ShippingDocument>> = ({ document }) => {
  const {
    certificateNumber,
    packingNumber,
    totalVolume,
    totalWeight,
    portOfLading,
    portOfDischarge,
    placeOfDelivery,
    sellerReferrence,
    buyerReference,
    temperature,
    noOfPackages,
    weightUnit,
    conveyanceRefNo,
    modeOfTransport,
    transportContractNumber,
    transportServiceProvider,
    seller,
    buyer,
    goods,
    invoice,
    supplier_sign_name,
    supplier_email,
    supplier_sign_time,
    chamber_email,
    chamber_sign_time,
    supplier_name,
    blockchainName,
    mintTxHash,
    exporter_signer_place,
    importer_signer_place,
    signerDate,
    signerDns,
    signerIPAddress,
    signerLocation
  } = document;

  const containerStyle = css`
    width: 80%;
    margin: auto;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
  `;

  const tableTr = css`
    border: 1px solid black;
  `;

  const tableTd = css`
    border: 1px solid black;
    padding: 1em;
  `;
  return (
    <div>
      <div css={containerStyle}>
        <table style={{ width: "100%", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td style={{ width: "50%", textAlign: "center" }} css={tableTd} colSpan={2}>
              <img src="https://www.credore.xyz/assets/images/Logo.png" alt="credore stamp" style={{ width: "10em" }} />
            </td>
            <td css={tableTd} colSpan={2}>
              <h3>
                <b>PACKING LIST FOR {packingNumber}</b>
                <br />
              </h3>
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} rowSpan={3} colSpan={2}>
              <b>Ship From:</b>
              <br />
              {invoice?.supplier_contact_name},<br />
              {invoice?.supplier_name},<br />
              {invoice?.supplier_address},<br />
              {invoice?.supplier_contact_email},<br />
              {invoice?.supplier_contact_phone}
            </td>
            <td css={tableTd} colSpan={2}>
              <b>Invoice Number:</b>&nbsp;{invoice?.invoice_number}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={2}>
              <b>Seller :</b>&nbsp;{seller}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={2}>
              <b>Buyer :</b>&nbsp;{buyer}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} rowSpan={3} colSpan={2}>
              <b>Ship To:</b>
              <br />
              {invoice?.customer_contact_name},<br />
              {invoice?.customer_name},<br />
              {invoice?.customer_address},<br />
              {invoice?.customer_contact_email},<br />
              {invoice?.customer_contact_phone}
            </td>
            <td css={tableTd} colSpan={2}>
              <b>Packing No.:</b>&nbsp;{packingNumber}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={2}>
              <b>Seller Reference No.:</b>&nbsp;{sellerReferrence}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={2}>
              <b>Buyer Reference No.:</b>&nbsp;{buyerReference}
            </td>
          </tr>
        </table>

        <table style={{ width: "100%", padding: "0px", borderSpacing: "0px", marginTop: "3em" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>Port Of Loading:</b>&nbsp;{portOfLading}
            </td>
            <td css={tableTd}>
              <b>Port Of Discharge :</b>&nbsp;{portOfDischarge}
            </td>
            <td css={tableTd}>
              <b>Place Of Delivery :</b>&nbsp;{placeOfDelivery}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>Temperature:</b>&nbsp;{temperature}°c
            </td>
            <td css={tableTd}>
              <b>No Of Packages:</b>&nbsp;{noOfPackages}
            </td>
            <td css={tableTd}>
              <b>Volume:</b>&nbsp;{totalVolume}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>Weight:</b>&nbsp;{totalWeight}
            </td>
            <td css={tableTd}>
              <b>Weight Unit:</b>&nbsp;{weightUnit}
            </td>
            <td css={tableTd}>
              <b>Conveyance Ref No:</b>&nbsp;{conveyanceRefNo}
            </td>
          </tr>
          {/* <tr css={tableTr}>
            <td css={tableTd}><b>Consignment:</b>&nbsp;{consignment}</td>
            <td css={tableTd} colSpan={2}>
              <b>Container No:</b>&nbsp;{containerNo}
            </td>
          </tr> */}
        </table>

        <h3 style={{ marginTop: "2em", paddingLeft: "0.5rem" }}>Items Information:</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",

            padding: "0px",
            borderSpacing: "0px"
          }}
        >
          <tr style={{ backgroundColor: "#B8E7E2" }}>
            <th style={{ display: "table-cell", padding: "0.5rem", border: "2px solid black" }}>Name</th>
            <th style={{ display: "table-cell", padding: "0.5rem", border: "2px solid black" }}>Quantity</th>
            <th style={{ display: "table-cell", padding: "0.5rem", border: "2px solid black" }}>Shipping Marks</th>
            <th style={{ display: "table-cell", padding: "0.5rem", border: "2px solid black" }}>HS Code</th>
            <th style={{ display: "table-cell", padding: "0.5rem", border: "2px solid black" }}>Type Of Packing</th>
          </tr>

          {goods?.map((item: any, index: any) => (
            <tr
              key={index}
              style={{
                marginTop: "0",
                marginBottom: "0",
                fontSize: "0.875rem",
                backgroundColor: "#ffffff",
                border: "1.5px solid black"
              }}
            >
              <td
                style={{
                  color: "#4b5563",
                  fontWeight: 500,
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem"
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  color: "#4b5563",
                  fontWeight: 500,
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem"
                }}
              >
                {item.quantity}
              </td>
              <td
                style={{
                  color: "#4b5563",
                  fontWeight: 500,
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem"
                }}
              >
                {item.shippingMarks}
              </td>
              <td
                style={{
                  color: "#4b5563",
                  fontWeight: 500,
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem"
                }}
              >
                {item.hsCode}
              </td>
              <td
                style={{
                  color: "#4b5563",
                  fontWeight: 500,
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "0.75rem",
                  paddingBottom: "0.75rem"
                }}
              >
                {item.typeOfPacking}
              </td>
            </tr>
          ))}
        </table>

        <table
          style={{
            width: "100%",
            borderWidth: "0px 1px 1px 1px",
            borderStyle: "solid",
            borderColor: "black",
            padding: "0px",
            borderSpacing: "0px"
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
                    <b>Signer Name:</b>&nbsp;{invoice?.supplier_contact_name}
                  </span>
                  <br />
                  <span>
                    <b>Timestamp:</b>&nbsp;
                    {moment
                      .utc(supplier_sign_time)
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
                    <b>Signer Email:</b>&nbsp;{invoice?.supplier_contact_email} 
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
                  This verifiable document is issued on Credore's platform in accordance with the ICC Digital 
                  Standards Initiative and TradeTrust recommended format. It holds full legal validity, and any 
                  unauthorized alterations or modifications are strictly prohibited. You can verify the document's 
                  integrity, authenticity, and traceability through TradeTrust or its authorized verification channels.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
