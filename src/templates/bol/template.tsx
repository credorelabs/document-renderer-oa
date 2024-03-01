import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
// import { CocTemplateCertificate } from "../samples/cooTemplate";
import { BillOfLadingData } from "./types";
import background from "./boeBackground.svg";
import credoreLogo from "https://www.credore.xyz/assets/images/Logo.png";
import moment from "moment";

export const BOLTemplate: FunctionComponent<TemplateProps<BillOfLadingData>> = ({ document }) => {
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
    notify_contact_phone
  } = document;

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 80%;
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
  return (
    <div css={containerStyle}>
      <table style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px" }}>
        <tr css={tableTr}>
          <td style={{ width: "50%", textAlign: "center" }} css={tableTd} colSpan={2}>
            <img src="https://www.credore.xyz/assets/images/Logo.png" alt="credore stamp" style={{ width: "10em" }} />
          </td>
          <td css={tableTd} colSpan={2}>
            <h3>
              <b>BILL OF LADING FOR {exporterCompanyName}</b>
            </h3>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} rowSpan={3} colSpan={2}>
            <b>Shipper:</b>
            <br />
            {exporterCompanyName},<br />
            {exporterName},<br />
            {exporterAddress},<br />
            {exporterEmail},<br />
            {exporterPhone}
          </td>
          <td css={tableTd} colSpan={2}>
            <b>B/L Number:</b>&nbsp;{blNumber}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <b>Shipper Reference No.:</b>&nbsp;{shippersReferenceNumber}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <b>Booking Reference No.:</b>&nbsp;{bookingReferenceNumber}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} rowSpan={3} colSpan={2}>
            <b>Consignee:</b>
            <br />
            {importerCompanyName},<br /> {importerName},<br />
            {importerAddress},<br /> {importer_email},<br />
            {importer_phone}
          </td>
          <td css={tableTd} colSpan={2}>
            <b>Consignment Container No.:</b>&nbsp;{consignment_containerNumber}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <b>Consignment Indicator:</b>&nbsp;{consignment_fullOrEmptyIndicator}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <b>Contract Quote Reference No.:</b>&nbsp;{contractQuoteReferenceNumber}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <b>Carrier:</b>
            <br />
            {carrier_name},<br />
            {carrier_contact_name},<br />
            {carrier_address},<br />
            {carrier_contact_email},<br />
            {carrier_contact_phone}
          </td>
          <td css={tableTd} colSpan={2}>
            <b>Notify Party:</b>
            <br />
            {notify_name},<br />
            {notify_contact_name},<br />
            {notify_address},<br />
            {notify_contact_email},<br />
            {notify_contact_phone}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Actual date of delivery:</b>
            <br />
            {moment(date_actualDateOfPlaceOfDelivery)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
          <td css={tableTd}>
            <b>Actual date of receipt:</b>
            <br />
            {moment(date_actualDateOfPlaceOfReceipt)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
          <td css={tableTd}>
            <b>Actual time of arrival:</b>
            <br />
            {moment(date_actualTimeOfArrival)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
          <td css={tableTd}>
            <b>Actual time of departure:</b>
            <br />
            {moment(date_actualTimeOfDeparture)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Estimated date of delivery:</b>
            <br />
            {moment(date_estimatedDateOfPlaceOfDelivery)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
          <td css={tableTd}>
            <b>Estimated date of receipt:</b>
            <br />
            {moment(date_estimatedDateOfPlaceOfReceipt)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
          <td css={tableTd}>
            <b>Estimated time of arrival:</b>
            <br />
            {moment(date_estimatedTimeOfArrival)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
          <td css={tableTd}>
            <b>Estimated time of departure:</b>
            <br />
            {moment(date_estimatedTimeOfDeparture)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Container Size: </b>&nbsp;{consignment_containerSizeTypeISO}
          </td>
          <td css={tableTd}>
            <b>Weight:</b>&nbsp;{measure_weight}
          </td>
          <td css={tableTd}>
            <b>Volume:</b>&nbsp;{measure_volume}
          </td>
          <td css={tableTd} colSpan={2}>
            <b>Place of Payment Unlocode:</b>&nbsp;{location_placeOfPaymentUNLOCODE}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Place of Delivery:</b>&nbsp;{location_placeOfDelivery}
          </td>
          <td css={tableTd}>
            <b>Place of Receipt:</b>&nbsp;{location_placeOfReceipt}
          </td>
          <td css={tableTd}>
            <b>Port of Loading:</b>&nbsp;{location_portOfLoading}
          </td>
          <td css={tableTd}>
            <b>Port of Discharge:</b>&nbsp;{location_portOfDischarge}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <b>IMO Vessel No.:</b>&nbsp;{transport_IMOvesselNumber}
          </td>
          <td css={tableTd}>
            <b>Conveyance Reference No.:</b>&nbsp;{transport_conveyanceReferenceNumber}
          </td>
          <td css={tableTd}>
            <b>Mode of Transport:</b>&nbsp;{transport_modeOfTransportUNCEFACT}
          </td>
          <td css={tableTd}>
            <b>Vessel:</b>&nbsp;{transport_vesselName}
          </td>
        </tr>
      </table>

      <table
        style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px", marginTop: "3em" }}
      >
        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Freight Forwarders Reference No.:</b>&nbsp;{freightForwardersReferenceNumber}
          </td>
          <td css={tableTd}>
            <b>HS Code:</b>&nbsp;{goods_HSCode}
          </td>
          <td css={tableTd}>
            <b>IMDG:</b>&nbsp;{goods_IMDG}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Danger level:</b>&nbsp;{goods_dangerLevel}
          </td>
          <td css={tableTd}>
            <b>Goods description:</b>&nbsp;{goods_descriptionOfGoods}
          </td>
          <td css={tableTd}>
            <b>No. of Goods:</b>&nbsp;{goods_descriptionOfGoods}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd}>
            <b>No. of Packages:</b>&nbsp;{goods_numberOfPackages}
          </td>
          <td css={tableTd}>
            <b>Product Identifier:</b>&nbsp;{goods_productIdentifier}
          </td>
          <td css={tableTd}>
            <b>Type of Packaging:</b>&nbsp;{goods_typeOfPackagingCEFACT}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd}>
            <b>Shipping name:</b>&nbsp;{goods_properShippingTechnicalName}
          </td>
          <td css={tableTd}>
            <b>No. of Containers:</b>&nbsp;{measure_totalNumberOfContainers}
          </td>
          <td css={tableTd}>
            <b>Temperature:</b>&nbsp;{measure_temperatureSettingForReeferContainers}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} colSpan={4}>
            <b>Terms:</b>&nbsp;{terms}
          </td>
        </tr>
      </table>

      <table
        style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px", marginTop: "3em" }}
      >
        <tr css={tableTr}>
          <td css={tableTd}>
            TAKEN IN CHARGE IN APPARENTLY GOOD CONDITION HEREIN AT THE PLACE OF RECEIPT FOR TRANSPORT AND DELIVERY AS
            MENTIONED ABOVE, UNLESS OTHERWISE STATED. THE MTO IN ACCORDANCE WITH THE PROVISIONS CONTAINED IN THE MTD
            UNDERTAKES TO PERFORM OR TO PROCURE THE PREFORMANCE OF THE MULTIMODAL TRANSPORT FROM THE PLACE AT WHICH THE
            GOODS ARE TAKEN IN CHARGE, TO THE PLACE DESIGNATED FOR DELIVERY AND ASSUMES RESPONSIBILITY FOR SUCH
            TRANSPORT.
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            ONE OF THE MTD(S) MUST BE SURRENDERED, DULY ENDORSED IN EXCHANGE FOR THE GOODS, IN WITNESS WHERE OF THE
            ORIGINAL MTD ALL OF THIS TENOR AND DATE HAVE BEEN SIGNED IN THE NUMBER INDICATED BELOW ONE OF WHICH BEING
            ACCOMPLISHED THE OTHER(S) TO BE VOID
          </td>
        </tr>
      </table>

      <table
        style={{ width: "100%", border: "2px solid black", padding: "0px", borderSpacing: "0px", marginTop: "3em" }}
      >
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2} style={{ padding: "1rem" }}>
            <b style={{ color: "red" }}>Digitally signed by Carrier :</b> <br /> <br />
            <b>Name:</b>&nbsp;{shipping_company_signer} <br />
            <b>Place:</b>&nbsp;{carrier_address}<br/>
            <b>Date & Time:</b>&nbsp;
            {moment(shipping_company_sign_time)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>

          <td css={tableTd} colSpan={2} style={{ padding: "1rem" }}>
            <b style={{ color: "red" }}>Digitally signed by Exporter :</b> <br /> <br />
            <b>Name:</b>&nbsp;{exporterName} <br />
            <b>Place:</b>&nbsp;{exporterAddress}<br/>
            <b>Date & Time:</b>&nbsp;
            {moment(exporter_sign_time)
              .utc().add(5, 'hours').add(30, 'minutes')
              .format("DD/MM/YYYY hh:mm A [IST]")}
          </td>
        </tr>
        <tr css={tableTr}>
            <td css={tableTd} colSpan={3}>
            <span style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Disclaimer :</span> This document, originally existing
        in electronic or paper or both formats, has been converted to the TradeTrust-recommended format, ensuring MLETR
        compliance. The converted document, in compliance with Section 4(1) of the Electronic Trade Document Act, holds
        the same legal validity. Any unauthorized alterations or modifications are strictly prohibited. Verify its
        integrity and authenticity through approved channels.
            </td>
          </tr>
      </table>
    </div>
  );
};
