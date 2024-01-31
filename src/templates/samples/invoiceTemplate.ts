import { v2 } from "@govtechsg/open-attestation";
import { Invoice } from "../invoice/types";
export const invoiceTemplate: Invoice = {
  invoice_number: "INV202301",
  supplier_name: "ABC Supplier",
  supplier_address: "123 Supplier St, Supplier City",
  supplier_contact_email: "supplier@email.com",
  supplier_contact_name: "Supplier Contact",
  supplier_contact_phone: "123-456-7890",
  customer_name: "XYZ Customer",
  customer_address: "456 Customer Ave, Customer City",
  customer_contact_name: "Customer Contact",
  customer_contact_email: "customer@email.com",
  invoice_date: "2023-05-30T04:59:19.539Z",
  due_date: "2023-06-30T04:59:19.539Z",
  amount: "10000",
  currency: "EU",
  supplier_vat_number: "IN1234567890123Z1",
  customer_vat_number: "GB123456789",
  taxAmount: "50",
  creditedAmount: "1000",
  contractNumber: "CN456",
  countryOfOrigin: "CountryABC",
  dischargePort: "PortXYZ",
  ladingPort: "PortABC",
  moisture: "-",
  salesOrderNumber: "SO456",
  vesselName: "VESSEL",
  customer_contact_phone: "999999999",
  buyerContractNumber: "BCN0001",
  quantities: "10",
  bankName: "AMEX",
  bankAccountNo: "ACC123456789",
  IFSCCode: "IFSCSBI00010101",
  bankHolderName: "BankGuy",
  Invoice_Lines: [
    {
        description: "best for sneakers",
        quantity: "2",
        unit_price: "5000",
        discount: "10",
        line_total: "10",
        hsCode: "HSCODE001",
    },
    {
        description: "best for sneakers",
        quantity: "2",
        unit_price: "5000",
        discount: "10",
        line_total: "10",
        hsCode: "HSCODE001",
    },
    {
        description: "best for sneakers",
        quantity: "2",
        unit_price: "5000",
        discount: "10",
        line_total: "10",
        hsCode: "HSCODE001",
    },
    {
        description: "best for sneakers",
        quantity: "2",
        unit_price: "5000",
        discount: "10",
        line_total: "10",
        hsCode: "HSCODE001",
    }
  ],
  
  issuers: [
    {
      id: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller",
      name: "CREDORE",
      revocation: {
        type: v2.RevocationType.None
      },
      identityProof: {
        location: "tt.credore.xyz",
        type: v2.IdentityProofType.DNSDid,
        key: "did:ethr:0x49c11F25f101CE6B0f5bBE12d316AB9Ecc1bFbec#controller"
      }
    }
  ],
  $template: {
    name: "INVOICE",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000",
  },
};