import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { css } from '@emotion/core'
// import { CocTemplateCertificate } from "../samples/cooTemplate";
import { BulkBOLData } from './types'
import eBl from './eBL_t&c.png'
import eBLBg from './paper-bg.png'
import signature from './digital-signature.png'
import carrierLogo from './carrier-logo.png'
import moment from 'moment'
import CredoreTermsSG from '../../../public/Credore_eBL_Terms_and_Conditions_SG.png'
import CredoreTermsUK from '../../../public/Credore_eBL_Terms_and_Conditions_UK.png'

export const BulkEblTemplate: FunctionComponent<TemplateProps<BulkBOLData>> = ({ document }) => {
  const { recipient, bolProof, exporter_sign_time, exporterSignIp, shippingCompanySignIp, currency } = document

  console.log('recipient', recipient)
  // const recipient = document.recipient
  const signerIp = recipient?.ip
  const scac = recipient?.scac
  const voyage = recipient?.voyage

  const parties = recipient?.parties
  const shipper = parties?.shipper
  const carrier = parties?.carrier
  const consignee = parties?.consignee
  const recipientNotifyParty = parties?.notifyParty

  const corridor = recipient?.corridor
  const goodsType = recipient?.goodsType
  const netWeight = recipient?.netWeight
  const vesselName = recipient?.vesselName
  const dateOfIssue = recipient?.dateOfIssue
  const grossWeight = recipient?.grossWeight
  const measurement = recipient?.measurement
  const documentType = recipient?.documentType
  const placeOfIssue = recipient?.placeOfIssue
  const portOfLoading = recipient?.portOfLoading
  const shippedOnDeck = recipient?.shippedOnDeck
  const volumeMeasure = recipient?.volumeMeasure
  const blockchainName = recipient?.blockchainName
  const documentNumber = recipient?.documentNumber
  const freightPayable = recipient?.freightPayable
  const placeOfReceipt = recipient?.placeOfReceipt
  const totalNetWeight = recipient?.totalNetWeight
  const cargoWeightUnit = recipient?.cargoWeightUnit
  const documentVersion = recipient?.documentVersion
  const marksAndNumbers = recipient?.marksAndNumbers
  const measurementUnit = recipient?.measurementUnit
  const placeOfDelivery = recipient?.placeOfDelivery
  const portOfDischarge = recipient?.portOfDischarge
  const referenceNumber = recipient?.referenceNumber
  const cargoDescription = recipient?.cargoDescription
  const cargoGrossWeight = recipient?.cargoGrossWeight
  const charterPartyDate = recipient?.charterPartyDate
  const totalGrossWeight = recipient?.totalGrossWeight
  const numberOfOriginals = recipient?.numberOfOriginals
  const shippedOnBoardDate = recipient?.shippedOnBoardDate
  const termsAndConditions = recipient?.termsAndConditions
  const totalVolumeMeasure = recipient?.totalVolumeMeasure
  const carrierSignerPlace = recipient?.carrier_signer_place
  const tokenRegistryAddress = recipient?.tokenRegistryAddress
  const transhipmentLocation = recipient?.transhipmentLocation
  const transportationServiceRequirement = recipient?.transportationServiceRequirement

  const exporterName = shipper?.organizationName || shipper?.contactName
  const exporterAddress = shipper?.address
  const exporterEmail = shipper?.email
  const exporterPhone = shipper?.phone
  const exporterLeiNo = shipper?.leiNo
  const totalNumberOfPackages = recipient?.totalNumberOfPackages

  const carrierName = carrier?.organizationName || carrier?.contactName
  const carrierAddress = carrier?.address
  const carrierEmail = carrier?.email
  const carrierPhone = carrier?.phone
  const carrierLeiNo = carrier?.leiNo

  const notifyName = recipientNotifyParty?.organizationName || recipientNotifyParty?.contactName
  const notifyAddress = recipientNotifyParty?.address
  const notifyEmail = recipientNotifyParty?.email
  const notifyPhone = recipientNotifyParty?.phone
  const notifyLeiNo = recipientNotifyParty?.leiNo

  const consigneeName = consignee?.organizationName || consignee?.contactName
  const consigneeAddress = consignee?.address
  const consigneeEmail = consignee?.email
  const consigneePhone = consignee?.phone
  const consigneeLeiNo = consignee?.leiNo

  const displayedScac = scac || document.recipient?.scac
  const displayedGoodsDescription = cargoDescription

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 75%;
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
    border: 1px solid #ccc;
    padding: 0.5em;
    vertical-align: top;
    font-size: 14px;
    font-family: monospace;
    width: 50%;
  `
  const cellHeader = css`
    color: #29564b;
    text-transform: uppercase;
    font-size: 15px;
    margin: 0;
    margin-bottom: 5px;
    font-family: monospace;
  `

  const cellTitle = css`
    font-weight: bold;
    font-size: 14px;
    color: #666;
    font-family: monospace;
  `
  const cellContent = css`
    font-size: 14px;
    font-family: monospace;
  `

  // function parseGoodsDescription (value?: string): Array<{ hsCode?: string; desc?: string }> | undefined {
  //   if (!value) return undefined

  //   try {
  //     const parsedValue = JSON.parse(value.replace(/&quot;/g, '"'))
  //     return Array.isArray(parsedValue) ? parsedValue : undefined
  //   } catch (error) {
  //     return undefined
  //   }
  // }

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
  // const parsedGoodsDescription = parseGoodsDescription(goods_descriptionOfGoods)
  const isShippedOnDeck = ['yes', 'true'].includes(String(shippedOnDeck).toLowerCase())
  // const reference = referenceNumber || shippersReferenceNumber
  const displayCarrierLogo = recipient?.carrierLogo || carrierLogo

  return (
    <div css={containerStyle} style={{ background: `url(${eBLBg})`, marginTop: 20 }}>
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
        <div style={{ width: '50%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <img src={displayCarrierLogo} alt='Logo' style={{ height: '5em', width: 'auto' }} />
          {!displayCarrierLogo && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ fontSize: '2.25rem', color: '#29564b', display: 'block', textTransform: 'uppercase' }}>
                {carrierName}
              </b>
              {/* <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#29564b' }}>(ELECTRONIC)</span> */}
            </div>
          )}
        </div>
        <div
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}
        >
          {/* <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <b style={{ fontSize: '1.75rem', color: '#29564b' }}>BILL OF LADING</b>
            <span style={{ fontSize: '1.25rem', color: '#29564b' }}>(ELECTRONIC)</span>
          </div> */}
          <table style={{ width: '100%', border: '1px solid #29564b', padding: '0px', borderSpacing: '0px' }}>
            <tr css={tableTr}>
              <td
                colSpan={2}
                style={{
                  textAlign: 'center',
                  border: '1px solid #29564b',
                  padding: '.25em',
                  backgroundColor: '#29564b'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <b style={{ fontSize: '1.5rem', color: '#FFF' }}>BILL OF LADING</b>
                  <span style={{ fontSize: '1.5rem', color: '#FFF' }}>&nbsp;(ELECTRONIC)</span>
                </div>
              </td>
            </tr>
            <tr css={tableTr}>
              <td
                style={{
                  width: '50%',
                  border: '1px solid #29564b',
                  borderRight: 'none',
                  borderBottom: 'none',
                  padding: '.25em',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}
              >
                B/L No
              </td>
              <td
                style={{
                  width: '50%',
                  border: '1px solid #29564b',
                  borderBottom: 'none',
                  padding: '.25em',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}
              >
                Reference No{' '}
              </td>
            </tr>
            <tr css={tableTr}>
              <td
                style={{
                  border: '1px solid #29564b',
                  borderRight: 'none',
                  padding: '.25em',
                  fontSize: '1rem',
                  fontFamily: 'monospace'
                }}
              >
                {documentNumber}
              </td>

              <td style={{ border: '1px solid #29564b', padding: '.25em', fontSize: '1rem', fontFamily: 'monospace' }}>
                {referenceNumber}
              </td>
            </tr>
          </table>
        </div>
      </div>

      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          padding: '0px',
          borderSpacing: '0px',
          borderBottomWidth: 0,
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 1.SHIPPER / EXPORTER</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {exporterName},<br />
              {exporterAddress && (
                <>
                  , <br />
                  {exporterAddress}
                </>
              )}
              {exporterEmail && (
                <>
                  , <br />
                  {exporterEmail}
                </>
              )}
              {exporterPhone && (
                <>
                  , <br />
                  {exporterPhone}
                </>
              )}
            </div>
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 2.CONSIGNEE</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {consigneeName || 'TO ORDER'}
              {consigneeAddress && (
                <>
                  , <br />
                  {consigneeAddress}
                </>
              )}
              {consigneeEmail && (
                <>
                  , <br />
                  {consigneeEmail}
                </>
              )}
              {consigneePhone && (
                <>
                  , <br />
                  {consigneePhone}
                </>
              )}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 3.Frieght payable as per charter party dated</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              <b css={cellTitle}>Charter Party dated:</b> {moment(charterPartyDate).format('DD/MM/YYYY')}
            </div>
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 4.Notify Party</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {notifyName}
              {notifyAddress && (
                <>
                  ,<br /> {notifyAddress}
                </>
              )}
              {notifyEmail && (
                <>
                  , <br />
                  Email:&nbsp;{notifyEmail}
                </>
              )}
              {notifyPhone && (
                <>
                  , <br />
                  Phone:&nbsp;{notifyPhone}
                </>
              )}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 5.Port of Lading</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {portOfLoading}
            </div>
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 6.Port of Discharge</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {portOfDischarge}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 7.Vessel:</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {vesselName}
            </div>
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 8.Reference No.</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {referenceNumber}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <h6 css={cellHeader}> 9.B/L No.</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {documentNumber}
            </div>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '50%' }}>
            <h6 css={cellHeader}> 10.Description of Goods</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {cargoDescription}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 11.Cargo Gross Weight</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {cargoGrossWeight} {cargoWeightUnit}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 12.Measurement</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {measurement} {measurementUnit}
            </div>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderTopWidth: 0,
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 13.Place of Issue</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {placeOfIssue}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 14.Date of Issue</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {moment(dateOfIssue).format('DD/MM/YYYY')}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 15.Number of Original B/Ls</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {numberOfOriginals}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 16.Shipped on Board Date</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {moment(shippedOnBoardDate).format('DD/MM/YYYY')}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={2}>
            <h6 css={cellHeader}> 18.SCAC (Applicable for Shipments to USA)</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {displayedScac}
            </div>
          </td>

          <td css={tableTd} colSpan={2}>
            <h6 css={cellHeader}> 20.Shipped on Deck </h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {shippedOnDeck ? 'Yes' : 'No'}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 22.Document version</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              V{documentVersion}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 23.Bill of Lading total pages</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              1
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 24.Carrier</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {carrierName}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 25.Voyage</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {voyage}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 26.Locations</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}></div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 27.Transportation Service Requirement</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}></div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 28.Cargo total gross weight</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {totalGrossWeight} {cargoWeightUnit}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 29.Total number of packages </h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {totalNumberOfPackages}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 30.Type of goods </h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {goodsType}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 31.Marks and numbers</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {marksAndNumbers}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 32.Cargo net weight</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {netWeight} {cargoWeightUnit}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 34.Total measurement </h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {totalVolumeMeasure} {measurementUnit}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 34.Number of packages </h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {totalNumberOfPackages}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 35.Issued to party</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {consigneeName || 'TO ORDER'}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 36.Cargo total net weight </h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {totalNetWeight} {cargoWeightUnit}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}></td>
        </tr>
      </table>

      {/* Carrier Signature Section */}
      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          borderTopWidth: 0,
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '50%', borderRight: 'none' }}>
            <h6 css={cellHeader}> 17.Signed By</h6>
            <div style={{ marginLeft: 20 }}>
              <div css={cellContent}>
                For and on behalf of the Carrier <br />
                <b css={cellTitle} style={{ color: '#062f24', marginLeft: 10, fontSize: '1rem' }}>
                  {carrier?.contactName}
                </b>
              </div>
              <img src={signature} alt='carrier signature' style={{ height: '5em', width: 'auto' }} />

              <div css={cellContent} style={{ marginTop: 0 }}>
                <b css={cellTitle}> Signing Date & Time:</b>&nbsp;{moment(dateOfIssue).format('DD/MM/YYYY HH:mm:ss')}
                <br />
                <b css={cellTitle}> Place of Signing:</b>&nbsp;{placeOfIssue} <br />
                <b css={cellTitle}> Signer IP Address:&nbsp;</b>
                {signerIp} <br />
                <p style={{ fontStyle: 'italic' }}> Authorised Signatory</p>
              </div>
            </div>
          </td>

          <td css={tableTd} style={{ width: '50%', borderLeft: 'none' }}>
            <div
              style={{
                border: '2px solid #336',
                padding: '1rem',
                borderRadius: '10px',
                marginRight: '1rem',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#d0eef6'
              }}
            >
              <h6 css={cellHeader}> Electronic Bill of Lading</h6>
              <span css={cellContent}>
                This is an Electronic Original Bill of Lading . The authenticity of this document may be verified
                at&nbsp;
              </span>
              <a
                href='https://dev.verify.credore.xyz/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'rgb(6, 70, 98)', textDecoration: 'none' }}
              >
                <b>www.dev.verify.credore.xyz</b>
              </a>
              <div style={{ padding: '0.75rem', alignItems: 'center' }}>
                <img
                  src='https://www.credore.xyz/assets/images/Logo.png'
                  alt='credore stamp'
                  style={{ height: '2em', width: 'auto' }}
                />
              </div>
              <b css={cellTitle}>Document Id: </b>&nbsp;
              <span css={cellContent}>{documentNumber}</span>
              <br />
              <b css={cellTitle}>Blockchain Name: </b>&nbsp;
              <span css={cellContent}>{blockchainName}</span>
              <br />
              <b css={cellTitle}>Issued electronically on: </b>&nbsp;
              <span css={cellContent}>{moment(dateOfIssue).format('DD/MM/YYYY HH:mm:ss')}</span>
              <br />
            </div>
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
            <h6 css={cellHeader}> 19.Terms & Conditions</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {termsAndConditions}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={4}>
            <b css={cellTitle}>Disclaimer:</b>{' '}
            <b css={cellTitle} style={{ fontWeight: 'normal' }}>
              This document, originally existing in electronic or paper or both formats, has been converted to the
              TradeTrust-recommended format, ensuring MLETR compliance. The converted document, in compliance with
              Section 4(1) of the Electronic Trade Document Act, holds the same legal validity. Any unauthorized
              alterations or modifications are strictly prohibited. Verify its integrity and authenticity through
              approved channels.
            </b>
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
        <img
          src={corridor === 'SG' ? CredoreTermsSG : CredoreTermsUK}
          alt='Credore eBL Terms & Conditions'
          style={{ width: '100%' }}
        />
      </table>
    </div>
  )
}
