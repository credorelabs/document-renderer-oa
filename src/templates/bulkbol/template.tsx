import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import { css } from '@emotion/core'
// import { CocTemplateCertificate } from "../samples/cooTemplate";
import { BulkBOLData } from './types'
import eBl from './eBL_t&c.png'
import eBLBg from './paper-bg.png'
import signature from './signature.png'
import carrierLogo from './carrier-logo.png'
import moment from 'moment'

export const BulkEblTemplate: FunctionComponent<TemplateProps<BulkBOLData>> = ({ document }) => {
  const {
    recipient,
    bolProof,
    exporter_sign_time,
    exporterEmail,
    exporterPhone,
    exporterAddress,
    exporterName,
    exporterCompanyName,

    shipping_company_sign_time,
    shipping_company_signer,
    notify_name,
    notify_contact_name,
    notify_address,
    notify_contact_email,
    notify_contact_phone,
    exporter_signer_place,

    exporterSignIp,
    shippingCompanySignIp,
    currency
  } = document

  console.log('recipient', recipient)
  // const recipient = document.recipient
  const scac = recipient?.scac
  const parties = recipient?.parties
  const shipper = parties?.shipper
  const carrier = parties?.carrier
  const consignee = parties?.consignee
  const recipientNotifyParty = parties?.notifyParty

  const vesselName = recipient?.vesselName
  const dateOfIssue = recipient?.dateOfIssue
  const measurement = recipient?.measurement
  const documentType = recipient?.documentType
  const placeOfIssue = recipient?.placeOfIssue
  const portOfLoading = recipient?.portOfLoading
  const shippedOnDeck = recipient?.shippedOnDeck
  const blockchainName = recipient?.blockchainName
  const documentNumber = recipient?.documentNumber
  const freightPayable = recipient?.freightPayable
  const cargoWeightUnit = recipient?.cargoWeightUnit
  const measurementUnit = recipient?.measurementUnit
  const portOfDischarge = recipient?.portOfDischarge
  const referenceNumber = recipient?.referenceNumber
  const cargoDescription = recipient?.cargoDescription
  const cargoGrossWeight = recipient?.cargoGrossWeight
  const charterPartyDate = recipient?.charterPartyDate
  const numberOfOriginals = recipient?.numberOfOriginals
  const shippedOnBoardDate = recipient?.shippedOnBoardDate
  const termsAndConditions = recipient?.termsAndConditions
  const carrier_signer_place = recipient?.carrier_signer_place
  const tokenRegistryAddress = recipient?.tokenRegistryAddress

  const displayedExporterName = exporterName || shipper?.name
  const displayedExporterAddress = exporterAddress || shipper?.address
  const displayedCarrierName = shipping_company_signer || carrier?.name
  const displayedNotifyName = notify_name || recipientNotifyParty?.name
  const displayedNotifyAddress = notify_address || recipientNotifyParty?.address
  const displayedScac = scac || document.recipient?.scac
  // const displayedGoodsDescription = goods_descriptionOfGoods || cargoDescription

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
                {displayedCarrierName}
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
                  <span style={{ fontSize: '1.25rem', color: '#FFF' }}>&nbsp;(ELECTRONIC)</span>
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
                B/L No:
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
                Reference No:{' '}
              </td>
            </tr>
            <tr css={tableTr}>
              <td style={{ border: '1px solid #29564b', borderRight: 'none', padding: '.25em' }}>{documentNumber}</td>
              <td style={{ border: '1px solid #29564b', padding: '.25em' }}>{referenceNumber}</td>
            </tr>
          </table>
        </div>
      </div>

      <table style={{ width: '100%', border: '2px solid #333', padding: '0px', borderSpacing: '0px' }}>
        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 1.SHIPPER / EXPORTER</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {exporterCompanyName || shipper?.name},<br />
              {displayedExporterName},<br />
              {displayedExporterAddress}
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
              {consignee?.name || 'TO ORDER'}
              {consignee?.address && (
                <>
                  <br />
                  {consignee.address}
                </>
              )}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd}>
            <h6 css={cellHeader}> 3.Frieght payable as per charter party dated</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              <b css={cellTitle}>Charter Party dated:</b> {formattedCharterPartyDate}
            </div>
          </td>
          <td css={tableTd}>
            <h6 css={cellHeader}> 4.Notify Party</h6>
            <div css={cellContent} style={{ marginLeft: 15 }}>
              {displayedNotifyName}
              {displayedNotifyAddress && (
                <>
                  ,<br /> {displayedNotifyAddress}
                </>
              )}
              {notify_contact_email && (
                <>
                  , <br />
                  Email:&nbsp;{notify_contact_email}
                </>
              )}
              {notify_contact_phone && (
                <>
                  , <br />
                  Phone:&nbsp;{notify_contact_phone}
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
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 0
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '50%' }}>
            <h6 css={cellHeader} style={{ marginBottom: 0 }}>
              {' '}
              10.Description of Goods
            </h6>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader} style={{ marginBottom: 0 }}>
              {' '}
              11.Cargo Gross Weight
            </h6>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader} style={{ marginBottom: 0 }}>
              {' '}
              12.Measurement
            </h6>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '50%' }}>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              <b css={cellTitle}>Goods description:</b>&nbsp;
              {cargoDescription}
              {/* {parsedGoodsDescription &&
                parsedGoodsDescription.map((item, index) => (
                  <p key={`${item.hsCode || 'goods'}-${index}`}>
                    HS Code: {item?.hsCode} - {item?.desc}
                  </p>
                ))}
              {!parsedGoodsDescription && goods_descriptionOfGoods} */}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {cargoGrossWeight} {cargoWeightUnit}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {measurement} {measurementUnit}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={3}>
            <h6 css={cellHeader}> 13.Shipped on Deck(If Applicable)</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {isShippedOnDeck ? 'Yes' : 'None'}
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
            <h6 css={cellHeader}> 14.Shipped on Board Date</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {formattedShippedOnBoardDate}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 15.Place of Issue</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {placeOfIssue}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 16.Date of Issue</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {formattedDateOfIssue}
            </div>
          </td>

          <td css={tableTd} style={{ width: '25%' }}>
            <h6 css={cellHeader}> 17.Number of Original B/Ls</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {numberOfOriginals}
            </div>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} colSpan={4}>
            <h6 css={cellHeader}> 18.SCAC (Applicable for Shipments to USA)</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              {displayedScac}
            </div>
          </td>
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
            <h6 css={cellHeader}> 19.Signed By</h6>
            <div css={cellContent} style={{ marginLeft: 20 }}>
              <b css={cellTitle}> For and on behalf of the Carrier</b>
            </div>
            <div css={cellContent} style={{ marginLeft: 20, marginTop: 10 }}>
              <h6 css={cellHeader}> {displayedCarrierName}</h6>
            </div>
            <img src={signature} alt='carrier signature' style={{ height: '5em', width: 'auto', border: 'none' }} />
            <div css={cellContent} style={{ marginLeft: 20, marginTop: 0 }}>
              <b css={cellTitle}> Digitally signed on: </b>&nbsp; {formattedDateOfIssue}
              <br />
              <b css={cellTitle}> Name: </b>&nbsp; {displayedCarrierName} <br />
              <b css={cellTitle}> Title:&nbsp; </b>Authorised Signatory
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
              <div style={{ padding: '1rem', alignItems: 'center' }}>
                <img
                  src='https://www.credore.xyz/assets/images/Logo.png'
                  alt='credore stamp'
                  style={{ height: '3em', width: 'auto' }}
                />
              </div>
              <b css={cellTitle}>Document Id: </b>&nbsp;{documentNumber} <br />
              <b css={cellTitle}>Blockchain Name: </b>&nbsp;{blockchainName} <br />
              <b css={cellTitle}>Issued electronically on: </b>&nbsp;{formattedDateOfIssue} <br />
            </div>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #333',
          padding: '0px',
          borderSpacing: '0px',
          marginTop: 20
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ textAlign: 'justify' }}>
            <h6 css={cellHeader} style={{ marginBottom: 5, textAlign: 'center' }}>
              20.Terms and Conditions
            </h6>
            <ul>
              <li css={cellContent}>
                The Carrier shall be bound by the terms and conditions of the Charter Party dated as mentioned above,
                including any amendments thereto.
              </li>
              <li css={cellContent}>
                The Carrier shall not be liable for any loss of or damage to the cargo howsoever arising, or for delay
                in delivery, occasioned by any cause whatsoever, including but not limited to Acts of God, dangers of
                the sea, perils of navigation, strikes, lock-outs, or any other causes beyond the Carrier's control.
              </li>
              <li css={cellContent}>
                The Merchant acknowledges that the Carrier shall be entitled to rely upon any clause, liberty,
                privilege, exemption or immunity contained in the Charter Party.
              </li>
              <li css={cellContent}>
                All claims, disputes and matters arising under or in connection with this Bill of Lading shall be
                governed by and construed in accordance with the law and jurisdiction of the courts as per the Charter
                Party.
              </li>
              <li css={cellContent}>
                This Bill of Lading, any dispute or claim arising out of or in connection with it, and any
                non-contractual obligations arising out of or in connection with it, are subject to the jurisdiction of
                the courts as per the Charter Party.
              </li>
              <li css={cellContent}>
                The fact that this is an Electronic Bill of Lading shall not affect any rights or obligations of the
                parties as set out in the Charter Party.
              </li>
            </ul>
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
        <img src={eBl} alt='bl t&c' style={{ width: '100%' }} />
      </table>
    </div>
  )
}
