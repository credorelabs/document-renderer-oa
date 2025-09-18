import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { FiataBL, Recipient } from "./types";
import moment from "moment";

export const FiataBLTemplate: FunctionComponent<TemplateProps<FiataBL>> = ({ document }) => {
  const recipient = (document.recipient ?? {}) as Recipient;
  const {
    blockchainName,
    signerDate,
    signerIPAddress,
    signerLocation,
    fBlNo,
    fblFile,
    signerEmail,
    signerName,
    signerPosition,
    signerTimeStamp,
    txHash
  } = recipient;

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

  return (
    <>
      <div css={containerStyle}>
        {fblFile && (
          <div style={{ marginTop: "2rem" }}>
            <span
              style={{
                color: "#1E3A8A", // blue-900
                fontWeight: 600,
                fontSize: "1rem"
              }}
            >
              FIATA Bill of Lading:
            </span>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                marginTop: "0.5rem"
              }}
            >
              <iframe
                src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fblFile)}`}
                width="100%"
                height="600px"
                style={{ border: "none" }}
                title="FBL Document"
              />
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <a href={fblFile} target="_blank" rel="noopener noreferrer" style={{ color: "#2563EB", fontWeight: 500 }}>
                Open in new tab
              </a>
            </div>
          </div>
        )}

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
                    <b>Signer Name:</b>&nbsp;{signerName}
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
                </div>

                <div>
                  <span>
                    <b>Signer Email:</b>&nbsp;{signerEmail}
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
              <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Note :</span>&nbsp; This verifiable document is
              issued on Credore's platform in accordance with the ICC Digital Standards Initiative and TradeTrust
              recommended format. It holds full legal validity, and any unauthorized alterations or modifications are
              strictly prohibited. You can verify the document's integrity, authenticity, and traceability through
              TradeTrust or its authorized verification channels.
            </td>
          </tr>
        </table>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <b>Tx Hash:</b>&nbsp;{txHash}
          </div>
          <div>
            <b>Blockchain:</b>&nbsp;{blockchainName === "xinfin" ? "XDC Network" : blockchainName}
          </div>
        </div>
      </div>
    </>
  );
};
