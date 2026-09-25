import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import moment from 'moment'
import { CCICargoDocument } from './types'
import { css } from '@emotion/core'
import eBl from './eBL_t&c.png'
import cciLogo from '../../../public/cci-logo.png'
import CCITerms from '../../../public/CCI-Terms.png'
import CredoreTermsSG from '../../../public/Credore_eBL_Terms_and_Conditions_SG.png'
import CredoreTermsUK from '../../../public/Credore_eBL_Terms_and_Conditions_UK.png'
import signature from '../../../public/digital-signature.png'

const PAYMENT_METHODS = [
  { value: 'A', label: 'Payment in Cash (A)' },
  { value: 'B', label: 'Payment by Credit Card (B)' },
  { value: 'C', label: 'Payment by Cheque (C)' },
  { value: 'D', label: 'Other e.g. Direct Debit to Cash Account (D)' },
  { value: 'H', label: 'Electronic Funds Transfer (H)' },
  { value: 'Y', label: 'Account Holder with Carrier (Y)' },
  { value: 'Z', label: 'Not Pre-paid (Z)' }
]

export const CCIBolTemplate: FunctionComponent<TemplateProps<CCICargoDocument>> = ({ document }) => {
  const recipient = document.recipient ?? {}
  const {
    primaryLogo,
    secondaryLogo,
    documentPartiesShipper,
    documentCarrierCarrier,
    shippingInstructionsReference,
    organisationName,
    dcsaBolReferenceNumber,
    bookingReferenceNumber,
    bookingStatus,
    originPort,
    destinationPort,
    expectedDepartureDate,
    expectedArrivalAtPlaceOfDeliveryStartDate,
    shippingLine,
    vesselName,
    containerType,
    numberOfContainer,
    shippingInstructionsStatus,
    transportDocumentTypeCode,
    shipper,
    carrier,
    transportDocumentReference,
    transportDocumentSubReference,
    freightPaymentTermCode,
    receivedForShipmentDate,
    plannedArrivalDate,
    plannedDepartureDate,
    preCarriageBy,
    onCarriageBy,
    universalExportVoyageReference,
    isShippedOnBoardType,
    isToOrder,
    requestedCarrierCertificates,
    requestedCarrierClauses,
    displayedNameForPlaceOfReceipt,
    displayedNameForPortOfLoad,
    displayedNameForPlaceOfDelivery,
    displayedNameForPortOfDischarge,
    placeOfIssue,
    invoicePayableAt,
    utilizedTransportEquipments,
    isCarriersAgentAtDestinationRequired,
    documentParties,
    partyContactDetails,
    isCargoDeliveredInICS2Zone,
    exportLicense,
    importLicense,
    consignmentItems,
    isHouseBillOfLadingsIssued,
    references,
    customsReference,
    advanceManifestFilings,
    houseBillofLading,
    shipperSignature,
    carrierSignature,

    dcsaBlNumber,
    carrierClause,
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
    carrier_lei,
    carrier_contact_email,
    carrier_contact_phone,

    notify_name,
    notify_contact_name,
    notify_address,
    notify_lei,
    notify_contact_email,
    notify_contact_phone,

    other_name,
    other_contact_name,
    other_address,
    other_lei,
    other_contact_email,
    other_contact_phone,

    blockchainName,
    mintTxHash,
    carrier_signer_place,
    exporter_signer_place,
    shippingBillNo,

    invoiceNumber,
    invoiceDate,
    sealNumber,
    humidity,
    ventilation,
    tokenRegistryAddress,

    currency,
    consignment_containerReeferType,

    exporterSignIp,
    shippingCompanySignIp,
    containerSize,

    carrierSignTime,
    carrierSignIp,
    txHash,
    numberOfPackages,
    documentType,
    documentReferenceNumber,
    containerNumber,
    temperature,
    grossWeight,
    grossWeightUnit,
    valueCurrency,
    placeOfTranshipment,
    corridor,
    carrierSignLocation
  } = recipient

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 80%;
    font-family: sans-serif;
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
    border: 1px solid #333;
  `
  const tableTrLeft1 = css`
    width: 50%;
    border-spacing: 0;
  `

  const tableTd = css`
    border: 1px solid #333;
    padding: 1.5rem;
  `
  const tableTdLeft1 = css`
    width: 100%;
    padding: 5px 10px;
    border-top: 1px solid #333;
    border-spacing: 0;
  `

  const tableTdLeft1Inner = css`
    width: 50%;
    padding: 5px 10px;
    border-top: 1px solid #333;
    font-size: 12px;
  `
  const tableTdRight1Inner = css`
    width: 50%;
    padding: 5px 10px;
    border-top: 1px solid #333;
    font-size: 12px;
  `
  const tableTdOneFourth = css`
    padding: 5px 10px;
    border: 1px solid #333;
    border-top: none;
    font-size: 12px;
  `
  const tableTdOneFifth = css`
    padding: 5px 10px;
    border: none;
    font-size: 12px;
  `

  const tableTdTop = css`
    border: 1px solid #333;
    padding: 0.2em;
    font-size: 15px;
  `

  const cellTitle = css`
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    vertical-align: middle !important;
    margin: 0 0 5px;
  `
  const cellText = css`
    font-size: 12px;
    text-align: left;
    margin: 0;
    vertical-align: middle !important;
  `
  const original = css`
    text-align: center;
    font-size: 11px;
    color: #777;
    height: 25px;
  `

  const cellHeader = css`
    color: #29564b;
    text-transform: uppercase;
    font-size: 12px;
    margin: 0;
    margin-bottom: 5px;
  `
  const cellContent = css`
    font-size: 14px;
  `

  const formatDate = (date?: string) => {
    if (!date) return ''

    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const todaysDate = new Date().toString()
  const formattedTodaysDate = formatDate(todaysDate)
  const formattedDeliveryStartDate = formatDate(expectedArrivalAtPlaceOfDeliveryStartDate)
  // const formattedDeliveryEndDate = formatDate(expectedArrivalAtPlaceOfDeliveryEndDate)
  const formattedDateOfIssue = formatDate(carrierSignTime)

  function isJSONString (str: string) {
    try {
      JSON.parse(str)
      return true // It's a valid JSON string
    } catch (error) {
      return false // It's not a valid JSON string
    }
  }

  return (
    <div css={containerStyle}>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px solid #666' }}> */}
      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          padding: '0px',
          borderSpacing: '0px',
          paddingBottom: '5px',
          borderBottom: 'none',
          background: '#f6f6f6'
        }}
      >
        <tr>
          <td> </td>
          <td style={{ width: '18%' }}></td>
          <td
            style={{
              width: '30%',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 'bold',
              letterSpacing: 2,
              padding: '5px 0'
            }}
          >
            ORIGINAL
          </td>
          <td style={{ width: '2%' }}></td>
        </tr>

        <tr>
          <td style={{ width: '50%', fontSize: 22, color: '#333', fontWeight: 'bold', paddingLeft: 20 }}>
            MULTIMODAL TRANSPORT DOCUMENT
          </td>
          <td style={{ fontSize: 15 }}>MTD No.:</td>
          <td css={tableTdTop} style={{ fontFamily: 'monospace', paddingLeft: 5 }}>
            {dcsaBlNumber}
          </td>
          <td style={{ width: '2%' }}></td>
        </tr>

        <tr>
          <td></td>
          <td style={{ fontSize: 15 }}>Shipment Reference No.:</td>
          <td css={tableTdTop} style={{ fontFamily: 'monospace', paddingLeft: 5 }}>
            {shippingInstructionsReference}
          </td>
          <td style={{ width: '2%' }}></td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderSpacing: '0px',
          borderBottomWidth: '1px'
        }}
      >
        <tr>
          <td style={{ width: '50%' }}>
            <table style={{ width: '100%', borderRight: '1px solid #333', borderSpacing: '0px' }}>
              <tr css={tableTrLeft1}>
                <td colSpan={2} css={tableTdLeft1} style={{ borderTop: 0 }}>
                  <div style={{ minHeight: '100px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>
                      Consignor
                      <br />
                    </h6>
                    <p css={cellText}>
                      {exporterName}
                      <br />
                      {exporterCompanyName}
                      <br />
                      {exporterAddress}
                      <br />
                      {exporterEmail}
                      <br />
                      {exporterPhone}
                      <br />
                      {exporterLei}
                    </p>
                  </div>
                </td>
              </tr>
              <tr css={tableTrLeft1}>
                <td colSpan={2} css={tableTdLeft1}>
                  <div style={{ minHeight: '100px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Consignee (or order)</h6>
                    <p css={cellText}>
                      {importerName}
                      <br />
                      {importerCompanyName}
                      <br />
                      {importer_address}
                      <br />
                      {importer_email}
                      <br />
                      {importer_phone}
                      <br />
                      {importer_lei}
                    </p>
                  </div>
                </td>
              </tr>
              <tr css={tableTrLeft1}>
                <td colSpan={2} css={tableTdLeft1}>
                  <div style={{ minHeight: '100px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Notify Party</h6>
                    <p css={cellText}>
                      {notify_contact_name}
                      <br />
                      {notify_name}
                      <br />
                      {notify_address}
                      <br />
                      {notify_contact_email}
                      <br />
                      {notify_contact_phone}
                      <br />
                      {notify_lei}
                    </p>
                  </div>
                </td>
              </tr>
              <tr css={tableTrLeft1}>
                <td css={tableTdLeft1Inner}>
                  <div style={{ minHeight: '40px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Place of Acceptance</h6>
                    <p css={cellText}>{carrier_signer_place}</p>
                  </div>
                </td>
                <td css={tableTdRight1Inner}>
                  <div style={{ minHeight: '40px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Date of Acceptance</h6>
                    <p css={cellText}>{formattedTodaysDate}</p>
                  </div>
                </td>
              </tr>
              <tr css={tableTrLeft1}>
                <td css={tableTdLeft1Inner}>
                  <div style={{ minHeight: '40px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Port of Loading</h6>
                    <p css={cellText}>{location_portOfLoading}</p>
                  </div>
                </td>
                <td css={tableTdRight1Inner}>
                  <div style={{ minHeight: '40px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Port of Discharge</h6>
                    <p css={cellText}>{location_portOfDischarge}</p>
                  </div>
                </td>
              </tr>
              <tr css={tableTrLeft1}>
                <td colSpan={2} css={tableTdLeft1}>
                  <div style={{ minHeight: '40px', fontSize: '12px' }}>
                    <h6 css={cellTitle}>Vessel & Voyage No</h6>
                    <p css={cellText}>
                      {transport_vesselName} / {transport_IMOvesselNumber}
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>

          <td style={{ width: '50%' }}>
            <div style={{ textAlign: 'center' }}>
              {cciLogo && (
                <img
                  src={cciLogo}
                  alt='company logo'
                  style={{
                    marginBottom: '2px',
                    marginTop: '2px',
                    maxWidth: '250px',
                    maxHeight: 'auto',
                    objectFit: 'contain'
                  }}
                />
              )}
              <h6 style={{ margin: 0, fontSize: 18 }}>CCI Worldwide Logistics Private Limited</h6>
              <span style={{ fontSize: 12, fontWeight: 'bold' }}>
                (* Formerly known as Avvashya CCI Logistics Private Limited)
              </span>
              <br />
              <span style={{ fontSize: 14 }}>
                205, 2nd Floor, Hyde Park, Saki Vihar Road, Chandivali,
                <br />
                Andheri(E), Mumbai - 400072, INDIA. <br />
                Tel: +91 22 6865 0800 &nbsp; CIN: U74900MH2015PTC161865
              </span>
              <br />
              <br />
              <h6 style={{ margin: 0, fontSize: 18, marginBottom: 5 }}>Reg. No. MTO/DGS/1627/NOV/2025</h6>
              <span style={{ fontSize: 16 }}>
                FMC registration number <b>026915</b>
              </span>
              <p style={{ fontSize: 11 }}>
                Taken in charge in apparently good condition herein at the place of receipt for transport and delivery
                as mentioned above, unless otherwise stated. The MTO in accordance with the provisions contained in the
                MTD undertakes to perform or to procure the performance of the multimodal transport from the place at
                which the goods are taken in charge, to the place designated for delivery and assumes responsibility for
                such transport.
              </p>
              <p style={{ fontSize: 11 }}>
                One of the MTD(s) must be surrendered, duly endorsed in exchange for the goods. In witness whereof the
                original MTD of this tenor and date have been signed in the number indicated below one of which being
                accomplished the other(s) to be void.
              </p>
            </div>
          </td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderSpacing: '0px',
          borderTop: 0,
          borderBottom: 0
        }}
      >
        <tr>
          <td css={tableTdOneFourth} style={{ borderLeftWidth: 0 }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Place of Delivery</h6>
              <p css={cellText}>{location_placeOfDelivery}</p>
            </div>
          </td>
          <td css={tableTdOneFourth} style={{ borderLeftWidth: 0 }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Date or period of Delivery</h6>
              <p css={cellText}>{formattedDeliveryStartDate}</p>
            </div>
          </td>
          <td css={tableTdOneFourth} style={{ borderLeftWidth: 0 }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Modes means of transport</h6>
              <p css={cellText}>{onCarriageBy}</p>
            </div>
          </td>
          <td css={tableTdOneFourth} style={{ borderLeftWidth: 0, borderRightWidth: 0 }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Routes / place of Transhipment (if any)</h6>
              <p css={cellText}>{placeOfTranshipment}</p>
            </div>
          </td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderSpacing: '0px',
          borderTop: 0,
          borderBottom: 0
        }}
      >
        <tr>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <h6 css={cellTitle}>Container No.(s)</h6>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <h6 css={cellTitle}>Marks and Numbers</h6>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '40%', borderBottom: '1px dotted #777' }}>
            <h6 css={cellTitle} style={{ textAlign: 'center' }}>
              No of packages, Kinds of Packages <br /> General Description of Goods said to contain
            </h6>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <h6 css={cellTitle}>Gorss Weight(s)</h6>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <h6 css={cellTitle}>Measurement</h6>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #666' }}>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <p css={cellText}>{containerNumber}</p>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <p css={cellText}>
              {containerType}/{numberOfContainer}
            </p>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '40%' }}>
            <div style={{ textAlign: 'center' }}>
              <p css={cellText}>
                {numberOfPackages && <>{numberOfPackages}&nbsp;packages,&nbsp;</>}
                HS Code: {goods_HSCode}, {goods_descriptionOfGoods}
              </p>
            </div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <p css={cellText}>
              {grossWeight}&nbsp;{grossWeightUnit}
            </p>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <p css={cellText}>{containerSize}</p>
          </td>
        </tr>

        <tr>
          <td colSpan={5} css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '100%' }}>
            <div style={{ textAlign: 'center', marginTop: 40, color: '#777' }}>
              Particulars above furnished by consignor/consignee
            </div>
          </td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          borderLeft: '2px solid #333',
          borderRight: '2px solid #333',
          borderSpacing: '0px'
        }}
      >
        <tr>
          <td css={tableTdOneFifth} style={{ border: '1px solid #333', borderLeft: 'none' }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}> Delivery Agent</h6>
              <p css={cellText}>{carrier_name}</p>
            </div>
          </td>

          <td css={tableTdOneFifth} style={{ border: '1px solid #333', borderLeft: 'none', borderRight: 'none' }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}> Freight Amount</h6>
              <p css={cellText}>
                {currency} {valueCurrency}
              </p>
            </div>
          </td>

          <td css={tableTdOneFifth} style={{ border: '1px solid #333', borderRight: 'none' }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Number of Original MTD</h6>
              <p css={cellText}> </p>
            </div>
          </td>

          <td css={tableTdOneFifth} style={{ border: '1px solid #333', borderRight: 'none' }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Place and date of issue</h6>
              <p css={cellText}>
                {placeOfIssue} / {formattedDateOfIssue}
                <br />
                {}{' '}
              </p>
            </div>
          </td>

          <td css={tableTdOneFifth} style={{ border: '1px solid #333', borderRight: 'none' }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>
                Freight payable at
                <br />
                by consignee / consignor
              </h6>
              <p css={cellText}>{invoicePayableAt}</p>
            </div>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderTopWidth: 0,
          borderSpacing: '0px'
        }}
      >
        <tr>
          <td css={tableTd} style={{ width: '50%', borderWidth: 0 }}>
            <div
              style={{
                border: '1px solid #336',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#d0eef6'
              }}
            >
              <h6 css={cellHeader}> Electronic Bill of Lading</h6>
              <p css={cellHeader} style={{ marginTop: 5 }}>
                This is an Electronic Original Bill of Lading . The authenticity of this document may be verified
                at&nbsp;{' '}
                <a
                  href='https://dev.verify.credore.xyz/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'rgb(6, 70, 98)', textDecoration: 'none' }}
                >
                  <b>www.dev.verify.credore.xyz</b>
                </a>
              </p>
              <div style={{ padding: '0.75rem', alignItems: 'center' }}>
                <img
                  src='https://www.credore.xyz/assets/images/Logo.png'
                  alt='credore stamp'
                  style={{ height: '2em', width: 'auto' }}
                />
              </div>
              <p css={cellHeader}>
                Document Id:&nbsp;
                <b>{dcsaBlNumber}</b>
              </p>

              <p css={cellHeader}>
                Network Name:&nbsp;
                <b>{blockchainName}</b>
              </p>
              <p css={cellHeader}>
                Issued electronically on:&nbsp;
                <b>{formattedDateOfIssue}</b>
              </p>
            </div>
          </td>

          <td css={tableTd} style={{ width: '50%', borderWidth: 0, borderLeftWidth: 1 }}>
            {/* <div style={{ minHeight: 40 }}> */}
            <h6 css={cellTitle}> For CCI Worldwide Logistics Private Limited</h6>
            <p css={cellHeader}>Digitally Signed By</p>

            <div style={{ marginLeft: 20 }}>
              <h6 css={cellHeader}> {carrier_contact_name}</h6>

              <img src={signature} alt='carrier signature' style={{ height: '5em', width: 'auto' }} />

              <div css={cellContent} style={{ marginTop: 0 }}>
                <p css={cellHeader}>
                  Signing Date & Time:&nbsp;<b>{formattedDateOfIssue}</b>
                </p>
                <p css={cellHeader}>
                  Place of Signing:&nbsp;<b>{placeOfIssue}</b>
                </p>
                <p css={cellHeader}>
                  Signer IP Address:&nbsp;<b>{carrierSignIp}</b>
                </p>
              </div>
            </div>

            <h6 css={cellTitle} style={{ marginTop: 10 }}>
              Authorised Signatory
            </h6>
            {/* </div> */}
          </td>
        </tr>
      </table>

      {/* <tr>
          <td colSpan={2} css={tableTdOneFifth} style={{ borderRight: '1px solid #333', width: '50%' }}>
            <div style={{ minHeight: 40 }}></div>
          </td>

          <td css={tableTdOneFifth} style={{ width: '16.33%' }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>
                Freight payable at
                <br />
                by consignee / consignor
              </h6>
              <p css={cellText}>{invoicePayableAt?.UNLocationCode}</p>
            </div>
          </td>

          <td
            colSpan={2}
            css={tableTdOneFifth}
            style={{ borderLeft: '1px solid #333', borderBottom: 'none', width: '32.66%' }}
          >
            <div style={{ minHeight: 40 }}>
              {' '}
              <h6 css={cellTitle}>For CCI Worldwide Logistics Private Limited</h6>
              <div css={cellText} style={{ marginTop: 10 }}>
                <p css={cellHeader}>Digitally Signed By</p>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td
            colSpan={3}
            css={tableTdOneFifth}
            style={{ borderTop: '1px solid #333', borderRight: 'none', width: '66.32%' }}
          ></td>

          <td colSpan={2} css={tableTdOneFifth} style={{ borderLeft: '1px solid #333' }}>
            <div style={{ marginLeft: 20 }}>
              <h6 css={cellHeader}> {carrier_contact_name}</h6>

              <img src={signature} alt='carrier signature' style={{ height: '5em', width: 'auto' }} />

              <div css={cellText} style={{ marginTop: 0 }}>
                <p css={cellHeader}>
                  {' '}
                  Date & Time:&nbsp;<b>{formattedDateOfIssue}</b>
                </p>
                <p css={cellHeader}>
                  {' '}
                  Name:&nbsp;<b>{carrier_name}</b>
                </p>
                <p css={cellText} style={{ marginTop: 10 }}>
                  Authorised Signatory
                </p>
              </div>
            </div>
          </td>
        </tr> */}
      <table
        style={{
          width: '100%',
          borderSpacing: '0px'
        }}
      >
        <tr>
          <td colSpan={5} css={tableTdOneFifth} style={{ textAlign: 'center' }}>
            Weight and measurement of container not to be included <br />
            (TERMS CONTINUED ON BACK HEREOF)
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'black',
          padding: '0px',
          borderSpacing: '0px',
          marginTop: '2rem'
        }}
      >
        <h6 style={{ padding: '5px', margin: '10px 0 0 20px', fontSize: 14 }}>CCI Terms & Conditions</h6>
        <img src={CCITerms} alt='bl t&c' style={{ width: '100%' }} />
      </table>

      <table
        style={{
          width: '100%',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'black',
          padding: '0px',
          borderSpacing: '0px',
          marginTop: '2rem'
        }}
      >
        <h6 style={{ padding: '5px', margin: '10px 0 0 20px', fontSize: 14 }}>Credore eBL Terms & Conditions</h6>
        <img src={corridor === 'SG' ? CredoreTermsSG : CredoreTermsUK} alt='bl t&c' style={{ width: '100%' }} />
      </table>

      {/* <div>
        <h6 style={{ padding: '5px', marginBottom: 0 }}>CCI Terms & Conditions</h6>
        <iframe
          // src={CCITerms}
          src='/CCI-Terms.pdf'
          width='100%'
          height='600px'
          title='PDF Viewer'
          style={{
            border: 'none',
            outline: 'none',
            display: 'block'
          }}
        />
      </div> */}

      {/* <div>
        <h6 style={{ padding: '5px', marginBottom: 0 }}>Credore eBL Terms & Conditions</h6>
        <iframe
          // src={CredoreTerms}
          src='/Credore_eBL_Singapore_Terms_and_Conditions.pdf'
          width='100%'
          height='600px'
          title='PDF Viewer'
          style={{
            border: 'none',
            outline: 'none',
            display: 'block'
          }}
        />
      </div> */}

      <table
        style={{
          width: '100%',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '5px 0' }}>
          <div>
            <b>Blockchain:</b>&nbsp;{blockchainName === 'xinfin' ? 'XDC Network' : 'XDC Network'}
          </div>
        </div>
      </table>
    </div>
  )
}
