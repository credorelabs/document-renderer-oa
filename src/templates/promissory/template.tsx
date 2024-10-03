import React, { FunctionComponent, useEffect, useState } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { Prom } from "./types";
import moment from "moment";
import background from "./boeBackground.svg";
import seal from "./ttlogo Background Removed.png";
import numberToWords from "number-to-words";
import "../../core/style.css";
export const PromissoryTemplate: FunctionComponent<TemplateProps<Prom>> = ({ document }) => {
  const [amountText, setAmountText] = useState("");
  const {
    pNoteId,
    commitmentDate,
    drawerCompanyName,
    drawerCin,
    drawerEmail,
    drawerJurisdiction,
    draweeCompany,
    draweeEmail,
    draweeCIN,
    draweeJurisdiction,
    currency,
    amount,
    dueDate,
    payableAt,
    draweeAccountNumber,
    draweeBankName,
    draweeSortCode,
    draweeIBAN,
    signerTimeStamp,
    signerName,
    signerPosition,
    signerEmail,
    txHash,
    blockchainName,
    drawerWalletAddress,
    draweeWalletAddress,
    drawer,
    drawee,
    signerIPAddress,
    signerLocation
  } = document;
  const containerStyle = css`
    margin: auto;
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

  useEffect(() => {
    if (amount) {
      let amountToText = numberToWords.toWords(amount);

      setAmountText(
        amountToText
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [amount]);

  function numberWithCommas(amountX: string) {
    return amountX?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div>
        <div css={containerStyle} style={{ width: "90%", fontFamily: "sans-serif" }}>
          <div css={backgroundImage}>
            {/* <div style={{ marginTop: "5rem", marginBottom: "0", display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "row-reverse", marginTop: "-1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "5px",
                    paddingBottom: "0",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={"https://cdn-icons-png.flaticon.com/128/9709/9709605.png"}
                      width={35}
                      height={35}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                    &nbsp;&nbsp;
                    <span style={{ marginLeft: "auto", marginRight: "auto", fontSize: "1.2rem", marginTop: "-1rem" }}>
                      Initiated
                    </span>
                  </div>
                  <div
                    style={{
                      width: "62px",
                      height: "0px",
                      border: "2px solid #A5B4C4",
                      marginLeft: "5px",
                      marginRight: "5px"
                    }}
                  ></div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={"https://cdn-icons-png.flaticon.com/128/9709/9709605.png"}
                      width={35}
                      height={35}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                    &nbsp;&nbsp;
                    <span style={{ marginLeft: "auto", marginRight: "auto", fontSize: "1.2rem", marginTop: "-1rem" }}>
                      Taken Effect
                    </span>
                  </div>
                  <div
                    style={{
                      width: "62px",
                      height: "0px",
                      border: "2px solid #A5B4C4",
                      marginLeft: "5px",
                      marginRight: "5px"
                    }}
                  ></div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={"https://cdn-icons-png.flaticon.com/128/9709/9709605.png"}
                      width={35}
                      height={35}
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                    &nbsp;&nbsp;
                    <span style={{ marginLeft: "auto", marginRight: "auto", fontSize: "1.2rem", marginTop: "-1rem" }}>
                      Endorsed
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            <table style={{ width: "100%", padding: "5px", borderSpacing: "0px", marginTop: "2rem" }}>
              <thead>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "2rem",
                    marginBottom: "0",
                    marginTop: "1rem",
                    marginRight: "0"
                  }}
                >
                  <div style={{ margin: "auto", marginLeft: "0" }}>
                    <th style={{ fontSize: "2.5em" }}>Electronic Promissory Note</th>
                    <div style={{ fontSize: "1.2rem", wordSpacing: "2px" }}>
                      This electronic payment undertaking (ePU) with reference <b>{pNoteId}</b> is timestamped at{" "}
                      <b>
                        {moment
                          .utc(commitmentDate)
                          .add(5, "hours")
                          .add(30, "minutes")
                          .format("DD/MM/YYYY hh:mm A [IST]")}
                      </b>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <img css={sealDesign} src={seal} alt="seal of credore" width="50%" />
                  </div>
                </div>
              </thead>
              <tbody>
                <div
                  style={{
                    margin: "2rem",
                    marginTop: "1rem",
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
                        (Drawer)
                      </td>
                    </tr>
                    <div style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
                      <span style={{ fontSize: "1.3rem" }}>
                        <b>Company Name:</b>
                      </span>
                      &nbsp;&nbsp;{drawerCompanyName}
                      <br />
                      {drawer || drawerCin ?
                        <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                          <b>Company Number/LEI:</b>&nbsp;&nbsp;{drawer ? drawer : drawerCin || ''}
                        </div> : ""}
                      <br />
                      <b>Jurisdiction of Incorporation:</b>&nbsp;&nbsp;{drawerJurisdiction}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Email:</b>&nbsp;&nbsp;{drawerEmail}
                      </div>
                      <br />
                      <b>DNS:</b>&nbsp;&nbsp;did:ethr:{drawerWalletAddress}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Place of Issue:</b>&nbsp;&nbsp;{draweeJurisdiction}
                      </div>
                    </div>
                  </div>
                  <div style={{ margin: "2em", marginTop: "0" }}>
                    <tr>
                      <td style={{ fontWeight: "bold", fontSize: "1.4em" }}> (Drawee)</td>
                    </tr>
                    <div style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
                      <span style={{ fontSize: "1.3rem" }}>
                        <b>Company Name:</b>
                      </span>
                      &nbsp;&nbsp;{draweeCompany}
                      <br />
                      {!drawee?.includes('NAME') || draweeCIN ?
                        <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                          <b>Company Number/LEI:</b>&nbsp;&nbsp;{!drawee?.includes('NAME') ? drawee : draweeCIN || ''}
                        </div>
                        : ""}
                      <br />
                      <b>Jurisdiction of Incorporation:</b>&nbsp;&nbsp;{draweeJurisdiction}
                      <br />
                      <div style={{ marginTop: "0.4rem", marginBottom: "-0.8rem" }}>
                        <b>Email:</b>&nbsp;&nbsp;{draweeEmail}
                      </div>
                      <br />
                      <b>DNS:</b>&nbsp;&nbsp;did:ethr:{draweeWalletAddress}
                    </div>
                  </div>
                </div>
                <div style={{ margin: "2rem", fontSize: "1.1rem", wordSpacing: "0.1rem", marginTop: "1 rem" }}>
                  We promise to pay <b>{draweeCompany}</b> on{" "}
                  <b>
                    {moment
                      .utc(dueDate)
                      .add(5, "hours")
                      .add(30, "minutes")
                      .format("Do MMMM YYYY")}
                  </b>
                  ,the sum of{" "}
                  <b>
                    {currency}&nbsp;{numberWithCommas(amount)}&nbsp; ({currency} {amountText})
                  </b>{" "}
                  for value received. Payment shall be made to the designated bank account of the <b>{draweeCompany}</b>.
                </div>

                {draweeJurisdiction !==
                  "Singapore" &&
                  (drawerJurisdiction !==
                    "Singapore" && (
                      // <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem" }}>
                      //   <div style={{ margin: "auto", marginLeft: "0" }}>
                      //     <span style={{ fontSize: "1.4rem" }}>
                      //       <b>Payment Details:</b>
                      //       <br />
                      //     </span>
                      //     <div style={{ marginTop: "0.5rem" }}></div>
                      //     <b>Payable at:</b>&nbsp;&nbsp; {payableAt}
                      //     <br />
                      //     <div style={{ marginTop: "0.3rem" }}></div>
                      //     <b>Bank Name:</b>&nbsp;&nbsp;{draweeBankName}
                      //     <br />
                      //     <div style={{ marginTop: "0.3rem" }}></div>
                      //     <b>Account Number:</b>&nbsp;&nbsp; {draweeAccountNumber}
                      //     <br />
                      //     <div style={{ marginTop: "0.3rem" }}></div>
                      //     <b>Sort Code:</b>&nbsp;&nbsp;{draweeSortCode}
                      //     <br />
                      //     <div style={{ marginTop: "0.3rem" }}></div>
                      //     <b>SWIFT/IBAN Number:</b>&nbsp;&nbsp;{draweeIBAN}
                      //     <br />
                      //   </div>
                      // </div>
                      ""
                    ))}

                <div style={{ margin: "2rem", fontSize: "0.8rem" }}>
                  <strong>Law and Arbitration</strong>
                  <br />
                  The maker, payee and each indorsee and/or holder of this
                  promissory note agree that:
                  <br />
                  <span className="ml-2">
                    (1) This promissory note shall be subject to Singapore
                    law, without reference to any conflict of law rules
                    thereunder (but not limited to any conflict of law rules
                    under the Bills of Exchange Act 1949) or under any other
                    system of law.
                    <br />
                  </span>
                  <span className="ml-2">
                    (2) Any and all disputes arising out of or in connection with this contract, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by arbitration seated in Singapore in accordance with the Arbitration Rules of the Singapore Chamber of Maritime Arbitration ("SCMA Rules") current at the commencement of the arbitration, which rules are deemed to be incorporated by reference in this clause
                  </span>
                  <br />
                  <strong>
                    No presentation / Notice / Protest Required
                  </strong>
                  <br />
                  The maker, payee and each indorsee and/or holder of this
                  promissory note agree that any and all requirements for
                  presentation, notice and/or protest under any law (whether
                  as a precondition to liability or otherwise) are fully and
                  irrevocably waived and all parties to this promissory note
                  shall be estopped from raising the non-fulfillment of any
                  such alleged requirements for presentation and/or
                  notification to avoid liability for payment hereunder.
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
                          .utc(signerTimeStamp)
                          .add(5, "hours")
                          .add(30, "minutes")
                          .format("DD/MM/YYYY hh:mm A [IST]")}
                      </span>
                    </div>
                  </div>
                </div>
                {draweeJurisdiction === "Singapore" ? (
                  <div style={{ margin: "2rem" }}>
                    <span style={{ fontWeight: "bold" }}>Note :</span> In 2021, the Electronic Transactions Act (ETA) of
                    Singapore was amended to adopt the UNCITRAL Model Law on Electronic Transferable Records (MLETR),
                    allowing for the creation and utilization of electronic transferable documents in international
                    trade. This enhances efficiency and security, with the amended Act effective from 19 March 2021.
                    This electronic trade document issued through the Credore system adhere to the provisions of the
                    Electronic Transactions Act of Singapore. This document is verifiable through the TradeTrust portal
                    at http://tradetrust.io/verify or any other portal that adheres to the established standards and
                    specifications of TradeTrust. Upon discharge, the TradeTrust portal will reflect the status of this
                    document as "Surrendered".
                  </div>
                ) : null}
                <div style={{ margin: "2rem", display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                  <div>
                    <b>Signer IP Address:</b>&nbsp;{signerIPAddress}
                  </div>
                  <div>
                    <b>Signer Location:</b>&nbsp;{signerLocation}
                  </div>
                </div>
                <div style={{ margin: "2rem", display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginTop:"-1rem" }}>
                  <div>
                    <b>Blockchain:</b>&nbsp;{blockchainName === "xinfin" ? "XDC Network" : blockchainName}
                  </div>
                  <div>
                    <b>Genesis Transaction Hash:</b>&nbsp;{txHash?.split("/").pop()}
                  </div>
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
