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
    signerLocation,
    consignment,
    containerNo,
    deliveryInstructions,
    packingInstructions,
    incoterm,
    termsAndConditions,
    companyLogo,
    supplier_lei
  } = document;

  const containerStyle = css`
    width: 80%;
    margin: auto;
    background-size: cover;
    background-position: center;
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
        <h2 className="my-3" style={{ textAlign: "center" }}>
          PACKING LIST
        </h2>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <h2 style={{ marginBottom: "-0.5em" }}>
                <b>{invoice?.supplier_contact_name}</b>
              </h2>
              <br />
              {invoice?.supplier_name} <br />
              {invoice?.supplier_address} <br />
              ✉️:&nbsp;{invoice?.supplier_contact_email} <br />
              📞:&nbsp; {invoice?.supplier_contact_phone} <br />
              VAT No.:&nbsp;{invoice?.supplier_vat_number} <br />
              LEI:&nbsp;{supplier_lei}
            </td>
            <td css={tableTd} colSpan={2} style={{ textAlign: "right" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                { companyLogo && 
                  <img
                    src={companyLogo}
                    alt="Company Logo"
                    style={{
                      width: "100px",
                      height: "auto",
                      objectFit: "contain",
                      //   border: "1px solid #e5e7eb",
                      padding: "4px",
                      backgroundColor: "#ffffff"
                    }}
                  />
                }
                <div>
                  <h1 style={{ textAlign: "right", marginBottom: "0" }}>
                    <b>PACKING LIST NUMBER</b>
                  </h1>
                  #{packingNumber}
                </div>
              </div>
            </td>
          </tr>
        </table>

        <h3 className="font-inter text-xl font-bold mt-4 p-2">Document Information:</h3>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>PACKING LIST NO.:</b>
              <br />
              {packingNumber}
            </td>
            <td css={tableTd}>
              <b>INVOICE NUMBER:</b> <br />
              {invoice?.invoice_number}
            </td>
            <td css={tableTd}>
              <b>SELLER REFERENCE.:</b>
              <br />
              {sellerReferrence}
            </td>
            <td css={tableTd}>
              <b>BUYER REFERENCE.:</b>
              <br />
              {buyerReference}
            </td>
            <td css={tableTd}>
              <b>TRANSPORT CONTRACT NUMBER.:</b>
              <br />
              {transportContractNumber}
            </td>
            {/* <td css={tableTd}>
                  <b>COMPANY NAME:</b>
                  <br />
                  {company}
                </td> */}
          </tr>
        </table>

        <h3 className="font-inter text-xl font-bold mt-4 p-2">Party Details:</h3>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr}>
            <td css={tableTd}>
              <b>SELLER:</b>
              <br />
              {seller}
            </td>
            <td css={tableTd}>
              <b>BUYER:</b>
              <br />
              {buyer}
            </td>
            <td css={tableTd}>
              <b>TRANSPORT SERVICE PROVIDER:</b>
              <br />
              {transportServiceProvider}
            </td>
            <td css={tableTd}>
              <b>CONVEYANCE REF.NO.:</b>
              <br />
              {conveyanceRefNo}
            </td>
            <td css={tableTd}>
              <b>CONSIGNMENT.:</b>
              <br />
              {consignment}
            </td>
            <td css={tableTd}>
              <b>CONTAINER.NO.:</b>
              <br />
              {containerNo}
            </td>
          </tr>
        </table>

        <h3 className="mt-5 font-inter text-xl font-bold p-2">Location Details:</h3>
        <div className="flex justify-center items-center">
          <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
            <tr css={tableTr}>
              <td css={tableTd}>
                <b>PORT OF LADING:</b>
                <br />
                {portOfLading}
              </td>
              <td css={tableTd}>
                <b>PORT OF DISCHARGE:</b> <br />
                {portOfDischarge}
              </td>
              <td css={tableTd}>
                <b>PLACE OF DELIVERY:</b>
                <br />
                {placeOfDelivery}
              </td>
              <td css={tableTd}>
                <b>MODE OF TRANSPORT:</b>
                <br />
                {modeOfTransport}
              </td>
            </tr>
          </table>
        </div>

        <h3 className="mt-5 font-inter text-xl font-bold p-2">Measurement Details:</h3>
        <div className="flex justify-center items-center">
          <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
            <tr css={tableTr}>
              <td css={tableTd}>
                <b>TEMPERATURE:</b>
                <br />
                {temperature}°c
              </td>
              <td css={tableTd}>
                <b>NO.OF.PACKAGES:</b> <br />
                {noOfPackages}
              </td>
              <td css={tableTd}>
                <b>VOL:</b>
                <br />
                {totalVolume}
              </td>
              <td css={tableTd}>
                <b>WEIGHT:</b>
                <br />
                {totalWeight + " " + weightUnit}
              </td>
            </tr>
          </table>
        </div>

        <h3 className="mt-5 font-inter text-xl font-bold p-2">Transport Details:</h3>
        <div className="flex justify-center items-center">
          <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
            <tr css={tableTr}>
              <td css={tableTd}>
                <b>CONVEYANCE REFERENCE NO.:</b>
                <br />
                {conveyanceRefNo}
              </td>
              <td css={tableTd}>
                <b>NO. OF PACKAGES:</b>
                <br />
                {noOfPackages}
              </td>
              <td css={tableTd}>
                <b>MODE OF TRANSPORT:</b>
                <br />
                {modeOfTransport}
              </td>
              <td css={tableTd}>
                <b>CONSIGNMENT:</b>
                <br />
                {consignment}
              </td>
              <td css={tableTd}>
                <b>CONTAINER NO:</b>
                <br />
                {containerNo}
              </td>
            </tr>
          </table>
        </div>

        <h3 className="mt-5 font-inter text-xl font-bold p-2">Instructions:</h3>
        <div className="flex justify-center items-center">
          <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
            <tr css={tableTr}>
              <td css={tableTd}>
                <b>DELIVERY INSTRUCTION.:</b>
                <br />
                {deliveryInstructions}
              </td>
              <td css={tableTd}>
                <b>PACKING INSTRUCTION:</b>
                <br />
                {packingInstructions}
              </td>
            </tr>
          </table>
        </div>

        <h3>Item Informations:</h3>
        <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
          <tr css={tableTr} style={{ backgroundColor: "#B8E7E2" }}>
            <th css={tableTd}>Name</th>
            <th css={tableTd}>Quantity</th>
            <th css={tableTd}>Shipping Marks</th>
            <th css={tableTd}>HS Code</th>
            <th css={tableTd}>Type Of Packing</th>
          </tr>

          {goods.map((item, index) => (
            <tr key={index} css={tableTr}>
              <td css={tableTd}>{item?.name}</td>
              <td css={tableTd}>{item?.quantity}</td>
              <td css={tableTd}>{item?.shippingMarks}</td>
              <td css={tableTd}>{item?.hsCode}</td>
              <td css={tableTd}>{item?.typeOfPacking}</td>
            </tr>
          ))}
        </table>

        <h3>Terms & Conditions:</h3>
        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            padding: "0.5rem",
            marginTop: "0.2rem"
          }}
        >
          <span style={{ fontWeight: "bold" }}>
            INCOTERM RULE :<br />
          </span>
          <div style={{ fontSize: "0.9rem", marginTop: "0.5rem", fontWeight: "normal" }}>
            {incoterm?.code} - {incoterm?.description}
            <br />
            <span style={{ fontWeight: "bold" }}>Delivery Point:</span> {incoterm?.deliveryPoint}
            <br />
            <span style={{ fontWeight: "bold" }}>Responsible Buyer:</span> {incoterm?.responsibilityBuyer}
            <br />
            <span style={{ fontWeight: "bold" }}>Responsible Seller:</span> {incoterm?.responsibilitySeller}
          </div>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            borderTop: "0px",
            padding: "0.5rem",
            marginBottom: "2rem"
          }}
        >
          <span style={{ fontWeight: "bold" }}>TERMS & CONDITIONS : </span>
          {termsAndConditions}
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            marginTop: "2rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            borderBottom: "0",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "spaceBetween"
          }}
        >
          <span style={{ color: "red", fontWeight: "bold" }}>Digitally Signed By:</span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>
                <b>Signer Name:</b>&nbsp;{invoice?.supplier_contact_name}{" "}
              </span>
              <br />
              <span>
                <b>DNS:</b>&nbsp;did:ethr:{signerDns}
              </span>
            </div>
            <div>
              <span>
                <b>Signer Email:</b>&nbsp;{invoice?.supplier_contact_email}
              </span>
              <br />
              <span>
                <b>Timestamp:</b>&nbsp;{" "}
                {moment
                  .utc(supplier_sign_time)
                  .add(5, "hours")
                  .add(30, "minutes")
                  .format("DD/MM/YYYY hh:mm A [IST]")}
              </span>
              {/* <span>
                <b>Signer IP:</b>&nbsp;{signerIPAddress}
              </span>
              <br />
              <span>
                <b>Signer Place:</b>&nbsp;{signerLocation}
              </span> */}
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            opacity: "0.8",
            textAlign: "justify",
            border: "2px solid black",
            padding: "0.5rem"
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This verifiable document is
          issued on Credore's platform in accordance with the ICC Digital Standards Initiative and TradeTrust
          recommended format. It holds full legal validity, and any unauthorized alterations or modifications are
          strictly prohibited. You can verify the document's integrity, authenticity, and traceability through
          TradeTrust or its authorized verification channels.
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}
          className="flex justify-between text-sm"
        >
          <div>
            <b>Tx Hash:</b>&nbsp;{mintTxHash}
          </div>
          <div>
            <b>Blockchain:</b>&nbsp;{blockchainName}
          </div>
        </div>
      </div>
    </div>
  );
};
