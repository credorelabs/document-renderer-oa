import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./boe";
import { COCtemplates } from "./coc";
import { BillOfExchangeTemplates } from "./boe-main";
import { InvoiceTemplates } from "./invoice";
import { CertificateofOriginTemplates } from "./certificateoforigin";
import { packingListTemplate } from "./samples/packingListTemplate";
import { PackingListTemplate } from "./packingList/template";
import { PackingListTemplates } from "./packingList";
import { PhytoTemplates } from "./phyto-certificate";
import { MumbaiCertificateofOriginTemplate } from "./mumbai-CoO/template";
import { MumbaiCooTemplate } from "./samples/mumbaiCoO";
import { MumbaiCertificateofOriginTemplates } from "./mumbai-CoO";
import { CoverLetterTemplates } from "./cover-letter";
import { PromisoryTemplate } from "./promissory";
import { BOLTemplates } from "./cordelia-bol";
import { PurchaseOrderTemplates } from "./purchase-order";
import { FiataEBolTemplates } from "./fiata-bol";
import { ProformaInvoiceTemplates } from "./proforma-invoice";
import { ShippingInstructionTemplates } from "./shipping-instruction";

export const registry: TemplateRegistry<any> = {
  BILL_OF_EXCHANGE: templates,
  COC: COCtemplates,
  BILL_OF_EXCHANGE_MAIN: BillOfExchangeTemplates,
  BOL_CORDELIA: BOLTemplates,
  INVOICE: InvoiceTemplates,
  CERTIFICATE_OF_ORIGIN: CertificateofOriginTemplates,
  PACKING_LIST: PackingListTemplates,
  PHYTOSANITARY_CERTIFICATE: PhytoTemplates,
  MUMBAI_CERTIFICATE_OF_ORIGIN: MumbaiCertificateofOriginTemplates,
  COVER_LETTER: CoverLetterTemplates,
  PROMISSORY_NOTE: PromisoryTemplate,
  PURCHASE_ORDER: PurchaseOrderTemplates,
  FIATA_BOL: FiataEBolTemplates,
  PROFORMA_INVOICE: ProformaInvoiceTemplates,
  SHIPPING_INSTRUCTIONS: ShippingInstructionTemplates
  // PACKING_LIST:packingListTemplate
};
