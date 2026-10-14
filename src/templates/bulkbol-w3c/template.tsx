import React from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { BulkEblTemplate } from "../bulkbol/template";
import { adaptW3CDocument } from "./w3cAdapter";
import { BulkEblW3CCargoDocument } from "./types";

export const BulkBOLW3CTemplate = (
  props: TemplateProps<any>
) => {
  console.log(
    "🔥 W3C CARGO DOCUMENT TEMPLATE LOADED",
    props.document
  );

  const w3cDocument = props.document as BulkEblW3CCargoDocument;

  console.log('Bulk BOL w3cDocument', w3cDocument);
  const BulkEblCargoDocument = adaptW3CDocument(w3cDocument);
  console.log('BulkEblCargoDocument', BulkEblCargoDocument);

  return (
    <BulkEblTemplate
      document={BulkEblCargoDocument}
      handleObfuscation={props.handleObfuscation}
    />
  );
};
