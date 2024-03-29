import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { mumbaiCoO } from "./types";
import stamp from "../boe-main/stampCredore (1).svg";
import moment from "moment";

export const MumbaiCertificateofOriginTemplate: FunctionComponent<TemplateProps<mumbaiCoO>> = ({ document }) => {
  const {
    certificateNumber,
    customer_name,
    customer_contact_email,
    customer_contact_name,
    customer_contact_phone,
    customer_address,
    supplier_name,
    supplier_contact_gst,
    supplier_contact_phone,
    supplier_address,
    supplier_contact_email,
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
    termsOfShippment,
    numOfPackages,
    markOfPackage,
    blockchainName,
    mintTxHash,
    chamber_signer_place,
    supplier_signer_place,
    dimenssionOfPallets,
    totalNetWeight
  } = document;

  const containerStyle = css`
    width: 80%;
    margin: auto;
    padding: 20px;
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
    <>
      <div css={containerStyle}>
        <table
          style={{
            width: "95%",
            borderWidth: "2px 2px 0px 2px",
            borderStyle: "solid",
            borderColor: "black",
            padding: "0px",
            borderSpacing: "0px",
            margin: "auto"
          }}
        >
          <tr css={tableTr}>
            <td css={tableTd} colSpan={3}>
              <p style={{ margin: "-0.5em", fontSize: "0.9em" }}>
                1. Goods consigned from (Exporter's business name, address, country)
              </p>
              <br />
              <br />
              <b>{supplier_name}</b> <br />
              {supplier_address} <br />
              ✉️: {supplier_contact_email}
              <br />
              📞: {supplier_contact_phone}
              <br />
              {/* CIN NO:- U28900MH1999PLC123308 &nbsp;&nbsp;&nbsp;PAN NO. AADCM3035D <br />
              GSTIN NO. : 27AADCM3035D1ZW &nbsp;&nbsp;&nbsp;IEC CODE NO. 3106010142 */}
            </td>
            <td css={tableTd} style={{ textAlign: "center", width: "50%" }} colSpan={3} rowSpan={2}>
              <h2 style={{ textAlign: "center", marginTop: "0" }}>
                <b>CERTIFICATE OF ORIGIN</b>
                <h6 style={{ fontWeight: "lighter", fontSize: "0.5em", marginTop: "0" }}>
                  (NON PREFERENTIAL) <br />
                  (Combined Declaration and Certificate) <br />
                  Issued in India
                </h6>
              </h2>
              <br />
              <br />
              <h3>{certificateNumber}</h3>
              <img src={chamber_logo} alt="Utkal Chamber" style={{ width: "15em" }} />
              <br />
              <b style={{ color: "#5d2621" }}>
                {/* Maharashtra Chamber of Commerce,
                <br />
                Industry and Agriculture */}
                {chamber_name.split(",")[0]}
                <br />
                {chamber_name.split(",")[1]}
              </b>
              <br />
              {/* Oricon House, 6th Floor, 12, K. Dubhash Marg,
              <br /> Fort. Mumbai - 400 001 */}
              {chamber_address}
              <br />
              📞: {chamber_contact_phone} <br />
              📠: {chamber_fax} <br />
              ✉️: {chamber_contact_email} <br />
            </td>
          </tr>

          <tr css={tableTr}>
            <td css={tableTd} colSpan={3}>
              <p style={{ margin: "-0.5em", fontSize: "0.9em" }}>
                2. Goods consigned to (Consignee's name, addess, country)
              </p>
              <br />
              <b>{customer_name} </b>
              <br />
              {/* {customer_contact_name} <br /> */}
              {customer_address} <br />
              ✉️: {customer_contact_email} <br />
              📞: {customer_contact_phone}
            </td>
          </tr>

          <tr css={tableTr}>
            <td css={tableTd} colSpan={3}>
              <p style={{ margin: "-0.5em", fontSize: "0.9em" }}>3. Means of transport and route (as far as known)</p>
              <br />
              <b>
                {meansOfTransport} , Route - {route}
              </b>
              <br />
              Port of Loading - {portOfLading}
              <br />
              Port of discharge - {portOfDischarge}
            </td>
            <td css={tableTd} colSpan={3}>
              <p style={{ margin: "-0.5em", fontSize: "0.9em" }}>4. For Official use</p>
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
          </tr>

          <tr css={tableTr}>
            <td css={tableTr} style={{ padding: "0.5em" }}>
              5. Item No.
            </td>
            <td css={tableTr} style={{ padding: "0.5em" }}>
              6. Mark and numbers of packages
            </td>
            <td css={tableTr} style={{ padding: "0.5em" }}>
              7. Number and kind of packages, description of goods
            </td>
            <td css={tableTr} style={{ padding: "0.5em" }}>
              8. Origin criteria
            </td>
            <td css={tableTr} style={{ padding: "0.5em" }}>
              9. Gross weight or other quantity
            </td>
            <td css={tableTr} style={{ padding: "0.5em" }}>
              10. Number and date of invoices
            </td>
          </tr>

          <tr css={tableTr}>
            <td css={tableTd} style={{ height: "10rem" }}>
              1.
            </td>
            <td css={tableTd} style={{ height: "10rem" }}>
              <b>
                {quantity}&nbsp;,
                {markOfPackage.toUpperCase()}
              </b>
            </td>
            <td css={tableTd} style={{ height: "10rem" }}>
              {kindOfPackage.toUpperCase()}
              <br />
              {descriptionOfGood.toUpperCase()}
              <br />
              <br />
              <b>
                <u>Dimension of Pallet</u>
              </b>
              <br /> {dimenssionOfPallets}
            </td>
            <td css={tableTd} style={{ height: "10rem" }}>
              <b>INDIA</b>
            </td>
            <td css={tableTd} style={{ height: "10rem" }}>
              <b>
                Gross Weight
                <br />
                {totalWeight}
                <br />
                <br />
                Net Weight
                <br /> {totalNetWeight}
              </b>
            </td>
            <td css={tableTd} style={{ height: "10rem" }}>
              <b>Inv No.</b>
              <br />
              {invoiceNumber}
              <br />
              Dt.&nbsp;
              {moment(dateOfIssuance)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}
            </td>
          </tr>
          {/* <tr css={tableTr}>
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
          </tr> */}

          <tr css={tableTr}>
            <td css={tableTd} colSpan={3}>
              <p style={{ marginLeft: "-0.9em", marginTop: "-1em", marginBottom: "2em", fontSize: "0.9em" }}>
                11. Certification
                <br />
                It is hereby certified on the basis of control carried out, that the declaration by the exporter is
                correct.
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
              <b style={{ color: "red" }}>Digitally signed by Chamber :</b> <br />
              <b>Name:</b>&nbsp;{chamber_sign_name} <br />
              <b>Date & Time:</b>&nbsp;
              {moment(chamber_sign_time)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY hh:mm A [IST]")}
              <br />
              <br />
              <div style={{ textAlign: "right", fontSize: "0.7em" }}>
                Authorised Signatory
                <br /> {chamber_name}
                <br /> {chamber_signer_place}
              </div>
            </td>
            <td css={tableTd} colSpan={3}>
              <p style={{ marginLeft: "-0.9em", marginTop: "-1em", marginBottom: "2em", fontSize: "0.9em" }}>
                12. Declaration by the exporter
                <br />
                The undersigned hereby, declares that the above details and statements are correct that all the goods
                were produced and that they comply with the origin requirements for exports to
                <br />
                <br />
                <br />
                <br />
                (Importing Country)
              </p>
              <b style={{ color: "red" }}>Digitally signed by Exporter :</b> <br />
              <b>Name:</b>&nbsp;{supplier_sign_name} <br />
              <b>Place:</b>&nbsp;{supplier_signer_place}
              <br />
              <b>Date & Time:</b>&nbsp;
              {moment(supplier_sign_time)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY hh:mm A [IST]")}
              <br />
              <br />
              <div style={{ fontSize: "0.7em" }}>Place, date and signature of authorised signatory</div>
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
          <tr css={tableTr}>
            <td
              style={{
                padding: "0.5rem",
                borderWidth: "1px 0px 1px 1px",
                borderStyle: "solid",
                borderColor: "black"
                // width: "50%"
              }}
              colSpan={2}
            >
              <b>Blockchain:</b>&nbsp;{blockchainName}
            </td>
            <td
              style={{
                padding: "0.5rem",
                borderWidth: "1px 1px 1px 0px",
                borderStyle: "solid",
                borderColor: "black",
                textAlign: "right"
              }}
              colSpan={2}
            >
              <b>Genesis transaction hash:</b>&nbsp;{mintTxHash}
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={4}>
              <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This document, originally
              existing in electronic or paper or both formats, has been converted to the TradeTrust-recommended format,
              ensuring MLETR compliance. The converted document, in compliance with Section 4(1) of the Electronic Trade
              Document Act, holds the same legal validity. Any unauthorized alterations or modifications are strictly
              prohibited. Verify its integrity and authenticity through approved channels.
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
