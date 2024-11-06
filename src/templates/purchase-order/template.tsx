import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { PurchaseOrder } from "./types";
import moment from "moment";

export const PurchaseOrderTemplate: FunctionComponent<TemplateProps<PurchaseOrder>> = ({ document }) => {
  const {
    purchaseOrderNo,
    purchaseOrderDate,
    deliveryDate,
    currency,
    modeOfTransport,
    deliveryIncoTerm,
    placeOfDelivery,
    paymentTerms,
    quotationNumber,
    tax = "0",
    totalAmount,
    subTotal = "0",
    othersCost,
    purchasePartiesDetails,
    productDetails,
    blockchainName,
    mintTxHash,
    importerDns,
    signerIPAddress,
    signerLocation,
    poProof
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

  let taxAm = parseInt(tax, 10);
  let subAmout = parseInt(subTotal, 10);
  const result = (taxAm / 100) * subAmout;
  return (
    <>
      <div css={containerStyle}>
        <div style={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
          <div style={{ marginLeft: "auto", textAlign: "right", display: "flex", justifyContent: "end" }}>
            <div>
              <span style={{ fontSize: "2.5rem", fontWeight: "bolder" }}>PURCHASE ORDER</span>
              <br />
              <div style={{ display: "flex", justifyContent: "end" }}>
                <table style={{ padding: "0", borderSpacing: "0px" }}>
                  <tr style={{ padding: "0" }}>
                    <td style={{ paddingRight: "1rem", textAlign: "left" }}>DATE</td>
                    <td style={{ border: "1px solid black", padding: "5px 15px" }}>
                      {moment(purchaseOrderDate)
                        .utc()
                        .add(5, "hours")
                        .add(30, "minutes")
                        .format("DD/MM/YYYY")}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingRight: "1rem", textAlign: "left" }}>PO #</td>

                    <td style={{ border: "1px solid black", borderTop: "0", padding: "5px 15px" }}>
                      {purchaseOrderNo}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", margin: "2rem 0" }}>
          <div style={{ width: "40%" }}>
            <div style={{ backgroundColor: "#B8E7E2", padding: "8px 10px", fontWeight: "bold" }}>IMPORTER</div>
            <div style={{ padding: "10px" }}>
              <b>Company Name:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterCompanyName}
              <br />
              <b>Contact Name:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterName}
              <br />
              <b>Street Address:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterAddress}
              <br />
              <b>Country:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterCountry}
              <br />
              <b>Pin Code:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterPinCode}
              <br />
              <b>Phone Number:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterPhoneNumber}
              <br />
              <b>Email:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterEmail}
              <br />
              <b>LEI:</b>&nbsp;&nbsp;{purchasePartiesDetails?.exporterLei}
              <br />
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <div style={{ backgroundColor: "#B8E7E2", padding: "8px 10px", fontWeight: "bold" }}>EXPORTER</div>
            <div style={{ padding: "10px" }}>
              <b>Company Name:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerCompanyName}
              <br />
              <b>Contact Name:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerName}
              <br />
              <b>Street Address:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerAddress}
              <br />
              <b>Country:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerCountry}
              <br />
              <b>Pin Code:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerPinCode}
              <br />
              <b>Phone Number:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerPhoneNumber}
              <br />
              <b>Email:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerEmail}
              <br />
              <b>LEI:</b>&nbsp;&nbsp;{purchasePartiesDetails?.importerLei}
              <br />
            </div>
          </div>
        </div>
        <table
          style={{
            width: "100%",
            border: "2px solid black",
            marginBottom: "2rem",
            padding: "0px",
            borderSpacing: "0px"
          }}
        >
          <tr css={tableTr} style={{ backgroundColor: "#B8E7E2" }}>
            <th css={tableTd}>Quotation No.</th>
            <th css={tableTd}>Mode Of Transport</th>
            <th css={tableTd}>Place of Delivery</th>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd}>{quotationNumber}</td>
            <td css={tableTd}>{modeOfTransport}</td>
            <td css={tableTd}>{placeOfDelivery}</td>
          </tr>
          <tr css={tableTr} style={{ backgroundColor: "#B8E7E2" }}>
            <th css={tableTd}>Delivery date</th>
            <th css={tableTd}>Terms of Payment</th>
            <th css={tableTd}>Terms of Delivery</th>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd}>
              {moment(deliveryDate)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}
            </td>
            <td css={tableTd}>{paymentTerms}</td>
            <td css={tableTd}>{deliveryIncoTerm}</td>
          </tr>
        </table>

        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr} style={{ backgroundColor: "#B8E7E2" }}>
            <th css={tableTd}>HS Code</th>
            <th css={tableTd}>Item</th>
            <th css={tableTd}>Description of Goods</th>
            <th css={tableTd}>Unit Quantity</th>
            <th css={tableTd}>Unit Price(USD)</th>
            <th css={tableTd}>Amount(USD)</th>
          </tr>

          {productDetails.map((item, index) => (
            <tr css={tableTr} key={index} className="my-0 text-sm bg-white border dark:bg-gray-800">
              <td css={tableTd}>{item.hsCode}</td>
              <td css={tableTd}>{item.item}</td>
              <td css={tableTd}>{item.description}</td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {item.quantity}
              </td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {parseFloat(item.unitPrice).toFixed(2)}
              </td>
              <td style={{ textAlign: "right" }} css={tableTd}>
                {item.lineTotal}
              </td>
            </tr>
          ))}
        </table>

        <div style={{ width: "100%", display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
          <div style={{ marginLeft: "auto", width: "50%", textAlign: "right", display: "flex" }}>
            <div style={{ width: "50%" }}>
              <b>SUBTOTAL</b>
              <br />
              <br />
              <b>TAX</b>
              <br />
              <br />
              <b>OTHER</b>
            </div>
            <div style={{ width: "50%" }}>
              {currency}&nbsp;&nbsp;{subTotal}
              <br />
              <br />({tax})&nbsp;&nbsp;&nbsp;{currency}&nbsp;&nbsp;{result}
              <br />
              <br />
              {currency}&nbsp;&nbsp;{othersCost}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            borderBottom: "2px solid black",
            width: "45%",
            marginLeft: "auto"
          }}
        ></div>
        <div style={{ width: "100%", display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
          <div style={{ marginLeft: "auto", width: "50%", textAlign: "right", display: "flex" }}>
            <div style={{ width: "50%" }}>
              <b>SUBTOTAL</b>
            </div>
            <div style={{ width: "50%" }}>
              {currency}&nbsp;&nbsp;{totalAmount}
            </div>
          </div>
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
          {/* {importerDns ? ( */}
          {purchasePartiesDetails?.importerEmail === "a2zhoneywala@gmail.com" &&
          purchasePartiesDetails?.exporterEmail === "kp_sambhavani@yahoo.com" ? (
            <tr css={tableTr}>
              <td
                style={{
                  padding: "0.5rem",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "black",
                  width: "50%"
                }}
                colSpan={2}
              >
                <b>Importer DNS:</b>&nbsp;&nbsp;did:ethr:{"0x25BB0773137D254d1647De4c2ACc019B9ac05A"}
              </td>
              <td
                style={{
                  padding: "0.5rem",
                  // paddingLeft: "0.5rem",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "black",
                  width: "50%"
                }}
                colSpan={2}
              >
                <b>Exporter DNS:</b>&nbsp;&nbsp;did:ethr:{"0x4d87d254ef8055D16f2c5B60fe3c1876A5Df3334"}
              </td>
            </tr>
          ) : (
            <></>
          )}
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
          {/* <tr css={tableTr}>
            <td css={tableTd} colSpan={4} style={{ fontSize: "0.8rem" }}>
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Proofs :</span> {poProof?.a0},&nbsp;
              {poProof?.a1},<br />
              &nbsp;{poProof?.b0},&nbsp;{poProof?.b1},<br />
              &nbsp;{poProof?.b2},&nbsp;{poProof?.b3},<br />
              &nbsp;{poProof?.c0},&nbsp;{poProof?.c1}
              <br />
              <br />
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Signer Public Key :</span>{" "}
              {poProof?.scalarPubKey0},&nbsp;{poProof?.scalarPubKey1}
            </td>
          </tr> */}
        </table>
      </div>
    </>
  );
};
