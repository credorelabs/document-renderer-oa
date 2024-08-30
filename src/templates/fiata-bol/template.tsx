import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
// import credoreLogo from "https://www.credore.xyz/assets/images/Logo.png";
import moment from "moment";
import { FiataEBLData } from "./types";
import fiataLogo from "./fiata.png";
import iccLogo from "./icc.png";
export const FiataEBolTemplate: FunctionComponent<TemplateProps<FiataEBLData>> = ({ document }) => {
  const containerStyle = css`
    margin: auto;
    padding: 15px;
    width: 90%;
    font-family: sans-serif;
  `;

  const tableTd = css`
    border-bottom: 2.5px solid black;
    width: 50%;
    padding: 1rem;
  `;

  const tableTdRight = css`
    border-bottom: 2.5px solid black;
    border-right: 2.5px solid black;
    padding: 1rem;
    width: 50%;
  `;

  const tableTdGoods = css`
    border-right: 2.5px solid black;
    padding: 1rem;
  `;

  const tableTdBottom = css`
    border: 2px solid black;
    padding: 1rem;
  `;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#7acbd8" }}>
      <div css={containerStyle}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            padding: "0px",
            borderSpacing: "0px"
            // fontSize: "20px"
          }}
        >
          <tr>
            <td css={tableTdRight}>
              {/* <span css={spanHeadText} style={{ marginBottom: "3rem" }}> */}
              Consignor
              {/* </span> */}
              <br />
              <br />
              Consignor Test GMbH
              <br />
              Steuber Ports
              <br />
              49591 South Whittier
              <br />
              Pitcairn Islands
              <br />
              (300) 453-6378
              <br />
              Gerard_OHara@yahoo.com
              <br />
            </td>
            <td css={tableTd}>
              <div style={{ display: "flex", width: "100%" }}>
                <img src={fiataLogo} alt="fiata logo" style={{ width: "12rem", height: "12rem" }} />
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                      FBL
                    </span>
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "10px 30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        // fontSize: "1rem"
                      }}
                    >
                      4758BFDJHBD75FBHV
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
                    <div>
                      NEGOTIABLE
                      <br />
                      MULTIMODAL TRANSPORT
                      <br />
                      BILL OF LADING
                      <br />
                    </div>
                    <img src={iccLogo} alt="fiata logo" style={{ marginTop: "-1rem", width: "10rem" }} />
                  </div>
                  <div>
                    Issued subject to UNCTAD / ICC Rules for Multimodal Transport Documents (ICC Publication 481).
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td css={tableTdRight}>
              {/* <span css={spanHeadText}> */}
              Consigned to order of
              {/* </span> */}
              <br />
              <br />
              Williamson - O'Hara
              <br />
              Graham Glens
              <br />
              93764-0627 Hemet
              <br />
              Saint Barthelemy
              <br />
            </td>
            <td css={tableTd} rowSpan={5} style={{ verticalAlign: "top" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div>
                  Waters - Stark
                  <br />
                  Anya Burgs
                  <br />
                  10248 Sarasota
                  <br />
                  Pitcairn Islands
                  <br />
                  1-881-224-1308 Callie45@yahoo.com <br />
                </div>
                <img
                  src={"https://www.credore.xyz/assets/images/Logo.png"}
                  alt="credore logo"
                  style={{ marginTop: "6rem", marginBottom: "6em", width: "22rem" }}
                />
                <div style={{ display: "flex", marginBottom: "1rem" }}>
                  <div style={{ borderBottom: "2px dotted black", width: "50%" }}>Identifiers</div>
                  <div>Document registered by FIATA.</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td css={tableTdRight}>
              {/* <span css={spanHeadText}> */}
              Notify address
              {/* </span> */}
              <br />
              <br />
              Zieme, Nicolas and Tremblay
              <br />
              Meaghan Estates
              <br />
              88199 Baldwin Park
              <br />
              Malaysia
              <br />
              (612) 655-6676 x871 Sophia_Ondricka55@gmail.com
              <br />
            </td>
          </tr>
          <tr>
            <td css={tableTdRight}>
              {/* <span css={spanHeadText}> */}
              Place of receipt
              {/* </span> */}
              <br />
              <br />
              Bogisich LLC
            </td>
          </tr>
          <tr>
            <td css={tableTdRight}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {/* <span css={spanHeadText}> */}
                  Ocean vessel
                  {/* </span> */}
                  <br />
                  <br /> Rustic Concrete Tuna
                </div>
                <div>
                  {/* <span css={spanHeadText}> */}
                  Port of loading
                  {/* </span> */}
                  <br />
                  <br />
                  Will Group
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td css={tableTdRight}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {/* <span css={spanHeadText}> */}
                  Port of discharge
                  {/* </span> */}
                  <br />
                  <br /> Stanton, Frami and Cole
                </div>
                <div>
                  {/* <span css={spanHeadText}> */}
                  Place of delivery
                  {/* </span> */}
                  <br />
                  <br />
                  White Inc
                </div>
              </div>
            </td>
          </tr>
        </table>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            padding: "0px",
            borderSpacing: "0px"
            // fontSize: "20px"
          }}
        >
          <tr>
            <td css={tableTdGoods}>
              <span style={{ fontSize: "20px" }}>Marks and numbers</span>
              <br />
              <br />
              TSVUE
              <br />
              LR?JX
              <br />
              0V_#3
            </td>
            <td css={tableTdGoods}>
              <span style={{ fontSize: "20px" }}>Number and kind of packages</span>
              <br />
              <br />
              63,329,251 Sapiente quis officia aspernatur quia est enim.
              <br />
              761,882 Amet excepturi vero.
              <br />
              38,772,296 Perferendis ratione qui voluptatem explicabo
            </td>
            <td css={tableTdGoods}>
              <span style={{ fontSize: "20px" }}>Gross Weight </span>
              <br />
              <br />
              397,164 kg <br />
              228,082 kg <br />
              414,288 kg
            </td>
            <td style={{ padding: "1rem" }}>
              <span style={{ fontSize: "20px" }}>Measurement</span>
              <br />
              <br />
              288,705 m^3
              <br />
              559,710 m^3
              <br />
              559,710 m^3
            </td>
          </tr>
        </table>

        <div
          style={{
            borderTop: "2.5px solid black",
            borderBottom: "2.5px solid black",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            marginTop: "8rem",
            fontSize: "1.2rem"
          }}
        >
          PLEASE SEE ATTACHED RIDER FOR DETAILED DESCRIPTION OF GOODS
        </div>
        <div
          style={{ borderBottom: "2.5px solid black", paddingTop: "1rem", paddingBottom: "1rem", fontSize: "1.2rem" }}
        >
          Contractual clauses
          <br />
          Ea et qui et eos
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            according to the declaration of the consignor
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5rem" }}>
          <div style={{ width: "45%" }}>
            Declaration of Interest of the consignor in timely delivery
            <br />
            (Clause 6.2.)
            <div style={{ border: "2px solid black", width: "100%", padding: "1.5rem" }}></div>
          </div>
          <div style={{ width: "45%" }}>
            Declared value for ad valorem rate according to the declaration of the consignor <br />
            (Clauses 7 and 8).
            <div style={{ border: "2px solid black", width: "100%", padding: "1rem" }}>43095BMD</div>
          </div>
        </div>
        <div style={{ marginTop: "5rem", marginBottom: "0.5rem" }}>
          The goods and instructions are accepted and dealt with subject to the Standard Conditions printed overleaf.
          <br />
        </div>
        <div>
          Taken in charge in apparent good order and condition, unless otherwise noted herein, at the place of receipt
          for transport and delivery as mentioned above.
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          One of these Multimodal Transport Bills of Lading must be surrendered duly endorsed in exchange for the goods.
          In Witness whereof the original Multimodal Transport Bills of Lading all of this tenor and date have been
          signed in the number stated below, one of which being accomplished the other(s) to be void.
        </div>

        <table
          style={{
            width: "100%",
            border: "2px solid black",
            borderCollapse: "collapse",
            padding: "0px",
            borderSpacing: "0px"
          }}
        >
          <tr>
            <td css={tableTdBottom}>
              Freight amount
              <br />
              <br />
              41134 SOS
            </td>
            <td css={tableTdBottom}>
              Freight payable at
              <br />
              <br />
              Dundalk
            </td>
            <td css={tableTdBottom}>
              Place and date of issue
              <br />
              <br />
              Peoria 2022-10-08T22:49:42.695Z
            </td>
          </tr>
          <tr>
            <td css={tableTdBottom}>
              Cargo Insurance through the undersigned
              <br />
              <br />
              <input type="checkbox" disabled style={{ width: "20px", height: "20px" }} /> not covered Covered
              &nbsp;&nbsp;&nbsp;
              <input type="checkbox" checked style={{ width: "20px", height: "20px" }} /> according to attached Policy
            </td>
            <td css={tableTdBottom}>
              Number of Original BL's
              <br />
              six
            </td>
            <td css={tableTdBottom} rowSpan={2}>
              Stamp and signature
              <br />
              <br />
              Waters - Stark
              <br />
              Anya Burgs
              <br />
              10248 Sarasota
              <br />
              Pitcairn Islands
              <br />
              1-881-224-1308
              <br />
              Callie45@yahoo.com
              <br />
            </td>
          </tr>
          <tr>
            <td css={tableTdBottom}>
              For delivery of goods please apply to:
              <br />
              <br />
              Kunde - Pfannerstill AG
              <br />
              Jast Underpass 35397 Bowie
              <br />
              Gambia
              <br />
              1-221-984-7234 x2396 Marianna_Lowe@yahoo.com
              <br />
            </td>
            <td css={tableTdBottom}>
              Liability of the insured against goods on the
              <br />
              said bill of lading are assured within the cover
              <br />
              and limits of the liability insurance policy no 1<br />
              issued by 1
            </td>
          </tr>
        </table>

        <table
          style={{
            width: "100%",
            border: "2px solid black",
            borderCollapse: "collapse",
            padding: "0px",
            borderSpacing: "0px",
            marginTop: "10rem",
            borderBottom: "0"
          }}
        >
          <tr>
            <th css={tableTdGoods} style={{ width: "10%" }}>
              Marks and numbers{" "}
            </th>
            <th css={tableTdGoods} style={{ width: "35%" }}>
              Number and kind of packages
            </th>
            <th css={tableTdGoods} style={{ width: "35%" }}>
              {" "}
              Description of goods{" "}
            </th>
            <th css={tableTdGoods} style={{ width: "10%" }}>
              Gross Weight
            </th>
            <th css={tableTdGoods} style={{ width: "10%" }}>
              Measurement
            </th>
          </tr>
          <tr>
            <td css={tableTdGoods}>TSVUE 5914257f-376 SB40LSZ OV91ZFJ CO58SPY</td>
            <td css={tableTdGoods}>63,329,251 Sapiente quis officia aspernatur quia est enim.</td>
            <td css={tableTdGoods}>
              Iste omnis odio dolorum et harum quidem labore nemo. Non vitae molestias sed inventore quis veniam totam.
              Odit beatae consequatur ut quia. \1o425/! 3e8b5b1f-97e $6J[YNAP 9d33a9ce-f45 CN+DB`EG 31ff63bc-955
              /N`0E3'J
            </td>
            <td css={tableTdGoods}>397,164 kg</td>
            <td css={tableTdGoods}> 288,705 m^3</td>
          </tr>
          <tr>
            <td css={tableTdGoods}>TSVUE 5914257f-376 SB40LSZ OV91ZFJ CO58SPY</td>
            <td css={tableTdGoods}>63,329,251 Sapiente quis officia aspernatur quia est enim.</td>
            <td css={tableTdGoods}>
              Iste omnis odio dolorum et harum quidem labore nemo. Non vitae molestias sed inventore quis veniam totam.
              Odit beatae consequatur ut quia. \1o425/! 3e8b5b1f-97e $6J[YNAP 9d33a9ce-f45 CN+DB`EG 31ff63bc-955
              /N`0E3'J
            </td>
            <td css={tableTdGoods}>397,164 kg</td>
            <td css={tableTdGoods}> 288,705 m^3</td>
          </tr>
        </table>

        <div style={{ display: "flex", justifyContent: "end", marginTop: "10rem" }}>
          <div style={{ width: "60%", display: "flex" }}>
            <img
              src="https://www.credore.xyz/assets/images/Logo.png"
              alt="fiata logo"
              style={{ width: "22rem", display: "flex", margin: "auto" }}
            />
            <div style={{ width: "100%" }}>
              <div
                style={{
                  marginLeft: "2rem",
                  border: "2px solid black",
                  borderRight: "0",
                  width: "100%",
                  padding: "1rem"
                }}
              >
                Place and date of issue
                <br />
                Peoria 2022-10-08T22:49:42.695Z
              </div>
              <div style={{ marginLeft: "2rem", borderLeft: "2px solid black", width: "100%", padding: "1rem" }}>
                Stamp and signature
                <br />
                <br />
                Waters - Stark
                <br />
                Anya Burgs
                <br />
                10248 Sarasota
                <br />
                Pitcairn Islands
                <br />
                1-881-224-1308
                <br />
                Callie45@yahoo.com
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
