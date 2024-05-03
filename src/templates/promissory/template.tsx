import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { Prom } from "./types";
import moment from "moment";
import background from "./boeBackground.svg";
import seal from "./stampCredore (1).svg";

export const PromissoryTemplate: FunctionComponent<TemplateProps<Prom>> = ({ document }) => {
  const {
    dlpcId,
    createdAt,
    issuerCompanyName,
    issuerContactNum,
    issuerEmail,
    issuerJurisdiction,
    holderCompanyName,
    holderEmail,
    holderContactNum,
    holderJurisdiction,
    currency,
    amount,
    maturityDate,
    paymentPlace,
    accountNumber,
    bankName,
    bankBranch,
    branchAddress,
    bankIFSC,
    signedAt,
    signerName,
    signerPosition,
    signerEmail
  } = document;
  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const backgroundImage = css`
    background-image: url(${background});
    background-size: cover;
    background-position: center;

    @media print {
      background-image: url(${background});
    }
  `;
  const sealDesign = css`
    opacity: 90%;
  `;

  return (
    <>
      <div css={containerStyle}>
        <div style={{ width: "90%", border: "5px solid black" }}>
          <div css={backgroundImage}>
            <table style={{ width: "100%", padding: "5px", borderSpacing: "0px" }}>
              <thead>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2rem",
                    marginBottom: "1rem",
                    marginTop: "1rem"
                  }}
                >
                  <div style={{ margin: "auto", marginLeft: "0" }}>
                    <th style={{ fontSize: "2.5em" }}>Electronic Promissory Note</th>
                    <div style={{ fontSize: "1.2rem", wordSpacing: "2px" }}>
                      This electronic payment undertaking (ePU) with reference <b>{dlpcId}</b> is timestamped at{" "}
                      <b>
                        {moment
                          .utc(createdAt)
                          .add(5, "hours")
                          .add(30, "minutes")
                          .format("DD/MM/YYYY hh:mm A [IST]")}
                      </b>
                    </div>
                  </div>
                  <div>
                    <img css={sealDesign} src={seal} alt="seal of credore" width="80%" />
                  </div>
                </div>
              </thead>
              <tbody>
                <div
                  style={{
                    margin: "2rem",
                    marginTop: "-1rem",
                    marginBottom: "0rem",
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    letterSpacing: "0.1rem"
                  }}
                >
                  Party Details
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ margin: "2em", marginTop: "0" }}>
                    <tr>
                      <td
                        style={{ fontWeight: "bold", fontSize: "1.4em", borderColor: "#333", borderBottomWidth: "1px" }}
                      >
                        {" "}
                        (Issuer)
                      </td>
                    </tr>
                    <div style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                      <span style={{ fontSize: "1.3rem" }}>
                        <b>Name:</b>
                      </span>
                      &nbsp;&nbsp;{issuerCompanyName}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Number:</b>&nbsp;&nbsp;{issuerContactNum}
                      </div>
                      <br />
                      <b>Jurisdiction:</b>&nbsp;&nbsp;{issuerJurisdiction}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Email:</b>&nbsp;&nbsp;{issuerEmail}
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "2em", marginTop: "0", marginRight: "10rem" }}>
                    <tr>
                      <td style={{ fontWeight: "bold", fontSize: "1.4em" }}> (Holder)</td>
                    </tr>
                    <div style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}>
                      <span style={{ fontSize: "1.3rem" }}>
                        <b>Name:</b>
                      </span>
                      &nbsp;&nbsp;{holderCompanyName}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Number:</b>&nbsp;&nbsp;{holderContactNum}
                      </div>
                      <br />
                      <b>Jurisdiction:</b>&nbsp;&nbsp;{holderJurisdiction}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Email:</b>&nbsp;&nbsp;{holderEmail}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ margin: "2rem", fontSize: "1.3rem", wordSpacing: "0.1rem", marginTop: "1 rem" }}>
                  On the{" "}
                  <b>
                    {moment
                      .utc(maturityDate)
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("DD/MM/YYYY hh:mm A [IST]")}
                  </b>
                  , we promise to pay <b>{bankName}</b> the sum of{" "}
                  <b>
                    {currency}&nbsp;{amount}&nbsp; (Two hundred thousand {currency})
                  </b>{" "}
                  for value received.
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem" }}>
                  <div style={{ margin: "auto", marginLeft: "0" }}>
                    <span style={{ fontSize: "1.4rem" }}>
                      <b>Payable at:</b>
                      <br />
                    </span>
                    <div style={{ marginTop: "0.5rem" }}></div>
                    <b>Account Number:</b>&nbsp;&nbsp; {accountNumber}
                    <br />
                    <div style={{ marginTop: "0.3rem" }}></div>
                    <b>Bank:</b>&nbsp;&nbsp;{bankName}
                    <br />
                    <div style={{ marginTop: "0.3rem" }}></div>
                    <b>Branch:</b>&nbsp;&nbsp;{bankBranch}
                    <br />
                    <div style={{ marginTop: "0.3rem" }}></div>
                    <b>Branch Address:</b>&nbsp;&nbsp;{branchAddress}
                    <br />
                    <div style={{ marginTop: "0.3rem" }}></div>
                    <b>IFSC Code:</b>&nbsp;&nbsp;
                    {bankIFSC}
                    <br />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2rem",
                    fontWeight: "bold",
                    fontSize: "1.1rem"
                  }}
                >
                  Executed by the Issuer and signed by the person who under the laws of its jurisdiction are acting
                  under the authority of the Issuer.
                </div>
                <div style={{ margin: "2rem" }}>
                  <span style={{ fontWeight: "bold", color: "red" }}>Digitally Signed By :</span>
                  <br />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginTop: "0.5rem" }}>
                      <div style={{ marginBottom: "0.3rem" }}>
                        <span style={{ color: "red", fontWeight: "bolder" }}>Name:&nbsp;&nbsp;</span>
                        <span style={{ fontSize: "1.3rem" }}>{signerName}</span>
                      </div>
                      <span style={{ color: "red", fontWeight: "bolder" }}>Position:&nbsp;&nbsp;</span>
                      <span style={{ fontSize: "1.3rem" }}>{signerPosition}</span>
                    </div>
                    <div style={{ marginTop: "0.5rem" }}>
                      <div style={{ marginBottom: "0.3rem" }}>
                        <span style={{ color: "red", fontWeight: "bolder" }}>Email:&nbsp;&nbsp;</span>
                        <span style={{ fontSize: "1.3rem" }}>{signerEmail}</span>
                      </div>
                      <span style={{ color: "red", fontWeight: "bolder" }}>Time Stamp:&nbsp;&nbsp;</span>
                      <span style={{ fontSize: "1.3rem" }}>
                        {moment
                          .utc(signedAt)
                          .add(5, "hours")
                          .add(30, "minutes")
                          .format("DD/MM/YYYY hh:mm A [IST]")}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ margin: "2rem" }}>
                  <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This document, originally
                  existing in electronic or paper or both formats, has been converted to the TradeTrust-recommended
                  format, ensuring MLETR compliance. The converted document, in compliance with Section 4(1) of the
                  Electronic Trade Document Act, holds the same legal validity. Any unauthorized alterations or
                  modifications are strictly prohibited. Verify its integrity and authenticity through approved
                  channels.
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
