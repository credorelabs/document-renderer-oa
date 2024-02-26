import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CertificateOfOrigin } from "./types";
import background from "./cooBackground.svg";
import stamp from "../boe-main/stampCredore (1).svg";
import utkalStamp from "./utkalChamber.png";
import moment from "moment";

export const CertificateofOriginTemplate: FunctionComponent<TemplateProps<CertificateOfOrigin>> = ({ document }) => {
  const {
    certificateNumber,
    customer_name,
    customer_contact_email,
    customer_contact_name,
    customer_contact_phone,
    customer_address,
    supplier_name,
    supplier_contact_email,
    supplier_contact_name,
    supplier_contact_phone,
    supplier_address,
    totalVolume,
    totalWeight,
    termsOfShipment,
    dateOfIssuance,
    portOfDischarge,
    portOfLading,
    vessel_name,
    chamber_address,
    chamber_contact_email,
    chamber_contact_name,
    chamber_contact_phone,
    chamber_name,
    chamber_logo,
    chamber_fax,

    kindOfPackage,
    containerNo,
    descriptionOfGood,

    supplier_email,
    supplier_position,
    supplier_sign_name,
    supplier_sign_time,

    chamber_email,
    chamber_position,
    chamber_sign_name,
    chamber_sign_time,

    manufacturer_address,
    manufacturer_country,
    manufacturer_name,
    meansOfTransport,
    quantity,
    hsCode,
    route,
    invoiceNumber,
    value,
    termsOfShippment
  } = document;

  const containerStyle = css`
    width: 80%;
    margin: auto;
    padding: 20px;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    @media print {
      background-image: url(${background});
    }
  `;

  const tableTr = css`
    border: 1px solid black;
  `;

  const tableTd = css`
    border: 1px solid black;
    padding: 1em;
  `;

  const tableData = css`
    padding: 1em;
  `;

  return (
    <div>
      {/* <div style={{ display: 'flex'}}> */}
      <div>
        <div css={containerStyle}>
          <h2 style={{ textAlign: "center" }}>CERTIFICATE OF ORIGIN</h2>
          <table
            style={{
              width: "95%",
              border: "2px solid black",
              padding: "0px",
              borderSpacing: "0px",
              margin: "auto"
              // marginBottom: "0.2rem"
            }}
          >
            <tr css={tableTr}>
              <td css={tableTd} colSpan={3}>
                <b>Exporter:</b>
                <br />
                {supplier_name} <br />
                {supplier_contact_name} <br />
                {supplier_address} <br />
                ✉️: {supplier_contact_email} <br />
                📞: {supplier_contact_phone}
              </td>
              <td css={tableTd} style={{ textAlign: "center" }} colSpan={2} rowSpan={5}>
                <div style={{ textAlign: "right", marginTop: "-6em", marginBottom: "3em" }}>
                  {" "}
                  <h2>
                    <b>{certificateNumber}</b>
                  </h2>
                </div>
                <img src={chamber_logo} alt="Utkal Chamber" style={{ width: "8em" }} />
                <div>
                  <b>{chamber_name}</b>
                  <br />
                  {chamber_address}
                  <br />
                  📞: {chamber_contact_phone} <br />
                  📠: {chamber_fax} <br />
                  ✉️: {chamber_contact_email} <br />
                </div>
              </td>
            </tr>

            <tr css={tableTr}>
              <td css={tableTd} colSpan={3}>
                <b>Importer:</b>
                <br />
                {customer_name} <br />
                {customer_contact_name} <br />
                {customer_address} <br />
                ✉️: {customer_contact_email} <br />
                📞: {customer_contact_phone}
              </td>
            </tr>

            <tr css={tableTr}>
              <td css={tableTd} colSpan={1}>
                <b>Vessel:</b>
                <br />
                {vessel_name}
              </td>
              <td css={tableTd} colSpan={2}>
                <b>Date of Issuance:</b>
                <br />
                {moment(dateOfIssuance)
                  .utc()
                  .format("DD/MM/YYYY hh:mm A [UTC]")}
              </td>
            </tr>

            <tr css={tableTr}>
              <td css={tableTd} colSpan={2}>
                <b>Port of Discharge:</b>
                <br />
                {portOfDischarge}
              </td>
              <td css={tableTd} colSpan={1}>
                <b>Port of Lading:</b>
                <br />
                {portOfLading}
              </td>
            </tr>
            <tr css={tableTr}>
              <td css={tableTd} colSpan={1}>
                <b>Route:</b>
                <br />
                {route}
              </td>
              <td css={tableTd} colSpan={2}>
                <b>Means of Transport:</b>
                <br />
                {meansOfTransport}
              </td>
            </tr>
            <tr css={tableTr}>
              <th css={tableData}>Container No.</th>
              <th css={tableData}>Kind of Packages</th>
              <th css={tableData}>Description of goods</th>
              <th css={tableData}>Quantity</th>
              <th css={tableData}>Value</th>
            </tr>
            <tr css={tableTr}>
              <td css={tableData}>
                {containerNo}
                <br />
              </td>
              <td css={tableData}>
                {kindOfPackage} <br />
              </td>
              <td css={tableData}>
                {descriptionOfGood} <br />
                INV NO.: {invoiceNumber} <br />
                Dt.: {dateOfIssuance} <br />
                HS Code: {hsCode} <br />
              </td>
              <td style={{ textAlign: "center" }} css={tableData}>
                <b>Volume:</b>
                <br />
                {totalVolume} <br />
                <br />
                <b>GROSS WT:</b>
                <br />
                {totalWeight} <br />
              </td>
              <td style={{ textAlign: "center" }} css={tableData}>
                {value} <br /> <br /> <br />
              </td>
            </tr>

            <tr css={tableTr}>
              <td css={tableTd} colSpan={4}>
                <b>Terms of Shipment:</b>
                <br />
                {termsOfShippment}
              </td>
              <td css={tableTd}>
                <b>Secured by:</b> <br />
                <img src={stamp} alt="credore stamp" style={{ width: "5em", position: "static", right: "0px" }} />
              </td>
            </tr>
          </table>
          <table
            style={{
              width: "95%",
              borderWidth: "0px 2px 2px 2px",
              borderStyle: "solid",
              borderColor: "black",
              padding: "0px",
              borderSpacing: "0px",
              margin: "auto"
            }}
          >
            <tr>
              <td
                colSpan={2}
                style={{ padding: "1rem", borderWidth: "0px 1px 1px 1px", borderStyle: "solid", borderColor: "black" }}
              >
                <b style={{ color: "red" }}>Digitally signed by Chamber :</b> <br />
                <b>Name:</b>&nbsp;{chamber_sign_name} <br />
                <b>Date & Time:</b>&nbsp;
                {moment(chamber_sign_time)
                  .utc()
                  .format("DD/MM/YYYY hh:mm A [UTC]")}
              </td>

              <td colSpan={2} style={{ padding: "1rem" }}>
                <b style={{ color: "red" }}>Digitally signed by Exporter :</b> <br />
                <b>Name:</b>&nbsp;{supplier_sign_name} <br />
                <b>Date & Time:</b>&nbsp;
                {moment(supplier_sign_time)
                  .utc()
                  .format("DD/MM/YYYY hh:mm A [UTC]")}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div style={{width:"84%", margin:"auto", fontSize: "0.8rem", lineHeight: "1rem", marginTop: "2rem", opacity: "0.8", textAlign: "justify" }}>
        <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This document, originally existing
        in electronic or paper or both formats, has been converted to the TradeTrust-recommended format, ensuring MLETR
        compliance. The converted document, in compliance with Section 4(1) of the Electronic Trade Document Act, holds
        the same legal validity. Any unauthorized alterations or modifications are strictly prohibited. Verify its
        integrity and authenticity through approved channels.
      </div>
    </div>
  );
};
