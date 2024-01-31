import { v2 } from "@govtechsg/open-attestation";
import { BillOfExchangeMain } from "../boe-main/types";

export const boeMainTemplateCertificate: BillOfExchangeMain = {
  holderCompanyName: "KALINGA SUPPLIERS",
  holderEmail: "supplier@example.com",
  acceptorCompanyName: "BOMBAY BUYER",
  acceptorEmail: "buyer@example.com",
  dlpcId: "dlpcId",
  orginatorId: "LEI=ABC09876DEFs|SYSTIME=2023-11-03T09:29:46.216Z",
  refID: "96d29dea-0dcf-44eb-bac8-5be18f383358",
  committer: "LEI=A1B2C3D4E5F6G7H8I91",
  committee: "LEI=ABC09876DEFs",
  currency: "INR",
  amount: "10800",
  commitmentDate: "2023-11-01T04:59:19.539Z",
  dueDate: "2023-12-30T04:59:19.539Z",
  commitmentState: "INITIATED",
  dischargeState: "OPEN",
  dischargeDate: "2023-12-30T04:59:19.539Z",
  applicableRules: "Name=BAFT_BEST_PRACTICES|Version=VERSION_2.1_DATED_APRIL_2020|URL=https://www.baft.com/dlpc/1234567890\"",
  invoiceNumber: "TEST-0006",
  frId: "1774b98d-9a45-41e0-bd9f-d1e166fb2a4c",
  createdAt: "2023-11-03T09:30:25.120Z",
  updatedAt: "2023-11-03T09:30:25.653Z",
  accountNo: "123456789",
  accountPlace: "HSBC",
  txLink: "https://mumbai.polygonscan.com/tx/0x7b0b46fd7e20e850bb4c0cfbf31c0ac000a82be4602934bbbf2c3947a3acbe0d",
  supplierName: "S K Singh",
  supplierJobTitle: "CEO",
  sigTime: "2023-11-30T04:59:19.539Z",
  buyerName: "Imran Khan",
  buyerJobTitle: "CTO",
  acceptorSignTime: "2023-12-28T04:59:19.539Z",
  merkleRoot: "0x1211e2643f9a8e9cee6bae3758b113ae3c8bd3dcf2c8c612dd61246a1d2ae650",
  walletAddress: "0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec",
  txHashUrl: "https://mumbai.polygonscan.com/token/0x5568cf9c775f2988c49f438fd680b8bae6348b74?a=52",
  buyerUrl: "https://mumbai.polygonscan.com/nft/0x5568cf9c775f2988c49f438fd680b8bae6348b74/54",
  supplierURL: 'https://mumbai.polygonscan.com/address/0x5568cf9c775f2988c49f438fd680b8bae6348b74',
  
  issuers: [
    {
      name: "CREDORE",
      tokenRegistry: "0x0687bD3B7Df4DaF3A66140293601aF67ed83eC37",
      identityProof: {
        type: v2.IdentityProofType.DNSTxt,
        location: "td.credore.xyz"
      }
    },
  ],
  $template: {
    name: "BILL_OF_EXCHANGE_MAIN",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};