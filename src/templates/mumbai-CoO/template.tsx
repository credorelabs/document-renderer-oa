import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { mumbaiCoO } from "./types";
import stamp from "../boe-main/stampCredore (1).svg";
import moment from "moment";
import chamber_logo from "./logo.png";

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
    // chamber_logo,
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
    markOfPackages
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
      {/* <div style={{ display: 'flex'}}> */}
      <div css={containerStyle}>
        {/* <h2 style={{ textAlign: "center" }}>CERTIFICATE OF ORIGIN</h2> */}
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
              <p style={{ margin: "-0.5em", fontSize: "0.9em" }}>
                1. Goods consigned from (Exporter's business name, address, country)
              </p>
              <br />
              <br />
              <b>{supplier_name}</b> <br />
              {supplier_address} <br />
              📞: {supplier_contact_phone}
              <br />
              ✉️: {supplier_contact_email}
              <br />
              GSTIN NO.: {supplier_contact_gst}
            </td>
            <td css={tableTd} style={{ textAlign: "center" }} colSpan={2} rowSpan={3}>
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
              <h3>MACCIA / MBI /{certificateNumber}</h3>
              <img src={chamber_logo} alt="Utkal Chamber" style={{ width: "15em" }} />
              <br />
              <b style={{ color: "#5d2621" }}>
                Maharashtra Chamber of Commerce,
                <br />
                Industry and Agriculture
                {/* {chamber_name} */}
              </b>
              <br />
              Oricon House, 6th Floor, 12, K. Dubhash Marg,
              <br /> Fort. Mumbai - 400 001
              {/* {chamber_address} */}
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
              {customer_name} <br />
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
          </tr>

          <tr>
            <td colSpan={5}>
              <table
                style={{
                  width: "100.2%",
                  border: "0.5px solid black",
                  padding: "-1px",
                  borderSpacing: "0px",
                  margin: "-1px"
                }}
                cellPadding={0}
                css={tableTr}
              >
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
                      {numOfPackages}&nbsp;{markOfPackages}
                    </b>
                  </td>
                  <td css={tableTd} style={{ height: "10rem" }}>
                    DRAWING NUMBER: D-332-1-A7 <br />
                    Material Code:8093883
                    <br />
                    <br />
                    <b>
                      <u>Dimension of Pallet</u>
                    </b>
                    <br /> 1) L 72 CM X W 72 CM X H 88 CM of 01 Pallet
                    <br />
                    Item No.1 in Box 12 Nos (Box No.Identify: 01 to 12)
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
                      <br /> 108.000 Kgs
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
                      .format("DD/MM/YYYY")}
                  </td>
                </tr>
              </table>
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
            <td css={tableTd} colSpan={2}>
              <p style={{ marginLeft: "-0.9em", marginTop: "-1em", marginBottom: "2em", fontSize: "0.9em" }}>
                11. Certification
                <br />
                It is hereby certified on the basis of control carried out, that the declaration by the exporter is
                correct.
              </p>
              <b style={{ color: "red" }}>Digitally signed by Chamber :</b> <br />
              <b>Name:</b>&nbsp;{chamber_sign_name} <br />
              <b>Date & Time:</b>&nbsp;
              {moment(chamber_sign_time)
                .utc()
                .format("DD/MM/YYYY hh:mm A [UTC]")}
            </td>
            <td css={tableTd} colSpan={2}>
              <p style={{ marginLeft: "-0.9em", marginTop: "-1.2em", marginBottom: "2em", fontSize: "0.9em" }}>
                12. Declaration by the exporter
                <br />
                The undersigned hereby, declares that the above details and statements are correct that all the goods
                were produced and that they comply with the origin requirements for exports to
              </p>
              <b style={{ color: "red" }}>Digitally signed by Chamber :</b> <br />
              <b>Name:</b>&nbsp;{chamber_sign_name} <br />
              <b>Date & Time:</b>&nbsp;
              {moment(chamber_sign_time)
                .utc()
                .format("DD/MM/YYYY hh:mm A [UTC]")}
            </td>
            <td css={tableTd}>
              <b>Secured by:</b> <br />
              <img src={stamp} alt="credore stamp" style={{ width: "8em", position: "static", right: "0px" }} />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
