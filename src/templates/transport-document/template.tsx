import React, { FunctionComponent } from 'react'
import { TemplateProps } from '@govtechsg/decentralized-renderer-react-components'
import moment from 'moment'
import { CargoDocument } from './types'
import { css } from '@emotion/core'
import eBl from './eBL_t&c.png'
import CredoreTermsSG from '../../../public/Credore_eBL_Terms_and_Conditions_SG.png'
import CredoreTermsUK from '../../../public/Credore_eBL_Terms_and_Conditions_UK.png'
import carrierLogo from '../../../public/carrier-logo.png'
import signature from '../../../public/digital-signature.png'
import { QRCodeSVG } from 'qrcode.react'
import {
  Table,
  TableRow,
  TableCell,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'

const PAYMENT_METHODS = [
  { value: 'A', label: 'Payment in Cash (A)' },
  { value: 'B', label: 'Payment by Credit Card (B)' },
  { value: 'C', label: 'Payment by Cheque (C)' },
  { value: 'D', label: 'Other e.g. Direct Debit to Cash Account (D)' },
  { value: 'H', label: 'Electronic Funds Transfer (H)' },
  { value: 'Y', label: 'Account Holder with Carrier (Y)' },
  { value: 'Z', label: 'Not Pre-paid (Z)' }
]

export const CargoDocumentTemplate: FunctionComponent<TemplateProps<CargoDocument>> = ({ document }) => {
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

    carrierSignerPlace,
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
    placeOfIssue,
    invoicePayableAt,
    transport_vesselName,
    transport_IMOvesselNumber,
    placeOfTranshipment,
    corridor,
    qrCode,
    placeOfAcceptance,
    dateOfAcceptance,
    consignmentItems,
    currency,
    valueCurrency,
    terms,
    importerAddress
  } = recipient

  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: auto;
    font-family: sans-serif;
    max-width:1130px;
    letter-spacing:0.01071em !important;
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
    border: 1px solid #374151;
  `

  const tableTd = css`
    border-width: 1px;
    border-style: solid !important;
    border-color: #999999 !important;
    padding: 0.25rem !important;
  `
  const cellHeader = css`
    font-size: 0.75rem;
    line-height: 1rem;
    text-transform: uppercase;
    color: #29564b;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 700;
  `
  const cellTitle = css`
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  `

  const cellText = css`
    font-size: 0.75rem;
    line-height: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  `
  const textXs = css`
    font-size: 0.75rem;
    line-height: 1rem;
  `
  const signatureTableTd = css`
    border-width: 0 0 0 1px;
    border-style: solid !important;
    border-color: #374151 !important;
    padding: 1.5rem !important;
    width: '50%';
    color: #03271e;
  `
  const signatureCellTitle = css`
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    vertical-align: middle;
    margin: 0 0 5px;
    text-transform: uppercase;
    color: #03271e;
  `

  const signatureCellHeader = css`
    color: #29564b;
    font-size: 0.75rem;
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
  `

  const signatureCellText = css`
    color: #29564b;
    font-size: 0.75rem;
    margin: 0;
    line-height: 1rem;
  `

  const cellContent = css`
    font-size: 14px;
  `

  // useEffect(() => {
  //   if (goods_numberOfPackages) {
  //     let amountToText = numberToWords.toWords(goods_numberOfPackages);

  //     setAmountText(
  //       amountToText
  //         .split(" ")
  //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //         .join(" ")
  //     );
  //   }
  // }, [goods_numberOfPackages]);

  function isJSONString (str: string) {
    try {
      JSON.parse(str)
      return true // It's a valid JSON string
    } catch (error) {
      return false // It's not a valid JSON string
    }
  }
  console.log('notify_address: ', notify_address)
  console.log('notify_contact_email: ', notify_contact_email)
  console.log('notify_contact_phone: ', notify_contact_phone)
  console.log('notify_lei: ', notify_lei)

  return (
    <div css={containerStyle}>
      {qrCode?.uri ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            border: '2px solid #374151',
            borderBottomWidth: 0,
            padding: '0.25rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            background: '#DDF2E9'
          }}
        >
          <img
            src={primaryLogo ? primaryLogo : carrierLogo}
            alt='Image'
            style={{ height: 100, width: 'auto', objectFit: 'contain', padding: 0 }}
          />
          <div style={{ fontSize: '2.25rem', lineHeight: '2.25rem', textAlign: 'center', color: '#093228' }}>
            <b>BILL OF LADING</b> (ELECTRONIC)
          </div>

          <div>
            {qrCode?.uri !== undefined ? (
              <QRCodeSVG
                value={qrCode?.uri}
                height={92}
                width={92}
                style={{ objectFit: 'contain', padding: '0.25rem' }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            border: '2px solid #374151',
            borderBottomWidth: 0,
            padding: '0.25rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            background: '#DDF2E9',
            gap: 40
          }}
        >
          <img
            src={primaryLogo ? primaryLogo : carrierLogo}
            alt='Image'
            style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
          />
          <div style={{ fontSize: '1.875rem', lineHeight: '2.25rem', textAlign: 'center', color: '#093228' }}>
            <b>BILL OF LADING</b> (ELECTRONIC)
          </div>
        </div>
      )}

      <table
        style={{
          width: '100%',
          border: '1px solid #374151',
          borderBottom: '0',
          borderTop: '0',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '47.6%', borderBottom: 0 }} rowSpan={2} colSpan={2}>
            <span css={cellHeader}>Shipper</span>
            <br />
            <span css={cellText}>
              {exporterCompanyName || exporterName}
              {exporterAddress && (
                <>
                  ,<br />
                  {exporterAddress}
                </>
              )}
              {exporterEmail && (
                <>
                  ,<br />
                  <b>Email: </b>
                  {exporterEmail}
                </>
              )}
              {exporterPhone && (
                <>
                  ,<br />
                  <b>Phone: </b>
                  {exporterPhone}
                </>
              )}
              {exporterPhone}
              {exporterLei && (
                <>
                  ,<br />
                  <b>LEI No:</b>&nbsp;{exporterLei}
                  <br />
                </>
              )}
            </span>
          </td>

          <td css={tableTd} colSpan={2} style={{ borderBottom: 0, borderLeft: 0 }}>
            <span css={cellHeader}>B/L Number:&nbsp;</span>
            <span css={cellText}>{dcsaBlNumber}</span>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} rowSpan={3} colSpan={2} style={{ borderBottom: 0, borderLeft: 0 }}>
            <span css={cellHeader} style={{ textTransform: 'none' }}>
              Ocean Bill of Lading or Multimodal Bill of Lading
            </span>
            <br />
            <span css={cellText}>
              NEGOTIABLE UNLESS CONSIGNED “TO ORDER” .<br /> RECEIVED BY THE CARRIER THE GOODS SPECIFIED BELOW IN
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
          <td css={tableTd} rowSpan={2} colSpan={2} style={{ borderBottom: 0 }}>
            <span css={cellHeader}>Consignee</span>
            <br />
            <span css={cellText}>
              {importerCompanyName || importerName}
              {importer_address && (
                <>
                  ,<br />
                  {importer_address}
                </>
              )}
              {importer_email && (
                <>
                  ,<br />
                  <b>Email:&nbsp;</b>
                  {importer_email}
                </>
              )}
              {importer_phone && (
                <>
                  ,<br />
                  <b>Phone:&nbsp;</b>
                  {importer_phone}
                </>
              )}

              {importer_lei && (
                <>
                  ,<br />
                  <b>LEI No:</b>&nbsp;{importer_lei}
                  <br />
                </>
              )}
            </span>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '1px solid #374151',
          borderTop: '1px',
          // borderBottom: '0',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '47.6%', borderBottom: 0 }} rowSpan={3} colSpan={2}>
            <span css={cellHeader}>Notify Party</span>
            <br />
            <span css={cellText}>
              {(notify_name || notify_contact_name) && (
                <>
                  {notify_name || notify_contact_name}
                  {notify_address || (
                    <>
                      ,<br />
                      {notify_address}
                    </>
                  )}
                  {notify_contact_email && (
                    <>
                      ,<br />
                      <b>Email:&nbsp;</b>
                      {notify_contact_email}
                    </>
                  )}
                  {notify_contact_phone && (
                    <>
                      ,<br />
                      <b>Phone:&nbsp;</b>
                      {notify_contact_phone}
                    </>
                  )}

                  {notify_lei && (
                    <>
                      ,<br />
                      <b>LEI No:</b>&nbsp;{notify_lei}
                      <br />
                    </>
                  )}
                </>
              )}
            </span>
            <br />
            <small css={textXs} style={{ fontStyle: 'italic', color: '#666' }}>
              (Carrier not responsible for failure to notify and no claim shall attach therefrom)
            </small>
          </td>
          <td css={tableTd} style={{ borderLeft: 0 }}>
            <span css={cellHeader}>Shipper/Export/Forwarder References</span>
            <br />
            <span css={cellText}>{shippingInstructionsReference} / &nbsp;</span>
          </td>
          <td css={tableTd} style={{ borderLeft: 0 }}>
            <span css={cellHeader}>Mode of Transport</span>
            <br />
            <span css={cellText}>{onCarriageBy}</span>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ border: 0, borderRight: '1px solid #374151' }}>
            <span css={cellHeader}>Container Size</span>
            <br />
            <span css={cellText}>{containerSize}</span>
          </td>
          <td css={tableTd} style={{ border: 0, borderRight: '1px solid #374151' }}>
            <span css={cellHeader}>Container Type</span>
            <br />
            <span css={cellText}>{containerType}</span>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ border: 0, borderTop: '1px solid #374151', borderRight: '1px solid #374151' }}>
            <span css={cellHeader}>Place of Receipt</span>
            <br />
            <span css={cellText}>{location_placeOfReceipt}</span>
          </td>
          <td css={tableTd} style={{ borderLeft: 0, borderBottom: 0 }}>
            <span css={cellHeader}>Port of Loading</span>
            <br />
            <span css={cellText}>{location_portOfLoading}</span>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ width: '50%' }} rowSpan={2} colSpan={2}>
            <span css={cellHeader}>Also Notify</span>
            <br />
            <span css={cellText}>
              {(other_name || other_contact_name) && (
                <>
                  {other_name || other_contact_name}
                  {other_address && (
                    <>
                      ,<br /> {other_address}
                    </>
                  )}
                  {other_contact_email && (
                    <>
                      ,<br />
                      <b>Email:&nbsp;</b> {other_contact_email}
                    </>
                  )}
                  {other_contact_phone && (
                    <>
                      ,<br />
                      <b>Phone:&nbsp;</b> {other_contact_phone}
                    </>
                  )}
                  {other_lei && (
                    <>
                      ,<br />
                      <b>LEI No.:&nbsp;</b> {other_lei}
                    </>
                  )}
                </>
              )}
            </span>
          </td>
          <td css={tableTd} style={{ borderLeft: 0 }}>
            <span css={cellHeader}>Port of Discharge</span>
            <br />
            <span css={cellText}>{location_portOfDischarge}</span>
          </td>
          <td css={tableTd} style={{ borderLeft: 0 }}>
            <span css={cellHeader}>Place of Delivery/Final Destination</span>
            <br />
            <span css={cellText}>{location_placeOfDelivery}</span>
          </td>
        </tr>

        <tr css={tableTr}>
          <td css={tableTd} style={{ borderLeft: 0, borderTop: 0 }}>
            <span css={cellHeader}>Pre-carriage by</span>
            <br />
            <span css={cellText}>{preCarriageBy}</span>
          </td>
          <td css={tableTd} style={{ borderLeft: 0, borderTop: 0 }}>
            <span css={cellHeader}>Vessel & Voyage</span>
            <br />
            <span css={cellText}>
              {transport_vesselName}&nbsp;/&nbsp;{transport_IMOvesselNumber}
            </span>
            {/* Mersk / Mersk1234 */}
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #374151',
          borderTop: '1px',
          borderBottom: '0',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <thead>
          <tr css={tableTr}>
            <th css={tableTd} style={{ border: 0, borderRight: 1 }}>
              <span css={cellHeader}>Container No.s & Seal No.s</span>
            </th>
            <th css={tableTd} style={{ border: 0, borderRight: 1 }}>
              <span css={cellHeader}>Marks & No. of Packages</span>
            </th>
            <th css={tableTd} colSpan={3} style={{ border: 0, borderRight: 1 }}>
              <span css={cellHeader}>Description of Goods & Packages</span>
            </th>
            <th css={tableTd} style={{ border: 0, borderRight: 1 }}>
              <span css={cellHeader}>Gross Weight of Cargo (KG)</span>
            </th>
            <th css={tableTd} style={{ border: 0 }}>
              <span css={cellHeader}>Measurement (CBM)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr css={tableTr}>
            <td css={tableTd} style={{ border: 0, borderRight: 1, borderTop: 1 }}>
              <div style={{ position: 'relative', top: '0px' }}>
                <span css={cellText}>
                  {dcsaBlNumber} &nbsp;/&nbsp;{sealNumber}
                </span>
              </div>
            </td>
            <td css={tableTd} style={{ border: 0, borderRight: 1, borderTop: 1 }}>
              <span css={cellText}>{numberOfPackages}</span>
              <br />
              {/* {consignment_containerSizeTypeISO} */}
            </td>
            <td colSpan={3} style={{ border: 0, borderRight: 1, borderTop: 1 }} css={tableTd}>
              <span css={textXs}>
                {numberOfContainer} X {containerSize} CONTAINERS SAID TO CONTAIN <br />
                {goods_numberOfPackages} Packages <br />
              </span>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0.5rem 0' }}>
                <span css={textXs}>
                  <b>DOCUMENT TYPE. :</b> {documentType}{' '}
                </span>
                <span css={textXs}>
                  <b>DOCUMENT NO :</b> {documentReferenceNumber}&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              {/* <span>
                  <b>SB NO:</b> {shippingInstructionsReference}{' '}
                </span> */}
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0 0.75rem 0' }}>
                <span css={textXs}>
                  <b>DATE: </b>
                  {moment(expectedArrivalAtPlaceOfDeliveryStartDate).format('YYYY-MM-DD')}&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {consignmentItems?.map((item, index) => (
                  <span css={textXs} key={index}>
                    <b style={{ textTransform: 'uppercase' }}>HSCODE: </b>
                    {item?.hSCodes?.[0] ?? '--'} <br />
                    <b style={{ textTransform: 'uppercase' }}>Item: </b>
                    {item?.descriptionOfGoods?.[0] ?? '--'}
                  </span>
                ))}
              </div>
              <br />
              <span css={textXs}>
                <b className='uppercase'>SHIPPED ON BOARD DATE:</b>{' '}
                {moment(expectedArrivalAtPlaceOfDeliveryStartDate)
                  .utc()
                  .add(5, 'hours')
                  .add(30, 'minutes')
                  .format('DD/MM/YYYY')}{' '}
                <br />
                <b className='uppercase'>
                  FREIGHT PREPAID <br />
                  CY/CY <br />
                  FCL/FC <br />
                  <br />
                </b>
              </span>
            </td>
            <td css={tableTd} style={{ border: 0, borderRight: 1, borderTop: 1 }}>
              <span css={textXs}>{grossWeight}</span>
            </td>
            <td css={tableTd} style={{ border: 0, borderTop: 1 }}>
              <span css={textXs}>{grossWeightUnit}</span>
            </td>
          </tr>
          <tr css={tableTr}>
            <td css={tableTd} colSpan={7} style={{ border: 0, borderTop: 1, borderBottom: 1 }}>
              <span css={cellHeader} style={{ fontSize: '0.7rem' }}>
                Additional Information for Refrigerated Cargo / Hazardous Cargo / OOG Cargo: &nbsp;
              </span>

              <span css={cellText} style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>
                The shipping line shall not be responsible for the outturn if the cargo has been hot-loaded.
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #374151',
          borderTop: '0',
          borderBottom: '0',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <tr css={tableTr}>
          <td css={tableTd} style={{ border: 0, borderRight: 1, width: '25%' }}>
            <span css={cellHeader}>CONTAINER NO. :</span>
            <span css={cellText}>{containerNumber}</span>
          </td>
          <td css={tableTd} style={{ border: 0, borderRight: 1, width: '25%' }}>
            <span css={cellHeader}>TEMPERATURE :</span>
            <span css={cellText}> {temperature}</span>
          </td>
          <td css={tableTd} style={{ border: 0, borderRight: 1, width: '25%' }}>
            <span css={cellHeader}>VENT :</span>
            <span css={cellText}>{ventilation === true ? 'Yes' : 'No'}</span>
          </td>
          <td css={tableTd} style={{ border: 0, width: '25%' }}>
            <span css={cellHeader}>HUMIDITY :</span>
            <span css={cellText}>{humidity}</span>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '1px solid #374151',
          borderTop: '0',
          borderBottom: '1',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <tr css={tableTr} style={{ fontSize: '0.7rem' }}>
          <td css={tableTd} style={{ textAlign: 'center', borderBottom: 1 }} colSpan={5}>
            <span css={cellHeader} style={{ textTransform: 'none' }}>
              All cargo-related particulars above as furnished by the Shipper but without responsibility and
              representation by Carrier
            </span>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ borderTop: 0, width: '16.666667%' }}>
            <span css={cellHeader}>Freight & Charges</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0, width: '16.666667%' }}>
            <span css={cellHeader}>Units</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0, width: '16.666667%' }}>
            <span css={cellHeader}>Currency</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0, width: '25%' }}>
            <span css={cellHeader}>Prepaid</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0, width: '25%' }}>
            <span css={cellHeader}>Collect</span>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ borderTop: 0 }}>
            <span css={cellText}> </span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellText}> </span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellText}>
              {currency}&nbsp;{valueCurrency}
            </span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellText}> </span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellText}> </span>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ borderTop: 0 }}>
            <span css={cellHeader}>Freight Payable at</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellHeader}>Freight Payable by</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellHeader}>No. of Original BOLs</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellHeader}>Place of Issue</span>
          </td>
          <td css={tableTd} style={{ borderTop: 0, borderLeft: 0 }}>
            <span css={cellHeader}>Date of Issue</span>
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} style={{ borderTop: 0, borderBottom: 0 }}>
            <span css={cellText}>{invoicePayableAt}</span>
          </td>
          <td css={tableTd} style={{ border: 0, borderRight: 1 }}>
            <span css={cellText}>{exporterCompanyName}</span>
          </td>
          <td css={tableTd} style={{ border: 0, borderRight: 1 }}>
            <span css={cellText}>1</span>
          </td>
          <td css={tableTd} style={{ border: 0, borderRight: 1 }}>
            <span css={cellText}>{placeOfIssue}</span>
          </td>
          {/* <td css={tableTd} style={{ fontSize: "0.8rem" }}>
            {carrierSignTime && moment(carrierSignTime)
              .utc()
              .add(5, "hours")
              .add(30, "minutes")
              .format("DD/MM/YYYY")}
          </td> */}
          <td css={tableTd} style={{ border: 0, borderRight: 1 }}>
            <span css={cellText}>{moment(carrierSignTime).format('DD/MM/YYYY')}</span>
          </td>
        </tr>

        <tr css={tableTr}>
          {/* <td css={tableTd} colSpan={5} style={{ padding: '1rem', width: '50%' }}>
            <b style={{ color: 'red' }}>Digitally signed by Carrier :</b> <br /> <br />
            <b>Name:</b>&nbsp;{carrier_contact_name} <br />
            <br />
            <b>Date & Time:</b>&nbsp;
            {moment(carrierSignTime).utc().add(5, 'hours').add(30, 'minutes').format('DD/MM/YYYY hh:mm A [IST]')}
            <br />
          </td> */}
          <td css={tableTd} colSpan={5}>
            <span css={cellHeader}>Destination Agent:</span>
            <br />
            <span css={cellText}>
              {carrier_name && (
                <>
                  {carrier_name}
                  {carrier_address && <>, {carrier_address}</>}
                  {carrier_contact_phone && <>, Phone: {carrier_contact_phone}</>}
                  {carrier_contact_email && <>, Email: {carrier_contact_email}</>}
                  {carrier_lei && <>, LEI No: {carrier_lei}</>}
                </>
              )}
            </span>
          </td>
        </tr>
      </table>

      <table
        style={{
          width: '100%',
          border: '2px solid #374151',
          borderTopWidth: 0,
          borderSpacing: '0px'
        }}
      >
        <tr>
          <td css={signatureTableTd} style={{ width: '50%', borderWidth: 0, padding: '1.5rem', borderBottomWidth:2 }}>
            <div
              style={{
                border: '1px solid #336',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#d0eef6'
              }}
            >
              <h6 css={signatureCellHeader}> Electronic Bill of Lading</h6>
              <p css={signatureCellText} style={{ marginTop: 5 }}>
                This is an Original Bill of Lading issued electronically by Credore which is an IG&PI deemed approved
                platform. The authenticity of this document may be verified at&nbsp;
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
              <p css={signatureCellText}>
                Document Id:&nbsp;
                <b>{dcsaBlNumber}</b>
              </p>

              <p css={signatureCellText}>
                Network Name:&nbsp;
                <b>{blockchainName}</b>
              </p>
              <p css={signatureCellText}>
                Issued electronically on:&nbsp;
                <b>{moment(carrierSignTime).format('DD/MM/YYYY HH:mm:ss')}</b>
              </p>
            </div>
          </td>

          <td css={signatureTableTd} style={{borderBottomWidth:2}}>
            <h6 css={signatureCellTitle}> For {carrier_name}</h6>
            <p css={signatureCellText}>Digitally Signed By</p>

            <div style={{ marginLeft: 20 }}>
              <h6 css={signatureCellTitle}> {carrier_contact_name}</h6>

              <img src={signature} alt='carrier signature' style={{ height: '4rem', width: 'auto' }} />

              <div css={cellContent} style={{ marginTop: 0 }}>
                <p css={signatureCellText}>
                  Signing Date & Time:&nbsp;<b>{moment(carrierSignTime).format('DD/MM/YYYY HH:mm:ss')}</b>
                </p>
                <p css={signatureCellText}>
                  Place of Signing:&nbsp;<b>{carrierSignerPlace}</b>
                </p>
                <p css={signatureCellText}>
                  Signer IP Address:&nbsp;<b>{carrierSignIp}</b>
                </p>
              </div>
            </div>

            <h6 css={signatureCellTitle} style={{ marginTop: 10 }}>
              Authorised Signatory
            </h6>
            {/* </div> */}
          </td>
        </tr>
        <tr css={tableTr}>
          <td css={tableTd} colSpan={2} style={{ border: 0, borderTop: 1 }}>
            <span css={cellHeader}>Disclaimer:</span>
            <span css={cellText}>
              This document, originally existing in electronic or paper or both formats, has been converted to the
              TradeTrust-recommended format, ensuring MLETR compliance. The converted document, in compliance with
              Section 4(1) of the Electronic Trade Document Act, holds the same legal validity. Any unauthorized
              alterations or modifications are strictly prohibited. Verify its integrity and authenticity through
              approved channels.
            </span>
          </td>
        </tr>
      </table>

      {/* <table
        style={{
          width: '100%',
          borderWidth: '0px 1px 1px 1px',
          borderStyle: 'solid',
          borderColor: '#374151',
          padding: '0px',
          borderSpacing: '0px'
        }}
      >
        <div css={tableTd}>
          <span css={cellHeader}>Terms & Conditions:&nbsp;</span>
          <span css={cellText}>{terms}</span>
        </div>
      </table> */}

      <Accordion
        style={{
          marginTop: '1.25rem',
          marginBottom: '1rem',
          borderRadius: '0.375rem',
          width: '100%',
          backgroundColor: 'rgb(82 82 82 / 0.9)',
          color: 'white'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore style={{ fontWeight: 900, color: 'white' }} />}
          style={{ backgroundColor: '#525252e0', borderRadius: '0.375rem' }}
        >
          {carrier_name}
          &nbsp;Terms & Conditions
        </AccordionSummary>

        <AccordionDetails style={{ backgroundColor: '#FFF', borderRadius: '0 0 0.375rem 0.375rem', color: '#666' }}>
          <span css={cellText}>{terms}</span>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{
          marginTop: '1.25rem',
          marginBottom: '1rem',
          borderRadius: '0.375rem',
          width: '100%',
          backgroundColor: 'rgb(82 82 82 / 0.9)',
          color: 'white'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore style={{ fontWeight: 900, color: 'white' }} />}
          style={{ backgroundColor: '#525252e0', borderRadius: '0.375rem' }}
        >
          eBL Terms & Conditions
        </AccordionSummary>

        <AccordionDetails style={{ backgroundColor: '#FFF', borderRadius: '0 0 0.375rem 0.375rem', color: '#666' }}>
          <img
            src={corridor === 'SG' ? CredoreTermsSG : CredoreTermsUK}
            alt='Credore eBL Terms & Conditions'
            style={{ width: '100%' }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
