import React from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CCIBolTemplate } from "../cci-bol/template";
import { adaptW3CDocument } from "./w3cAdapter";
import { CCIW3CCargoDocument } from "./types";

export const CCIW3CCargoDocumentTemplate = (
  props: TemplateProps<any>
) => {
  console.log(
    "🔥 CCI W3C CARGO DOCUMENT TEMPLATE LOADED",
    props.document
  );

  const w3cDocument = props.document as CCIW3CCargoDocument;

  const cargoDocument = adaptW3CDocument(w3cDocument);

  return (
    <CCIBolTemplate
      document={cargoDocument}
      handleObfuscation={props.handleObfuscation}
    />
  );
};
