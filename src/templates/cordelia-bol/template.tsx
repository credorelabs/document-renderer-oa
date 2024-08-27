import React, { FunctionComponent, useEffect, useState } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
// import { CocTemplateCertificate } from "../samples/cooTemplate";
import { BillOfLadingData } from "./types";
import background from "./boeBackground.svg";
import logo from "./csl.png";
import moment from "moment";
import numberToWords from "number-to-words";

export const BOLTemplate: FunctionComponent<TemplateProps<BillOfLadingData>> = ({ document }) => {
  const [amountText, setAmountText] = useState("");

  const {
    blNumber,
    bookingReferenceNumber,
    consignment_containerNumber,
    consignment_containerSizeTypeISO,
    consignment_fullOrEmptyIndicator,
    contractQuoteReferenceNumber,
    date_actualDateOfPlaceOfDelivery,
    date_actualDateOfPlaceOfReceipt,
    date_actualTimeOfArrival,
    date_actualTimeOfDeparture,
    date_estimatedDateOfPlaceOfDelivery,
    date_estimatedDateOfPlaceOfReceipt,
    date_estimatedTimeOfArrival,
    date_estimatedTimeOfDeparture,
    freightForwardersReferenceNumber,
    goods_HSCode,
    goods_IMDG,
    goods_dangerLevel,
    goods_descriptionOfGoods,
    goods_numberOfPackages,
    goods_productIdentifier,
    goods_properShippingTechnicalName,
    goods_typeOfPackagingCEFACT,
    location_placeOfDelivery,
    location_placeOfPaymentUNLOCODE,
    location_placeOfReceipt,
    location_portOfDischarge,
    location_portOfLoading,
    measure_temperatureSettingForReeferContainers,
    measure_temperatureUnitsUNCEFACT,
    measure_totalNumberOfContainers,
    measure_volume,
    measure_weight,
    party_SCAC,
    party_SMFG,
    party_consignee,
    party_notifyParty,
    party_shipper,
    shippersReferenceNumber,
    terms,
    transport_IMOvesselNumber,
    transport_conveyanceReferenceNumber,
    transport_modeOfTransportUNCEFACT,
    transport_vesselName,

    importerCompanyName,
    importerAddress,
    importerName,
    importer_email,
    importer_phone,
    importer_address,

    exporterCompanyName,
    exporterAddress,
    exporterName,
    exporter_sign_time,
    exporterEmail,
    exporterPhone,

    shipping_company_sign_time,
    shipping_company_signer,

    carrier_name,
    carrier_contact_name,
    carrier_address,
    carrier_contact_email,
    carrier_contact_phone,

    notify_name,
    notify_contact_name,
    notify_address,
    notify_contact_email,
    notify_contact_phone,
    carrier_signer_place,
    exporter_signer_place,
    blockchainName,
    mintTxHash,
    shippingBillNo,
    invoiceNumber,
    invoiceDate,
    sealNumber,
    humidity,
    ventilation,
    tokenRegistryAddress,
    exporterLei,
    importer_lei,
    notify_lei,
    carrier_lei,
    primaryLogo,
    secondaryLogo
  } = document;

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 80%;
    font-family: sans-serif;
  `;

  // const containerStyle = css`
  //   width: 80%;
  //   margin: auto;
  //   padding: 20px;
  //   background-image: url(${background});
  //   background-size: cover;
  //   background-position: center;
  //   @media print {
  //     background-image: url(${background});
  //   }
  // `;

  const tableTr = css`
    border: 1px solid black;
  `;

  const tableTd = css`
    border: 1px solid black;
    padding: 1em;
  `;

  useEffect(() => {
    if (goods_numberOfPackages) {
      let amountToText = numberToWords.toWords(goods_numberOfPackages);

      setAmountText(
        amountToText
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [goods_numberOfPackages]);
  return (
    <div css={containerStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {primaryLogo && (
          <img
            src={primaryLogo}
            alt="company logo"
            style={{
              marginBottom: "2rem",
              marginTop: "2rem",
              maxWidth: "150px",
              maxHeight: "auto",
              objectFit: "contain"
            }}
          />
        )}
        {secondaryLogo && (
          <img
            src={secondaryLogo}
            alt="company logo"
            style={{
              width: "150px",
              height: "auto",
              margin: "2rem 0 2rem 2rem",
              objectFit: "contain"
            }}
          />
        )}
      </div>
      <table
        style={{ width: "100%", border: "2px solid black", borderBottom: "0", padding: "0px", borderSpacing: "0px" }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: "50%" }} rowSpan={2} colSpan={2}>
            <span style={{ fontSize: "0.8rem" }}>Shipper</span>
            <br />
            <span style={{ fontSize: "1.1rem" }}>
              {exporterCompanyName},<br />
              {exporterLei && (
                <>
                  <b>LEI number:</b>&nbsp;{exporterLei}
                  <br />
                </>
              )}
              {exporterAddress},<br />
              {exporterEmail},<br />
              {exporterPhone},<br />
            </span>
          </td>
          <td css={tableTd} colSpan={2}>
            <span style={{ fontSize: "0.8rem" }}>
              <b>B/L Number:</b>
            </span>
            &nbsp;{blNumber}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} rowSpan={3} colSpan={2}>
            <span style={{ fontSize: "0.7rem" }}>
              <b>Ocean Bill of Lading or Multimodal Bill of Lading</b>
            </span>
            <br />
            <span style={{ fontSize: "0.8rem" }}>
              NON-NEGOTIABLE UNLESS CONSIGNED “TO ORDER” .<br /> RECEIVED BY THE CARRIER THE GOODS SPECIFIED BELOW IN
              APPARENT GOOD ORDER AND CONDITION, UNLESS OTHERWISE STATED HEREIN, FOR TRANSPORTATION TO SUCH PLACE AS
              AGREED, AUTHORIZED, OR PERMITTED HEREIN AND SUBJECT TO ALL TERMS AND CONDITIONS APPEARING ON FRONT AND
              REVERSE OF THIS BILL OF LADING TO WHICH THE SHIPPER AGREES BY ACCEPTING THIS BILL OF LADING, ANY LOCAL
              PRIVILEGES AND CUSTOMS NOTWITHSTANDING. THE PARTICULARS OF THE CARGO GIVEN BELOW ARE AS STATED BY THE
              SHIPPER. THE WEIGHT, MEASURE, QUANTITY, CONDITION, CONTENTS, AND VALUE OF THE GOODS ARE UNKNOWN TO THE
              CARRIER. IN WITNESS WHEREOF AS MANY ORIGINAL COPIES OF THIS BILL OF LADING AS STATED BELOW HAVE BEEN
              SIGNED, AND IF ANY ONE OF THIS IS ACCOMPLISHED, OTHERS ARE VOID. IF REQUIRED BY THE CARRIER, AT LEAST ONE
              ORIGINAL BILL OF LADING, DULY ENDORSED, MUST BE SURRENDERED IN EXCHANGE FOR THE GOODS, OR A DELIVERY
              ORDER.
            </span>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} rowSpan={2} colSpan={2}>
            <span style={{ fontSize: "0.8rem" }}>Consignee</span>
            <br />
            <span style={{ fontSize: "1.2rem" }}>
              {importerCompanyName},<br />
              {importer_lei && (
                <>
                  <b>LEI number:</b>&nbsp;{importer_lei}
                  <br />
                </>
              )}
              {importerAddress},<br />
              {importer_email},<br />
              {importer_phone},<br />
            </span>
          </td>
        </tr>
      </table>
      <table
        style={{
          width: "100%",
          border: "2px solid black",
          borderTop: "1px",
          borderBottom: "0",
          padding: "0px",
          borderSpacing: "0px"
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: "50%" }} rowSpan={2} colSpan={2}>
            <span style={{ fontSize: "0.8rem" }}>
              Notify Party (Carrier not responsible for failure to notify and no claim shall attach therefrom)
            </span>
            <br />
            <span style={{ fontSize: "1.1rem" }}>
              {notify_name},<br />
              {notify_lei && (
                <>
                  <b>LEI number:</b>&nbsp;{notify_lei}
                  <br />
                </>
              )}
              {/* {notify_contact_name},<br /> */}
              {notify_address},<br />
              {notify_contact_email},<br />
              {/* {notify_contact_phone} */}
            </span>
          </td>
          <td css={tableTd} colSpan={2}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Shipper/ Export /Forwarder References</b>
            </span>
            <br />
            <br />
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Place of Receipt:</b>
            </span>
            <br />
            {location_placeOfReceipt}
          </td>
          <td css={tableTd}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Port of Loading:</b>
            </span>
            <br />
            {location_portOfLoading}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: "50%" }} rowSpan={2} colSpan={2}>
            <span style={{ fontSize: "0.8rem", position: "relative", top: "-40px" }}>Also Notify</span>
            <br />
            <span style={{ fontSize: "1.1rem" }}></span>
          </td>
          <td css={tableTd}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Port of Discharge</b>
            </span>
            <br />
            {location_portOfDischarge}
          </td>
          <td css={tableTd}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Place of Delivery/Final Destination</b>
            </span>
            <br />
            {location_placeOfDelivery}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Pre-carriage by</b>
            </span>
            <br />
            <br />
            {/* {location_portOfDischarge} */}
          </td>
          <td css={tableTd}>
            <span style={{ fontSize: "0.7rem", top: "0" }}>
              <b>Vessel & Voyage</b>
            </span>
            <br />
            {transport_vesselName}&nbsp;/&nbsp;{transport_IMOvesselNumber}
          </td>
        </tr>
      </table>
      <table
        style={{
          width: "100%",
          border: "2px solid black",
          borderTop: "1px",
          borderBottom: "0",
          padding: "0px",
          borderSpacing: "0px"
        }}
      >
        <thead>
          <tr css={tableTr}>
            <th css={tableTd}>
              <span style={{ fontSize: "0.8rem" }}>Container No.s & Seal No.s</span>
            </th>
            <th css={tableTd}>
              <span style={{ fontSize: "0.8rem" }}>Marks & No. of Packages</span>
            </th>
            <th css={tableTd} colSpan={3}>
              <span style={{ fontSize: "0.8rem" }}>Description of Goods & Packages</span>
            </th>
            <th css={tableTd}>
              <span style={{ fontSize: "0.8rem" }}>Gross Weight of Cargo (KG)</span>
            </th>
            <th css={tableTd}>
              <span style={{ fontSize: "0.8rem" }}>Measurement (CBM)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr css={tableTr}>
            <td css={tableTd}>
              <div style={{ position: "relative", top: "0px" }}>
                {consignment_containerNumber}&nbsp;/&nbsp;{sealNumber}
              </div>
            </td>
            <td css={tableTd}>
              {goods_numberOfPackages} Packages
              <br />
              {consignment_containerSizeTypeISO}
            </td>
            <td colSpan={3} style={{ width: "50%" }} css={tableTd}>
              {consignment_containerSizeTypeISO} CONTAINERS SAID TO CONTAIN <br />
              {goods_numberOfPackages} Package ({amountText} Package) <br />
              {goods_descriptionOfGoods} <br />
              INV NO.:{invoiceNumber}&nbsp; Date:
              {moment(invoiceDate)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}{" "}
              <br />
              SB NO: {shippingBillNo}&nbsp; DATE:{" "}
              {moment(date_estimatedDateOfPlaceOfReceipt)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}{" "}
              <br />
              HSCODE: {goods_HSCode} <br />
              Temperature: {measure_temperatureSettingForReeferContainers} <br />
              Humidity: {humidity} <br />
              Ventilation: {ventilation}
              <br />
              <br />
              <br />
              SHIPPED ON BOARD{" "}
              {moment(date_actualDateOfPlaceOfReceipt)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY")}{" "}
              <br />
              FREIGHT PREPAID <br />
              CY/CY <br />
              FCL/FC <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </td>
            <td css={tableTd}>{measure_weight}</td>
            <td css={tableTd}>{measure_volume}</td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={7}>
              <div style={{ fontSize: "0.7rem" }}>
                <b>Additional Information for Refrigerated Cargo / Hazardous Cargo / OOG Cargo</b> &nbsp;&nbsp;THE
                SHIPPING LINE SHALL NOT BE RESPONSIBLE FOR THE OUTTURN IF THE CARGO HAS BEEN HOT-LOADED.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        style={{
          width: "100%",
          border: "2px solid black",
          borderTop: "0",
          borderBottom: "0",
          padding: "0px",
          borderSpacing: "0px"
        }}
      >
        <tr css={tableTr} style={{ fontSize: "0.8rem" }}>
          <td css={tableTd}>CONTAINER NO : {consignment_containerNumber}</td>
          <td css={tableTd}>TEMPERATURE : {measure_temperatureSettingForReeferContainers}</td>
          <td css={tableTd}>VENT : {ventilation}</td>
          <td css={tableTd}>HUMIDITY : {humidity}</td>
        </tr>
      </table>
      <table style={{ width: "100%", border: "2px solid black", borderTop: "0", padding: "0px", borderSpacing: "0px" }}>
        <tr css={tableTr} style={{ fontSize: "0.7rem" }}>
          <td css={tableTd} style={{ textAlign: "center" }} colSpan={5}>
            All cargo-related particulars above as furnished by the Shipper but without responsibility and
            representation by Carrier
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Freight & Charges
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Units
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Currency
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Prepaid
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Collect
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}></td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}></td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}></td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}></td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}></td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Freight Payable at
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Freight Payable by
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            No. of Original Bill of Ladings
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Place of Issue
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            Date of Issue
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            {location_placeOfPaymentUNLOCODE}
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            {importerCompanyName}
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}></td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            {location_placeOfReceipt}
          </td>
          <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            {moment(date_actualDateOfPlaceOfReceipt)
              .utc()
              .add(5, "hours")
              .add(30, "minutes")
              .format("DD/MM/YYYY")}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={5}>
            <span style={{ fontSize: "0.8rem" }}>Destination Agent:</span>
            <br />
            {carrier_name},<br />
            {carrier_contact_name},<br />
            {carrier_address},<br />
            {carrier_contact_email},<br />
            {carrier_contact_phone}
          </td>
        </tr>
      </table>

      <table
        style={{
          width: "100%",
          borderWidth: "2px 2px 0px 2px",
          borderStyle: "solid",
          borderColor: "black",
          padding: "0px",
          borderSpacing: "0px",
          marginTop: "3em"
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2} style={{ padding: "1rem", width: "50%" }}>
            <b style={{ color: "red" }}>Digitally signed by Exporter :</b> <br /> <br />
            <b>Name:</b>&nbsp;{shipping_company_signer} <br />
            <b>Place:</b>&nbsp;{carrier_signer_place}
            <br />
            <b>Date & Time:</b>&nbsp;
            {moment(shipping_company_sign_time)
              .utc()
              .add(5, "hours")
              .add(30, "minutes")
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>

          <td css={tableTd} colSpan={2} style={{ padding: "1rem" }}>
            <b style={{ color: "red" }}>Digitally signed by Carrier :</b> <br /> <br />
            <b>Name:</b>&nbsp;{"Mr. Carrier Line"} <br />
            {/* exporterName */}
            <b>Place:</b>&nbsp;Cityville,Countryland
            {/* {exporter_signer_place} */}
            <br />
            <b>Date & Time:</b>&nbsp;
            {moment(exporter_sign_time)
              .utc()
              .add(5, "hours")
              .add(30, "minutes")
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
        </tr>
      </table>
      <table
        style={{
          width: "100%",
          borderWidth: "0px 2px 2px 2px",
          borderStyle: "solid",
          borderColor: "black",
          padding: "0px",
          borderSpacing: "0px"
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} colSpan={4}>
            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This document, originally
            existing in electronic or paper or both formats, has been converted to the TradeTrust-recommended format,
            ensuring MLETR compliance. The converted document, in compliance with Section 4(1) of the Electronic Trade
            Document Act, holds the same legal validity. Any unauthorized alterations or modifications are strictly
            prohibited. Verify its integrity and authenticity through approved channels.
          </td>
        </tr>
        <div css={tableTd} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
          <div>
            <b>Blockchain:</b>&nbsp;{blockchainName === "xinfin" ? "XDC Network" : blockchainName}
          </div>
          <div>
            <b>Genesis Transaction Hash:</b>&nbsp;{tokenRegistryAddress?.split("/").pop()}
          </div>
        </div>
      </table>
    </div>
  );
};
