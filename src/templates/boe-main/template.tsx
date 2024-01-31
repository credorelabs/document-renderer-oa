import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { Wrapper } from "../../core/Wrapper/Wrapper";
import { BillOfExchangeMain } from "./types";
import seal from './stampCredore (1).svg';
import background from './boeBackground.svg';

export const BillOfExchangeMainTemplate: FunctionComponent<TemplateProps<BillOfExchangeMain>> = ({ document }) => {
  const {
    dlpcId,
    orginatorId,
    refID,
    committer,
    committee,
    currency,
    amount,
    commitmentDate,
    commitmentState,
    dueDate,
    dischargeState,
    dischargeDate,
    applicableRules,
    invoiceNumber,
    frId,
    createdAt,
    updatedAt,
    holderCompanyName,
    holderEmail,
    acceptorCompanyName,
    acceptorEmail,
    accountNo,
    accountPlace,
    txLink,
    supplierName,
    supplierJobTitle,
    sigTime,
    buyerName,
    buyerJobTitle,
    acceptorSignTime,
    merkleRoot,
    walletAddress,
    txHashUrl,
    supplierURL,
    buyerUrl

  } = document;

    // const backgroundImageUrl = './boeBackground.svg';

    const outerMainDiv = css `
      width : 85%;
      disply : flex;
    `;

    const headingDiv = css `
      display: flex;
      flex-direction: row;
      margin-top: 1.25rem;
      justify-content: space-between;
    `;
    const headingInside = css`
      
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 2rem;
      /* Equivalent to Tailwind's ml-8 */
      margin-top: 2rem;
    `;
    const headingStyle = css `
      color: #4b5563;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 1.875rem;
      /* Equivalent to Tailwind's text-xl */
      line-height: 1.75;
      /* Equivalent to Tailwind's leading-7 */
    `;
    
    const contentDiv = css `
      width: 100%; /* Equivalent to w-full */
        margin-top: 1rem; /* Equivalent to my-8 */
        margin-bottom: 2rem; /* Equivalent to my-8 */
        margin-left: 2rem; /* Equivalent to mx-8 */
        margin-right: 2rem;
    `;
    
    const subContentDiv = css`
      display: flex; /* Equivalent to 'flex' */
      justify-content: space-between; /* Equivalent to 'justify-between' */
      align-items: flex-start; 
    `;
    
    const subContentDiv1 = css`
      width: 90%; /* Equivalent to 'w-full' */
      
      display: flex; /* Equivalent to 'flex' */
      justify-content: space-between;
    `;
    
    const contentValue= css`
      
      display: block; /* Equivalent to 'block' */
      font-size: 1rem; /* Equivalent to 'text-base' */
      font-weight: 500; /* Equivalent to 'font-medium' */
      color: #718096; /* Equivalent to 'text-gray-600' */
      
    `;
    
    const contentKey = css`
      margin-bottom: 0.25rem; /* Equivalent to 'mb-1' */
      display: block; /* Equivalent to 'block' */
      font-size: 1rem; /* Equivalent to 'text-base' */
      font-weight: 600; /* Equivalent to 'font-semibold' */
      color: #333333;
    `;
    
    // /* In your CSS file */
    const contentKeyValue = css `
      display: flex; /* Equivalent to 'flex' */
      width: 50%; /* Equivalent to 'w-[50%]' */
      margin-right: 1.75rem; /* Equivalent to 'mr-7' */

    `;

    const contentKeyValue2 = css `
      display: flex; /* Equivalent to 'flex' */
      width: 50%; /* Equivalent to 'w-[50%]' */
      margin-right: 1.75rem; /* Equivalent to 'mr-7' */
      flex-direction : column
      
    `;
    
    
    
    const mainDiv = css `
      width: 90%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-left: 2rem;
      margin-right: 2rem;
    `;
    
    const w35 = css `
      width: 35%;
    `;
    
    const existingDiv = css`
      width: 100%;
      height: 25px;
      color: #4b5563;
      /* Equivalent to text-gray-700 */
      font-size: 1rem;
      /* Equivalent to text-base */
      font-weight: 800;
      /* Equivalent to font-extrabold */
      font-family: 'Inter', sans-serif;
      line-height: 1.375;
      /* Equivalent to leading-snug */
      margin-bottom: 1.25rem;
      /* Equivalent to mb-5 */
    `;
    
    const innerClass = css `
      width: 42%;
      color: #374151;
      /* Equivalent to text-neutral-900 */
      font-size: 1rem;
      /* Equivalent to text-base */
      font-weight: 600;
      /* Equivalent to font-semibold */
      font-family: 'Inter', sans-serif;
    `;
    
    const valueClass = css `
      width: 80%;
      color: #000;
      /* Equivalent to text-black */
      font-size: 1rem;
      /* Equivalent to text-base */
      font-weight: 400;
      /* Equivalent to font-normal */
      font-family: 'Inter', sans-serif;
    `;

    const button = css `
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: teal;
      color: white;
    `
    
    // w19 {
    //   width: 19%;
    // },
    
    const backgroundImage = css`
      background-image: url(${background});
      background-size: cover;
      background-position: center;

      @media print {
        background-image: url(${background});
      }
    `;

    
    const instruction = css `
      width: 100%;
      color: #4b5563;
      /* Equivalent to text-gray-700 */
      font-size: 1.125rem;
      /* Equivalent to text-lg */
      font-weight: 700;
      /* Equivalent to font-bold */
      font-family: 'Inter', sans-serif;
      line-height: 1.375;
      /* Equivalent to leading-snug */
      margin-bottom: 1.75rem;
    `;
    
    const signature = css `
      width: 90%;
      margin-left: 2rem;
      /* Equivalent to mx-8 */
      margin-right: 2rem;
      /* Equivalent to mx-8 */
      display: flex;
      flex-direction: column;
      /* Equivalent to flex flex-col */
      margin-top: 5rem;
      /* Equivalent to mt-20 */
      margin-bottom: 2.5rem;
      /* Equivalent to mb-10 */
    `;
    
    const sigRef = css `
      color: #DC2626;
      /* Equivalent to text-red-400 */
      font-size: 1rem;
      /* Equivalent to text-base */
      font-weight: 700;
      /* Equivalent to font-bold */
      font-family: 'Montserrat', sans-serif;
      line-height: 1.375;
      /* Equivalent to leading-snug */
      margin-bottom: 1.5rem;
      /* Equivalent to mb-6 */
    `;
    
    const signatureHeading = css `
      margin-right: 1rem;
      /* Equivalent to mr-4 */
      color: #DC2626;
      /* Equivalent to text-red-400 */
      font-size: 1rem;
      /* Equivalent to text-base */
      font-weight: 700;
      /* Equivalent to font-bold */
      font-family: 'Montserrat', sans-serif;
      line-height: 1.375;
      /* Equivalent to leading-snug */
      width: 30%;
      /* Equivalent to w-[30%] */
    `;
    
    const w50 = css `
      width: 50%;
    `;
    
    const sigDetails = css `
      display: flex;
      flex-direction: row;
      /* Equivalent to flex flex-row */
      margin-bottom: 1rem;
      /* Equivalent to mb-4 */
    `;

    const infoDiv = css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 2rem;
  `;

  const sepDiv = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 0.75rem; /* Equivalent to 'mb-3' */
  `;

  const flexCol = css `
    display: flex;
    flex-direction: column
  `;

  const flexColmt8 = css `
    display: flex;
    flex-direction: column;
    margin-top: 3rem
  `;

  const fullflexCol = css `
    display : flex;
    flex-direction: column;
    width : 100%
  `;

  const fullFlexBetween = css`
  width: 100%; /* Equivalent to 'w-full' */
  display: flex; /* Equivalent to 'flex' */
  flex-direction: row; /* Equivalent to 'flex-row' */
  justify-content: space-between; /* Equivalent to 'justify-between' */
`;

  const lastSignature = css`
  width: 90%;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  `;

  const merkleRootStyle = css`
    margin: 0 2rem;
    padding-bottom: 1.5%;
  `;

  const sealDesign = css`
    opacity: 90%; 
  `;

  const flexRow = css`
  display : flex;
  flex-direction: row;
  `;

  const flexRowCenter = css`
  display : flex;
  flex-direction: row;
  align-items: center;
  `;

  const flexRowCenterW = css`
  display : flex;
  flex-direction: row;
  align-items: center;
  width : 50%
  `;
  

   const borderBtnTrail  = css `
    width: 62px;
    height: 0px;
    border: 2px solid #CBD5E0; /* Use the appropriate color for border-slate-300 */
    margin-left: 5px;
    margin-right: 5px;
  `
  function dateFunc( inputDate: Date ) {
    const day = inputDate.getUTCDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(inputDate);
    const year = inputDate.getUTCFullYear();
    const hours = inputDate.getUTCHours();
    const minutes = inputDate.getUTCMinutes();

    const formattedDate = `${day}${day % 10 === 1 ? "st" : 
        day % 10 === 2 ? "nd" : day % 10 === 3 ? "rd" : "th"} 
        ${month}, ${year} ${hours}:${minutes < 10 ? `0${minutes}` : minutes} AM`;

    return formattedDate;
  }
  const inputDate = new Date(commitmentDate);
  const utcFormattedDate = dateFunc(inputDate);

  const inputMaturityData = new Date(dueDate)
  const utcFormattedMaturityDate = dateFunc(inputMaturityData);

  const inputSupplierSignData = new Date(sigTime)
  const utcFormattedSupplierSigTimeDate = dateFunc(inputSupplierSignData);

  const createdAddInputDate = new Date(createdAt);
  const utcFormattedCreatedAtDate = dateFunc(createdAddInputDate);

  const inputSigTimeData = new Date(acceptorSignTime);
  const utcFormattedSigTimeDate = dateFunc(inputSigTimeData);
  const openNewTab = (url: any) => {
    window.open(url, '_blank');
    // Set isTransferred to true once the link is opened if needed
    // setIsTransferred(true);
  };

  return (
    // <div>
    //     he
    // </div>
    <Wrapper data-testid="bill-of-exchange-main-template">
      {/* <div css={containerStyle}>
        <div css={tableStyle}>
          {data.map((item, index) => (
            <div css={rowStyle} key={index}>
              <div css={cellStyle}>
                <span css={labelStyle}>{item.label}:</span>
              </div>
              <div css={cellStyle}>
                <span css={valueStyle}>{item.value}</span>
              </div>
            </div>
          ))}

          
        </div>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div css={outerMainDiv}>
        <div css={backgroundImage}>

          <div css={headingDiv}>
            <div css={headingInside} >
              {/* "INVOICE" in big size */}
              <div css={headingStyle}>
                Electronic Bill of Exchange 
              </div>
            </div>
            
          </div>

        
          <div css={contentDiv}>

            <div css={subContentDiv}>

              </div>
              
              <div style={{ marginTop: '2rem' }} css={valueClass}>
                <span css={[contentValue, { display: 'inline' }]}>
                  This electronic payment undertaking (ePU) with reference <b css={[contentKey, { display: 'inline' }]}>{dlpcId} </b>is timestamped at <b css={[contentKey, { display: 'inline' }]}>{utcFormattedCreatedAtDate} UTC. </b>
                </span>
              </div>


          </div>

          <div css={mainDiv}>

            <div css={w35} >
                {/* Issuer Details */}
                <div css={flexCol}>
                    <div css={existingDiv}>
                        Issuer Details
                    </div>
                    <div css={sepDiv} >
                        <div css={innerClass}>
                            Company Name :
                        </div>
                        <div css={valueClass}>
                            {'CREDORE'}
                        </div>
                    </div>

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Jurisdication :
                        </div>
                        <div css={valueClass}>
                            {"India"}
                        </div>
                    </div>

                    <div css={sepDiv} >
                        <div css={innerClass}>
                            Email :
                        </div>
                        <div css={valueClass}>
                            {'info@credore.xyz'}
                        </div>
                    </div>

                </div>
                {/* Holder Details */}
                <div css={flexColmt8}>
                    <div css={existingDiv}>
                        Holder Details
                    </div>
                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Company Name :
                        </div>
                        <div css={valueClass}>
                            {holderCompanyName} 
                        </div>
                    </div>

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Jurisdication :
                        </div>
                        <div css={valueClass}>
                            {'India'}
                        </div>
                    </div>

                </div>
            </div>



            <div css={w35}>
                {/* Issuer Details */}
                <div css={flexCol}>
                    <div css={existingDiv}>
                        Accepter Details
                    </div>
                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Company Name :
                        </div>
                        <div css={valueClass}>
                            {acceptorCompanyName}
                        </div>
                    </div>

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Jurisdication :
                        </div>
                        <div css={valueClass}>
                            {"India"}
                        </div>
                    </div>

                </div>


                <div css={flexColmt8}>
                <div css={existingDiv}>
                        ePU Details
                    </div>
                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Maturity Date :
                        </div>
                        <div css={valueClass}>
                            {utcFormattedMaturityDate} UTC
                        </div>
                    </div>

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Payable Place :
                        </div>
                        <div css={valueClass}>
                            {accountNo}
                        </div>
                    </div>

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Currency:
                        </div>
                        <div css={valueClass}>
                            {currency}
                        </div>
                    </div>

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Principal Amount:
                        </div>
                        <div css={valueClass}>
                             {amount}
                        </div>
                    </div>

                    

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Payable At:
                        </div>
                        <div css={valueClass}>
                            {accountPlace}
                        </div>
                    </div>

                    

                    <div css={sepDiv}>
                        <div css={innerClass}>
                            Sort Code:
                        </div>
                        <div css={valueClass}>
                            xxxx
                        </div>
                    </div>

                </div>
            </div>

            <div >
              <img css={sealDesign} 
                src={seal}
                alt="seal of credore"
                width="90%"
              />
            </div>


          </div> 

          <div css={signature}>

                  <div css={instruction}>
                      Executed by the Issuer and signed by the person who under the laws of its jurisdiction are acting under the authority of the Issuer.
                  </div>

                  <div css={fullflexCol}>
                      <div css={sigRef}>
                          <span>Digitally Signed By Supplier </span>
                      </div>

                      <div css={fullFlexBetween}>
                          <div css={{ marginBottom: '1rem', width: '50%' }}>
                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Name:
                                  </div>
                                  <div css={{width: '60%'}}>
                                      {supplierName}
                                  </div>
                              </div>

                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Position:
                                  </div>
                                  <div>
                                      {supplierJobTitle}
                                  </div>
                              </div>
                          </div>

                          <div css={{ marginBottom: '1rem', width: '50%' }}>
                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Email:
                                  </div>
                                  <div>
                                      {holderEmail}
                                  </div>
                              </div>

                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Time Stamp:
                                  </div>
                                  <div>
                                      {utcFormattedSupplierSigTimeDate} UTC
                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>

              </div>

              <div css={lastSignature}>

                  <div css={instruction}>
                      Confirmed by the Acceptor and signed by the person who under the laws of its jurisdiction are acting under the authority of the Acceptor.
                  </div>

                  <div css={fullflexCol}>
                      <div css={sigRef}>
                          <span>Digitally Signed By Buyer</span>
                      </div>

                      <div css={fullFlexBetween}>
                          <div css={{ marginBottom: '1rem', width: '50%' }}>
                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Name:
                                  </div>
                                  <div css={{width: '60%'}}>
                                      {buyerName}
                                  </div>
                              </div>

                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Position:
                                  </div>
                                  <div>
                                      {buyerJobTitle}
                                  </div>
                              </div>
                          </div>

                          <div css={{ marginBottom: '1rem', width: '50%' }}>
                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Email:
                                  </div>
                                  <div>
                                    
                                      {acceptorEmail}
                                  </div>
                              </div>

                              <div css={sigDetails}>
                                  <div css={signatureHeading}>
                                      Time Stamp:
                                  </div>
                                  <div>
                                      {utcFormattedSigTimeDate} UTC
                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>

              </div>

          </div>
        </div>
      </div>

    </Wrapper>
  );
};
