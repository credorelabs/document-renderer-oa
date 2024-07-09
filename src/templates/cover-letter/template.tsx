import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { Cover } from "./types";
import moment from "moment";
import he from "he";

export const CoverLetter: FunctionComponent<TemplateProps<Cover>> = ({ document }) => {
  const {
    letterDate,
    referenceNumber,
    companyLogo,
    fromCompanyNumber,
    fromCompanyEmail,
    fromCompanyAddress,
    letterContent,
    blockchainName,
    mintTxHash,
    fromContactName,
    fromCompanyName,
    address,
    createdAt,
    coverLetterDocuments
  } = document;

  const decodedContent = he.decode(letterContent || "");
  const contentStyle = {
    height: decodedContent.length < 1000 ? "50vh" : "auto"
  };
  return (
    <>
      <div style={{ padding: "3.5rem", paddingTop: "1.25rem" }}>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <img src={companyLogo} alt="company logo" style={{ width: "6rem" }} /> */}
            <div>
              <img
                src={companyLogo}
                alt="Logo"
                // loading="lazy"
                width={180}
                height={80}
                style={{ width: "14rem", height: "2rem" }}
              />
              <div style={{ width: "22rem", fontWeight: "bold" }}>
                Strengthening Global Trade Partnerships Through Legally Recognized Electronic Trade Documentation
              </div>
            </div>
            <div style={{ width: "25rem", textAlign: "right", fontWeight: "bold", marginTop: "auto" }}>
              {fromCompanyName}
              <br />
              {fromCompanyEmail}
              <br />
              {fromCompanyAddress}
            </div>
          </div>
          {/* <div style={{ height: "0.5rem", width: "100%", marginTop: "2.5rem", marginBottom: "1rem", display: "flex" }}>
            <div style={{ width: "100%", backgroundColor: "#000" }}></div>
          </div> */}
          <div
            style={{ display: "flex", height: "0.5rem", width: "full", marginTop: "1rem", marginBottom: "2rem" }}
            className="w-full flex h-2 mb-10"
          >
            <div style={{ height: "0.5rem", width: "30%", marginBottom: "1rem", backgroundColor: "#f15929" }}></div>
            {/* Orange part */}
            <div style={{ height: "0.5rem", width: "70%", marginBottom: "1rem", backgroundColor: "#29564b" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <div style={{ fontSize: "1rem" }}>Ref. No. {referenceNumber}</div>
            <div style={{ fontSize: "1rem" }}>{moment(letterDate).format("DD/MMMM/YYYY")}</div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: decodedContent }} style={contentStyle} />
          <div style={{ color: "#EF4444", fontFamily: "helvetica", fontSize: "0.7rem", marginBottom: "0.1rem" }}>
            Digitally signed by
          </div>
          <div style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
            Name :{" "}
            <span style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
              {fromContactName === "Admin" ? "Lingaraj Mahanand" : fromContactName}
            </span>
          </div>
          <div style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
            Email :{" "}
            <span style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>{fromCompanyEmail}</span>
          </div>
          <div style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
            Place :{" "}
            <span style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>{fromCompanyAddress}</span>
          </div>
          <div style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
            Date & Timestamp :{" "}
            <span style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
              {" "}
              {moment(createdAt)
                .utc()
                .add(5, "hours")
                .add(30, "minutes")
                .format("DD/MM/YYYY hh:mm a")}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", marginTop: "0.5rem" }}>
            <div style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
              Genesis : <span style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>{mintTxHash}</span>{" "}
            </div>
            <div style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>
              Chain :{" "}
              <span style={{ color: "#000", fontFamily: "helvetica", fontSize: "0.7rem" }}>{blockchainName}</span>{" "}
            </div>
          </div>
          {/* <div style={{ height: "0.5rem", width: "100%", marginBottom: "1rem", display: "flex" }}>
            <div style={{ width: "100%", backgroundColor: "#000" }}></div>
          </div> */}
          <div
            style={{ display: "flex", height: "0.5rem", width: "full", marginBottom: "1.5rem" }}
            // className="w-full flex h-2 mb-10"
          >
            <div style={{ height: "0.5rem", width: "30%", marginBottom: "0.5rem", backgroundColor: "#f15929" }}></div>
            {/* Orange part */}
            <div style={{ height: "0.5rem", width: "70%", marginBottom: "0.5rem", backgroundColor: "#29564b" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontSize: "1rem" }}>
              <div
                style={{
                  // border: "0.05rem solid #000",
                  // borderRadius: "50%",
                  // padding: "0.125rem",
                  margin: "auto",
                  // width: "1.3rem"
                }}
              >
                📞
              </div>
              &nbsp;
              <div style={{ marginTop: "auto", marginBottom:"auto" }}>{fromCompanyNumber}</div>
            </div>
            <div style={{ display: "flex", fontSize: "1rem", margin: "0 1rem" }}>
              <div
                style={{
                  // border: "0.05rem solid #000",
                  // borderRadius: "50%",
                  // padding: "0.125rem",
                  margin: "auto",
                  // width: "1.3rem"
                }}
              >
                🌍
              </div>
              &nbsp;
              <div style={{ marginTop: "auto", marginBottom:"auto" }}>{fromCompanyAddress}</div>
            </div>
            <div style={{ display: "flex", fontSize: "1rem" }}>
              <div
                style={{
                  // border: "0.05rem solid #000",
                  // borderRadius: "50%",
                  margin: "auto",
                  // width: "1.3rem",
                  fontSize: "1.5rem",
                  // paddingLeft: "0.3rem"
                }}
              >
                ✉︎
              </div>
              &nbsp;
              <div style={{ marginTop: "auto", marginBottom:"auto" }}>{fromCompanyEmail}</div>
            </div>
          </div>
        </div>

        <div style={{border: "2px solid black", width:"100%", padding:"0 10px"}}>
          <h4>Please find below the links to download attached documents:</h4>
          {coverLetterDocuments?.map((doc,i)=>(
            <p><b>{i+1}.</b>&nbsp;&nbsp;&nbsp;<span style={{color:"blue"}}>{doc.documentUrl}</span></p>
          ))}
        </div>
      </div>
    </>
  );
};
