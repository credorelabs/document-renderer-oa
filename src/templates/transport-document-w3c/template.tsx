import React from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { CargoDocumentTemplate } from "../transport-document/template";
import { adaptW3CDocument } from "./w3cAdapter";
import { W3CCargoDocument } from "./types";

export const W3CCargoDocumentTemplate = (
  props: TemplateProps<any>
) => {
  console.log(
    "🔥 W3C CARGO DOCUMENT TEMPLATE LOADED",
    props.document
  );

  const w3cDocument = props.document as W3CCargoDocument;

  const cargoDocument = adaptW3CDocument(w3cDocument);

  return (
    <CargoDocumentTemplate
      document={cargoDocument}
      handleObfuscation={props.handleObfuscation}
    />
  );
};
