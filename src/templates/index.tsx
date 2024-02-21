import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./boe";
import { COCtemplates } from "./coc";
import { BillOfExchangeTemplates } from "./boe-main";
import { BOLTemplates } from "./bol";
import { InvoiceTemplates } from "./invoice";
import { CertificateofOriginTemplates } from "./certificateoforigin";
import { packingListTemplate } from "./samples/packingListTemplate";
import { PackingListTemplate } from "./packingList/template";
import { PackingListTemplates } from "./packingList";
import { PhytoTemplates } from "./phyto-certificate";
import { MumbaiCertificateofOriginTemplate } from "./mumbai-CoO/template";
import { MumbaiCooTemplate } from "./samples/mumbaiCoO";
import { MumbaiCertificateofOriginTemplates } from "./mumbai-CoO";

export const registry: TemplateRegistry<any> = {
  BILL_OF_EXCHANGE: templates,
  COC: COCtemplates,
  BILL_OF_EXCHANGE_MAIN: BillOfExchangeTemplates,
  BOL: BOLTemplates,
  INVOICE: InvoiceTemplates,
  CERTIFICATE_OF_ORIGIN: CertificateofOriginTemplates,
  PACKING_LIST: PackingListTemplates,
  PHYTOSANITARY_CERTIFICATE: PhytoTemplates,
  MUMBAI_CERTIFICATE_OF_ORIGIN: MumbaiCertificateofOriginTemplates
  // PACKING_LIST:packingListTemplate
};
