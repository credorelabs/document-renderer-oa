import { v2 } from "@govtechsg/open-attestation";
import { Invoice } from "../invoice/types";
export const invoiceTemplate: Invoice = {
  invoice_number: "INV202301",
  supplier_name: "ABC Supplier",
  supplier_address: "123 Supplier St, Supplier City",
  supplier_contact_email: "supplier@email.com",
  supplier_contact_name: "Supplier Contact",
  supplier_contact_phone: "123-456-7890",
  customer_lei_number: 'ASDFGHJKLUYTREFDGHJ',
  supplier_lei_number: 'SDFGHJKLJHGFDKJHGFD',
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
  subTotal: "1000",
  blockchainName: "XDC",
  mintTxHash: "0x95247fd171e353e1d2a7a1c36f1d869c9f750e0b48d48bfe0675ec622f122af3",
  signerLocation: "Bhubaneswar",
  signerIPAddress: "137.345.23.10",

  Invoice_Lines: [
    {
      description: "best for sneakers",
      quantity: "2",
      unit_price: "5000",
      discount: "10",
      line_total: "10",
      hsCode: "HSCODE001"
    },
    {
      description: "best for sneakers",
      quantity: "2",
      unit_price: "5000",
      discount: "10",
      line_total: "10",
      hsCode: "HSCODE001"
    },
    {
      description: "best for sneakers",
      quantity: "2",
      unit_price: "5000",
      discount: "10",
      line_total: "10",
      hsCode: "HSCODE001"
    },
    {
      description: "best for sneakers",
      quantity: "2",
      unit_price: "5000",
      discount: "10",
      line_total: "10",
      hsCode: "HSCODE001"
    }
  ],

  invoiceProof: [{
    a0: "1883415604158045018758784307621608541141656088150671126336919119463579281976",
    a1: "481486531415174545861518055832704512332066754785381752517889213186204020854",
    b0: "19472865000851586587233492554418613501307819590551265018263417518504616128719",
    b1: "19042321348336369171156220546957910039570548376126055917178173290093728727059",
    b2: "12454320893011956406728307167101154280673518520526064558279469282445580260562",
    b3: "6135457810494506073647459415868749459270479612062963917114595795650808536942",
    c0: "632298289898394378764433953656537542932208624038552230205734932116637754329",
    c1: "20512704515447428000231780480269601301199455727786440182564501953727451428201",
    scalarPubKey0: "16551728319327439168317300279856018011041840639624811157340627997761414256717",
    scalarPubKey1: "21676599011130813512183056032443407887594316023951962444664078281579755267315"
  }],

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
    url: "http://localhost:3000"
  }
};
