import React from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { BulkEblTemplate } from "../bulkbol/template";
import { adaptW3CDocument } from "./w3cAdapter";
import { BulkEblW3CCargoDocument } from "./types";

export const BulkBOLW3CTemplate = (props: TemplateProps<any>): JSX.Element => {
  const w3cDocument = props.document as BulkEblW3CCargoDocument;
  const BulkEblCargoDocument = adaptW3CDocument(w3cDocument);

  return <BulkEblTemplate document={BulkEblCargoDocument} handleObfuscation={props.handleObfuscation} />;
};
