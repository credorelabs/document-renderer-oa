import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { BILL_OF_EXCHANGE } from "../samples/customTemplateSample";

const containerStyle = css`
  background-color: white;
  color: black;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;
const data = {
  "id": "86a5780d-8ab4-4249-bdee-00c68394b6af:string:b986b7a0-6dcb-4573-867f-a3147851f4ae",
  "dlpcId": "9c87675c-4f8f-4484-851c-1763ec5494cc:string:dlpc-credore-151",
  "originatorId": "e9be9c13-0921-47c4-8601-886278b05033:string:LEI=A1B2C3D4E5F6G7A9|SYSTIME=2023-08-17T06:34:15.928Z",
  "refID": "83bb6367-294f-44a7-8d2f-39e2e1584b26:string:300dfa9b-1b33-4798-badc-4cd9e1cff8e4",
  "committer": "800cc873-350f-400d-893d-da973d80683f:string:LEI=A1B2C3D4E5F6G7B9",
  "committee": "6d3b0051-d512-420c-9fa9-e9c7bc376853:string:LEI=A1B2C3D4E5F6G7A9",
  "currency": "74772a47-5062-431c-b204-990eade7b2c4:string:EU",
  "amount": "86a03bd2-4ee6-4d7c-9615-4971627b6277:string:10000",
  "commitmentDate": "da5d6b7d-f2db-4e05-a701-dfc500f02936:string:2023-08-17T06:34:15.928Z",
  "dueDate": "20623600-014b-4640-82b1-e4f27e75f7e2:string:2023-08-17T06:34:15.928Z",
  "commitmentState": "8fe505ae-e1ef-400c-a1b1-b8560cbfc17e:string:INITIATED",
  "dischargeState": "9553bf21-25c2-4121-8a52-4716e9f93b70:string:OPEN",
  "dischargeDate": "83c1a287-b7f2-4dcc-b88a-d5102eed8b51:string:2023-08-17T06:34:15.928Z",
  "applicableRules": "8e33c8d2-0dbb-416d-84ac-8f5cb1f991fa:string:Name=BAFT_BEST_PRACTICES|Version=VERSION_2.1_DATED_APRIL_2020|URL=https://www.baft.com/dlpc/1234567890",
  "invoiceNumber": "c66bf28c-d3b7-4624-a79d-754897153aa5:string:INVOICE006",
  "frId": "01bf5dab-93fe-447e-aa1f-553bad0a3758:string:bd85e6fd-f066-4a31-bf9e-05730bed3d4e",
  "createdAt": "fbec3268-f101-472b-83e8-da919ba2fe38:string:2023-10-31T08:12:50.737Z",
  "updatedAt": "e92713ab-46a4-42ca-b390-520da575d9f8:string:2023-10-31T11:08:40.571Z"
};

export const BoETemplate: FunctionComponent<TemplateProps<BILL_OF_EXCHANGE> & { className?: string }> = ({
  document,
  className = "",
}) => {
  const tableStyle = {
    border: '1px solid #000', // Add a border to the table
  };

  const cellStyle = {
    border: '1px solid #000', // Add a border to table cells
    padding: '8px',
    text: 'left',
  };
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1>{document.name}</h1>
      {/* <div>awarded to</div> */}
      {/* <h2>{document.recipient.name}</h2> */}
      <h2>Document has been issued</h2>

    </div>
  );
};