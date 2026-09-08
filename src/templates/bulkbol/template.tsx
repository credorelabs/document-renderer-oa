import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { css } from '@emotion/core'
// import { CocTemplateCertificate } from "../samples/cooTemplate";
import { BulkBOLData } from './types'
import moment from 'moment'

export const BulkEblTemplate: FunctionComponent<TemplateProps<BulkBOLData>> = ({ document }) => {
  const {
    documentNumber,
    referenceNumber,
    vesselName,
    portOfLoading,
    portOfDischarge,
    freightPayable,
    charterPartyDate,
    cargoDescription,
    cargoGrossWeight,
    cargoWeightUnit,
    measurement,
    measurementUnit,
    placeOfIssue,
    dateOfIssue,
    numberOfOriginals,
    shippedOnBoardDate,
    scac,
    shippedOnDeck,
    termsAndConditions,
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
    transport_IMOvesselNumber,
    transport_conveyanceReferenceNumber,
    transport_modeOfTransportUNCEFACT,
    transport_vesselName,

    exporter_sign_time,
    exporterEmail,
    exporterPhone,
    exporterAddress,
    exporterName,
    exporterLei,
    exporterCompanyName,

    importerCompanyName,
    importerAddress,
    importerName,
    importer_email,
    importer_phone,
    importer_lei,
    importer_address,

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
    notify_lei,
    notify_contact_email,
    notify_contact_phone,

    blockchainName,
    mintTxHash,
    carrier_signer_place,
    exporter_signer_place,

    shippingBillNo,
    invoiceNumber,
    invoiceDate,
    ventilation,
    tokenRegistryAddress,

    primaryLogo,
    secondaryLogo,

    consignment_containerReeferType,

    exporterSignIp,
    shippingCompanySignIp
  } = document

  const parties = document.recipient?.parties
  const shipper = parties?.shipper
  const carrier = parties?.carrier
  const consignee = parties?.consignee
  const recipientNotifyParty = parties?.notifyParty

  const displayedExporterName = exporterName || shipper?.name
  const displayedExporterAddress = exporterAddress || shipper?.address
  const displayedCarrierName = shipping_company_signer || carrier?.name
  const displayedNotifyName = notify_name || recipientNotifyParty?.name
  const displayedNotifyAddress = notify_address || recipientNotifyParty?.address
  const displayedScac = scac || document.recipient?.scac
  const displayedGoodsDescription = goods_descriptionOfGoods || cargoDescription

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 70%;
    border: 1px solid #666;
  `

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
  `

  const tableTd = css`
    border: 1px solid black;
    padding: 0.5em;
    vertical-align: top;
    font-size: 14px;
    width: 50%;
  `
  const cellHeader = css`
    color: #29564b;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0;
    margin-bottom: 5px;
  `

  const cellTitle = css`
    font-weight: bold;
    font-family: monospace;
    font-size: 12px;
    color: #666;
  `

  function parseGoodsDescription (value?: string): Array<{ hsCode?: string; desc?: string }> | undefined {
    if (!value) return undefined

    try {
      const parsedValue = JSON.parse(value.replace(/&quot;/g, '"'))
      return Array.isArray(parsedValue) ? parsedValue : undefined
    } catch (error) {
      return undefined
    }
  }

  const formatDate = (date?: string) => {
    if (!date) return ''

    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const formattedCharterPartyDate = formatDate(charterPartyDate)
  const formattedShippedOnBoardDate = formatDate(shippedOnBoardDate)
  const formattedDateOfIssue = formatDate(dateOfIssue)
  const parsedGoodsDescription = parseGoodsDescription(goods_descriptionOfGoods)
  const isShippedOnDeck = ['yes', 'true'].includes(String(shippedOnDeck).toLowerCase())
  const reference = referenceNumber || shippersReferenceNumber

  return (
    <div css={containerStyle}>
      <div
        style={{
          margin: 'auto',
          marginLeft: '0',
          marginBottom: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ width: '50%' }}>
          <img
            src='https://www.credore.xyz/assets/images/Logo.png'
            alt='credore stamp'
            style={{ height: '4em', width: 'auto' }}
          />
        </div>
        <div
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}
        >
          <b style={{ fontSize: '1.2rem', color: '#29564b' }}>BILL OF LADING</b>
          <span style={{ fontSize: '.75rem' }}>ELECTRONIC</span>

          <table style={{ width: '100%', border: '1px solid #CCC', padding: '0px', borderSpacing: '0px' }}>
            <tr css={tableTr}>
              <td style={{ border: '1px solid #CCC', padding: '.5em' }}>B/L No:</td>
              <td style={{ border: '1px solid #CCC', padding: '.5em' }}>Reference No: </td>
            </tr>
            <tr css={tableTr}>
              <td style={{ border: '1px solid #CCC', padding: '.5em' }}>{documentNumber}</td>
              <td style={{ border: '1px solid #CCC', padding: '.5em' }}>{reference}</td>
            </tr>
          </table>
        </div>
      </div>

      <table style={{ width: '100%', border: '1px solid #333', padding: '0px', borderSpacing: '0px' }}>
        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 1. SHIPPER / EXPORTER</h6>
            {exporterCompanyName || shipper?.name},<br />
            {displayedExporterName},<br />
            {displayedExporterAddress},<br />
            {exporterEmail},<br />
            {exporterPhone}
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 2. CONSIGNEE</h6>
            {consignee?.name || 'TO ORDER'}
            {consignee?.address && <><br />{consignee.address}</>}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 3. Frieght payable as per charter party dated</h6>
            <b css={cellTitle}>Charter Party dated:</b> {formattedCharterPartyDate}
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 4. Notify Party</h6>
            {displayedNotifyName},<br />
            {notify_contact_name}
            <br />
            {displayedNotifyAddress}
            <br />
            {notify_contact_email}
            <br />
            {notify_contact_phone}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 5. Port of Lading</h6>
            {portOfLoading}
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 6. Port of Discharge</h6>
            {portOfDischarge}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 7. Vessel:</h6>
            {vesselName}
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 8. Reference No.</h6>
            {reference}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <h6 css={cellHeader}> 9. B/L No.</h6>
            {documentNumber}
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '1px solid #333',
          borderTopWidth: 0,
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '60%' }}>
            <h6 css={cellHeader}> 10. Description of Goods</h6>
          </td>

          <td css={tableTd} style={{ width: '20%' }}>
            <h6 css={cellHeader}> 11. Cargo Gross Weight</h6>
          </td>

          <td css={tableTd} style={{ width: '20%' }}>
            <h6 css={cellHeader}> 12. Measurement</h6>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '60%' }}>
            <b>Goods description:</b>&nbsp;
            {parsedGoodsDescription &&
              parsedGoodsDescription.map((item, index) => (
                <p key={`${item.hsCode || 'goods'}-${index}`}>
                  HS Code: {item?.hsCode} - {item?.desc}
                </p>
              ))}
            {!parsedGoodsDescription && goods_descriptionOfGoods}
          </td>

          <td css={tableTd} style={{ width: '20%' }}>
            {cargoGrossWeight} {cargoWeightUnit}
          </td>

          <td css={tableTd} style={{ width: '20%' }}>
            {measurement} {measurementUnit}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={3}>
            <h6 css={cellHeader}> 13. Shipped on Deck(If Applicable)</h6>
            {isShippedOnDeck ? 'Yes' : 'None'}
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '1px solid #333',
          borderTopWidth: 0,
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 14. Shipped on Board Date</h6>
            {formattedShippedOnBoardDate}
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 15. Place of Issue</h6>
            {placeOfIssue}
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 16. Date of Issue</h6>
            {formattedDateOfIssue}
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 17. Number of Original B/Ls</h6>
            {numberOfOriginals}
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={4}>
            <h6 css={cellHeader}> 18. SCAC (Applicable for Shipments to USA)</h6>
            {displayedScac}
          </td>
        </tr>
      </table>

      <table
        style={{ width: '100%', border: '2px solid black', padding: '0px', borderSpacing: '0px', marginTop: '3em' }}
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
        style={{
          width: '100%',
          borderWidth: '2px 2px 0px 2px',
          borderStyle: 'solid',
          borderColor: 'black',
          padding: '0px',
          borderSpacing: '0px',
          marginTop: '3em'
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2} style={{ padding: '1rem' }}>
            <b style={{ color: 'red' }}>Digitally signed by Exporter :</b> <br /> <br />
            <b>Name:</b>&nbsp;{exporterName} <br />
            <b>Signer Place:</b>&nbsp;{exporter_signer_place}
            <br />
            <b>Date & Time:</b>&nbsp;
            {moment(exporter_sign_time).utc().add(5, 'hours').add(30, 'minutes').format('DD/MM/YYYY hh:mm A [IST]')}
            <br />
            <b>IP Address:</b>&nbsp;{exporterSignIp}
          </td>

          <td css={tableTd} colSpan={2} style={{ padding: '1rem', width: '50%' }}>
            <b style={{ color: 'red' }}>Digitally signed by Carrier :</b> <br /> <br />
            <b>Name:</b>&nbsp;{shipping_company_signer} <br />
            <b>Signer Place:</b>&nbsp;{carrier_signer_place}
            <br />
            <b>Date & Time:</b>&nbsp;
            {moment(shipping_company_sign_time)
              .utc()
              .add(5, 'hours')
              .add(30, 'minutes')
              .format('DD/MM/YYYY hh:mm A [IST]')}
            <br />
            <b>IP Address:</b>&nbsp;{shippingCompanySignIp}
          </td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          borderWidth: '0px 2px 2px 2px',
          borderStyle: 'solid',
          borderColor: 'black',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} colSpan={4}>
            <span style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Disclaimer :</span> This document, originally
            existing in electronic or paper or both formats, has been converted to the TradeTrust-recommended format,
            ensuring MLETR compliance. The converted document, in compliance with Section 4(1) of the Electronic Trade
            Document Act, holds the same legal validity. Any unauthorized alterations or modifications are strictly
            prohibited. Verify its integrity and authenticity through approved channels.
          </td>
        </tr>
      </table>
    </div>
  )
}
