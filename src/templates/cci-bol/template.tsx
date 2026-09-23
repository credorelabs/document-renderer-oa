import React from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CCICargoDocumentTemplate } from "../transport-document-cci/template";
import { adaptW3CDocument } from "./w3cAdapter";
import { CCICargoDocument } from "./types";

export const CCITemplate = (
  props: TemplateProps<any>
) => {
  console.log(
    "🔥 W3C CARGO DOCUMENT TEMPLATE FOR CCI LOADED",
    props.document
  );

  const w3cDocument = props.document as CCICargoDocument;

  const cargoDocument = adaptW3CDocument(w3cDocument);

  return (
    <CCICargoDocumentTemplate
      document={cargoDocument}
      handleObfuscation={props.handleObfuscation}
    />
  );
};


