import React from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { adaptW3CDocument } from "./w3cAdapter";
import { W3CCargoDocument } from "./types";
import { CargoDocumentTemplate } from "./template";

export const W3CCargoDocumentTemplate = (
  props: TemplateProps<any>
) => {
  const { document } = props;

  const w3cDocument = document as W3CCargoDocument;

  const cargoDocument = adaptW3CDocument(w3cDocument);

  return (
    <CargoDocumentTemplate
      {...props}
      document={cargoDocument}
    />
  );
};