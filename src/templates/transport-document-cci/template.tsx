import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import moment from 'moment'
import { CargoDocument } from './types'
import { css } from '@emotion/core'
import eBl from './eBL_t&c.png'
import cciLogo from '../../../public/cci-logo.png'
// import CCITerms from '../../../public/CCI-Terms.pdf'
// import CredoreTerms from '../../../public/Credore_eBL_Singapore_Terms_and_Conditions.pdf'

const PAYMENT_METHODS = [
  { value: 'A', label: 'Payment in Cash (A)' },
  { value: 'B', label: 'Payment by Credit Card (B)' },
  { value: 'C', label: 'Payment by Cheque (C)' },
  { value: 'D', label: 'Other e.g. Direct Debit to Cash Account (D)' },
  { value: 'H', label: 'Electronic Funds Transfer (H)' },
  { value: 'Y', label: 'Account Holder with Carrier (Y)' },
  { value: 'Z', label: 'Not Pre-paid (Z)' }
]

export const CCICargoDocumentTemplate: FunctionComponent<TemplateProps<CargoDocument>> = ({ document }) => {
  const recipient = document.recipient ?? {}
  const {
    primaryLogo,
    dcsaBlNumber,
    shippingInstructionsReference,

    date_actualDateOfPlaceOfReceipt,

    goods_HSCode,
    goods_descriptionOfGoods,
    goods_numberOfPackages,
    location_placeOfDelivery,
    location_placeOfReceipt,
    location_portOfDischarge,
    location_portOfLoading,

    importerCompanyName,
    importerName,
    importer_email,
    importer_phone,
    importer_address,
    importer_lei,

    exporterCompanyName,
    exporterAddress,
    exporterName,
    exporterEmail,
    exporterPhone,

    carrier_name,
    carrier_contact_name,
    carrier_address,
    carrier_contact_email,
    carrier_contact_phone,

    other_name,
    other_contact_name,
    other_address,
    other_contact_email,
    other_contact_phone,
    other_lei,

    notify_name,
    notify_contact_name,
    notify_address,
    notify_contact_email,
    notify_contact_phone,
    notify_lei,

    carrier_signer_place,
    blockchainName,
    txHash,
    carrierSignIp,
    carrierSignTime,
    sealNumber,
    humidity,
    ventilation,
    exporterLei,
    carrier_lei,
    containerType,
    containerSize,
    onCarriageBy,
    preCarriageBy,
    numberOfPackages,
    documentType,
    documentReferenceNumber,
    expectedArrivalAtPlaceOfDeliveryStartDate,
    containerNumber,
    temperature,
    grossWeight,
    grossWeightUnit,
    numberOfContainer,
    invoicePayableAt,
    placeOfIssue,
    transport_vesselName,
    transport_IMOvesselNumber
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
    padding: 1em;
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
  `

  const cellTitle = css`
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    vertical-align: middle !important;
    margin: 0 0 5px 0;
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
          paddingBottom: '10px',
          borderBottom: 'none'
        }}
      >
        <tr css={tableTr}>
          <td> </td>
          <td style={{ width: '20%' }}></td>
          <td style={{ width: '28%', textAlign: 'center', marginRight: '20px' }}>ORIGINAL</td>
          <td style={{ width: '2%' }}></td>
        </tr>

        <tr css={tableTr}>
          <td style={{ width: '50%', fontSize: 24, color: '#333', fontWeight: 'bold', padding: 5 }}>
            MULTIMODAL TRANSPORT DOCUMENT
          </td>
          <td>MTD No.:</td>
          <td css={tableTdTop}>{dcsaBlNumber}</td>
          <td style={{ width: '2%' }}></td>
        </tr>

        <tr css={tableTr}>
          <td></td>
          <td>Shipment Reference No.:</td>
          <td css={tableTdTop}>{documentReferenceNumber}</td>
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
                    <p css={cellText}>{carrier_name}</p>
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
        <tr css={tableTr}>
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
              <p css={cellText}>Ocean</p>
            </div>
          </td>
          <td css={tableTdOneFourth} style={{ borderLeftWidth: 0, borderRightWidth: 0 }}>
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Routes / place of Transhipment (if any)</h6>
              <p css={cellText}>N/A</p>
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
            <div style={{ fontWeight: 'bold' }}>Container No.(s)</div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <div style={{ fontWeight: 'bold' }}>Marks and Numbers</div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '40%', borderBottom: '1px dotted #777' }}>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              No of packages, Kinds of Packages <br /> General Description of Goods said to contain
            </div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <div style={{ fontWeight: 'bold' }}>Gorss Weight(s)</div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%', borderBottom: '1px dotted #777' }}>
            <div style={{ fontWeight: 'bold' }}>Mesaurement</div>
          </td>
        </tr>

        <tr style={{ borderTop: '1px solid #666' }}>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <div>{containerNumber}</div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <div> </div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '40%' }}>
            <div style={{ textAlign: 'center' }}>
              HS Code: {goods_HSCode}, {goods_descriptionOfGoods}
            </div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <div>
              {grossWeight}&nbsp;{grossWeightUnit}
            </div>
          </td>
          <td css={tableTdOneFifth} style={{ borderLeftWidth: 0, width: '15%' }}>
            <div> </div>
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
          border: '2px solid #333',
          borderSpacing: '0px',
          borderTop: 0
        }}
      >
        <tr>
          <td
            colSpan={2}
            css={tableTdOneFifth}
            style={{ border: '1px solid #333', borderBottom: 'none', borderLeft: 'none', width: '50%' }}
          >
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}> Delivery Agent</h6>
              <p css={cellText}> </p>
            </div>
          </td>

          <td
            colSpan={1}
            css={tableTdOneFifth}
            style={{ border: '1px solid #333', borderLeft: 'none', borderRight: 'none', width: '16.33%' }}
          >
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}> Freight Amount</h6>
              <p css={cellText}> </p>
            </div>
          </td>

          <td
            colSpan={1}
            css={tableTdOneFifth}
            style={{ border: '1px solid #333', borderRight: 'none', width: '16.33%' }}
          >
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Number of Original MTD</h6>
              <p css={cellText}> </p>
            </div>
          </td>

          <td
            colSpan={1}
            css={tableTdOneFifth}
            style={{ border: '1px solid #333', borderRight: 'none', width: '16.33%' }}
          >
            <div style={{ minHeight: 40 }}>
              <h6 css={cellTitle}>Place and date of issue</h6>
              <p css={cellText}> </p>
            </div>
          </td>
        </tr>

        <tr>
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
              <p css={cellText}> </p>
            </div>
          </td>

          <td
            colSpan={2}
            css={tableTdOneFifth}
            style={{ borderLeft: '1px solid #333', borderBottom: 'none', width: '32.66%' }}
          >
            <div style={{ minHeight: 40 }}> For CCI Worldwide Logistics Private Limited</div>
          </td>
        </tr>

        <tr>
          <td
            colSpan={3}
            css={tableTdOneFifth}
            style={{ borderTop: '1px solid #333', borderRight: 'none', width: '66.32%' }}
          ></td>

          <td colSpan={2} css={tableTdOneFifth} style={{ borderLeft: '1px solid #333' }}>
            <div style={{ minHeight: 40 }}>
              <br />
              <br />
              <br />
              <br />
              (Authorised Signatory)
            </div>
          </td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          borderSpacing: '0px'
        }}
      >
        <tr>
          <td colSpan={5} css={tableTdOneFifth} style={{ textAlign: 'center' }}>
            Weight and measurement of container not to be included <br />
            (TERMS CONRINUED ON BACK HEREOF)
          </td>
        </tr>
      </table>
      <table
        style={{
          width: '100%',
          // border: '2px solid #333',
          border: 'none',
          // borderTop: '1px',
          borderBottom: '0',
          padding: '0px',
          borderSpacing: '0px'
        }}
      ></table>
      <div>
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
      </div>

      <div>
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
      </div>

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
