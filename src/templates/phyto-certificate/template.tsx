import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { Phyto } from "./types";
import background from "./bgImg.svg";
import logo from "./logo.png";
import moment from "moment";

export const PhytoTemplate: FunctionComponent<TemplateProps<Phyto>> = ({ document }) => {
  const {
    regNumber,
    invoiceNumber,
    invoiceDate,
    fromOrganisation,
    toOrganisation,
    expoterName,
    expoterAddress,
    expoterPinCode,
    consigneeName,
    consigneeAddress,
    consigneePinCode,
    meansOfConveyance,
    placeOfOrigin,
    pointOfEntry,
    distinguishMark,
    numberOfPackages,
    descriptionOfPackages,
    nameOfProduce,
    quantity,
    treatmentDate,
    treatment,
    chemical,
    duration,
    temperature,
    concentration,
    additionalInformation,
    issueDate,
    placeOfIssue,
    codeNo,
    signedBy,
    designation,
    blockchainName,
    mintTxHash
  } = document;

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 80%;
  `;

  const backgroundImage = css`
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${background});
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

  return (
    <>
      <div css={containerStyle}>
        <div css={backgroundImage}>
          <div style={{ width: "100%", border: "2px solid black" }}>
            <table style={{ width: "100%", padding: "0px", borderSpacing: "0px" }}>
              <tr css={tableTr}>
                <td css={tableTd}>
                  <img src={logo} alt="logo" style={{ width: "4em" }} />
                </td>
                <td css={tableTd} style={{ textAlign: "center", fontWeight: "bolder" }}>
                  <b>
                    GOVERNMENT OF INDIA
                    <br />
                    MINISTRY OF AGRICULTURE & FARMERS WELFARE
                    <br />
                    DEPARTMENT OF AGRICULTURE COOPERATION & FARMERS WELFARE
                    <br />
                    DIRECTORATE OF PLANT PROTECTION, QUARANTINE & STORAGE
                    <br />
                    PHYTOSANITARY CERTIFICATE
                  </b>
                </td>
                <td css={tableTd}>
                  Reg. Number
                  <br />
                  {regNumber}
                </td>
              </tr>
            </table>
            <table style={{ width: "100%", padding: "0px", borderSpacing: "0px" }}>
              <tr css={tableTr}>
                <td css={tableTd} style={{ textAlign: "center", fontWeight: "bolder" }} colSpan={2}>
                  <b>
                    FROM:&nbsp;PLANT PROTECTION ORGANTSATTON OF
                    <br />
                    {fromOrganisation}
                  </b>
                </td>
                <td css={tableTd} style={{ textAlign: "center", fontWeight: "bolder" }} colSpan={2}>
                  TO:&nbsp;THE PLANT PROTECTION ORGANTSATTON OF
                  <br />
                  {toOrganisation}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={4} style={{ textAlign: "center", fontWeight: "bolder" }}>
                  DESCRIPTION OF CONSIGNMENT
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b style={{ fontSize: "1.1em" }}>Name & address of exporter:</b>
                  <br />
                  {expoterName},<br />
                  {expoterAddress},<br />
                  {expoterPinCode}
                </td>
                <td css={tableTd} colSpan={2}>
                  <b style={{ fontSize: "1.1em" }}>Declared name & address of consignee:</b>
                  <br />
                  {consigneeName},<br />
                  {consigneeAddress},<br />
                  {consigneePinCode}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b>Declared means of conveyance:</b>
                  <br />
                  {meansOfConveyance}
                </td>
                <td css={tableTd}>
                  <b>Place of origin:</b>
                  <br />
                  {placeOfOrigin}
                </td>
                <td css={tableTd}>
                  <b>Declared point of entry:</b>
                  <br />
                  {pointOfEntry}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b>Distinguishing marks:</b>
                  <br />
                  {distinguishMark}
                </td>
                <td css={tableTd} colSpan={2}>
                  <b>Number & description of packages:</b>
                  <br />
                  {numberOfPackages}&nbsp;{descriptionOfPackages}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b>Name of produce / Botanical name of plants:</b>
                  <br />
                  {nameOfProduce}
                </td>
                <td css={tableTd} colSpan={2}>
                  <b>Quantity declared:</b>
                  <br />
                  {quantity}&nbsp;KG
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={4}>
                  This is to certify that the plants or plant products described above have been inspected according to
                  appropriate procedures and are considered to be free from quarantine posts and practically free from
                  the injurious pests and that they are considered to confirm to the current phytosanitary regulations
                  at the importing country.
                  <br />
                  <br />
                  <br />
                  <div style={{ textAlign: "center", margin: "auto" }}>
                    <b>DISINFESTATION AND/OR DISINFECTION TREATMENT</b>
                  </div>
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b>Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                  {treatmentDate}
                </td>
                <td css={tableTd} colSpan={2}>
                  <b>Treatment:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{treatment}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b> Chemical:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                  {chemical}
                </td>
                <td css={tableTd} colSpan={2}>
                  <b>Duration & Temperature:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{duration}&nbsp;&nbsp;&nbsp;
                  {temperature}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={2}>
                  <b> Concentration:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                  {concentration}
                </td>
                <td css={tableTd} colSpan={2}>
                  <b>Additional information:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{additionalInformation}
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={4}>
                  <b>Additional declaration:</b>
                  <br />
                  <br />
                  Invoice No.: &nbsp;&nbsp;&nbsp;{invoiceNumber}
                  <br />
                  Invoice Date: &nbsp;&nbsp;&nbsp;
                  {moment(invoiceDate)
                    .utc()
                    .add(5, "hours")
                    .add(30, "minutes")
                    .format("DD/MM/YYYY")}
                  {signedBy==='_________________________________'? <></>:<>&nbsp;-&nbsp; "The consignment inspected and found free from all army worm (Spodoptera frugiperda) on
                  the basis of visual inspection".</>}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <b>Date:</b>&nbsp;&nbsp;&nbsp;&nbsp;
                      {moment(issueDate)
                        .utc()
                        .add(5, "hours")
                        .add(30, "minutes")
                        .format("DD/MM/YYYY")}
                      <br />
                      <br />
                      <b>Place of Issue:</b>&nbsp;&nbsp;&nbsp;&nbsp;{placeOfIssue}
                      <br />
                      <b>Code No.:</b>&nbsp;&nbsp;&nbsp;&nbsp;{codeNo}
                    </div>
                    <div style={{ marginRight: "12em" }}>
                      <b>Digitally signed by:</b>
                      <br />
                      <br />
                      {signedBy}
                      <br />
                      {designation}
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <table style={{ width: "100%", padding: "0px", borderSpacing: "0px" }}>
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
                  No financial-liability with respect to this certificate shall attach to the Ministry of Agriculture &
                  Farmers Welfare (Department of Agriculture Cooperation & Farmers welfare), Government of India or any
                  authorized officer of state/central government notified by the Ministry of Agriculture & Farmers
                  welfare. htp:/plantquarantineindia.nic.in
                </td>
              </tr>
              <tr css={tableTr}>
                <td css={tableTd} colSpan={4}>
                  <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This document, originally
                  existing in electronic or paper or both formats, has been converted to the TradeTrust-recommended
                  format, ensuring MLETR compliance. The converted document, in compliance with Section 4(1) of the
                  Electronic Trade Document Act, holds the same legal validity. Any unauthorized alterations or
                  modifications are strictly prohibited. Verify its integrity and authenticity through approved
                  channels.
                </td>
              </tr>
            </table>
            {/* <tr css={tableTr}>
                <td
                  style={{
                    padding: "0.5rem",
                    borderWidth: "1px 0px 1px 1px",
                    borderStyle: "solid",
                    borderColor: "black",
                    width: "50%"
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
                    borderColor: "black"
                  }}
                  colSpan={2}
                >
                  <b>Hash:</b>&nbsp;{mintTxHash}
                </td>
              </tr> */}
          </div>
        </div>
      </div>
    </>
  );
};
