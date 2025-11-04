import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { PDFVerifiable, Recipient } from "./types";
import moment from "moment";

export const PDFVerifiableTemplate: FunctionComponent<TemplateProps<PDFVerifiable>> = ({ document }) => {
  const recipient = (document.recipient ?? {}) as Recipient;
  const {
    fileUrl,
    signerIP,
    signerName,
    signerLocation,
    signerEmail,
    signerDate
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
        {fileUrl && (
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                marginTop: "0.5rem"
              }}
            >
              <iframe
                src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(fileUrl)}`}
                width="100%"
                height="600px"
                style={{ border: "none" }}
                title="FBL Document"
              />
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#2563EB", fontWeight: 500 }}>
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
                    <b>Signer IP:</b>&nbsp;{signerIP}
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
                    <b>Signer Place:</b>&nbsp;
                    {signerLocation}
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
