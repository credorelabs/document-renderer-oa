const fs = require("fs");
const path = require("path");

const rendererUtils = path.join(
  __dirname,
  "..",
  "node_modules",
  "@govtechsg",
  "decentralized-renderer-react-components",
  "build",
  "esm",
  "utils.js"
);

const original = `  if (isV3Document(document) && document.openAttestationMetadata.template) {
    return document.openAttestationMetadata.template.name;
  }`;
const replacement = `  if (isV3Document(document)) {
    if (document.openAttestationMetadata && document.openAttestationMetadata.template) {
      return document.openAttestationMetadata.template.name;
    }

    if (Array.isArray(document.renderMethod)) {
      var renderMethod = document.renderMethod.find(function (method) {
        return method && method.templateName;
      });
      return renderMethod ? renderMethod.templateName : "";
    }
  }`;

if (!fs.existsSync(rendererUtils)) {
  throw new Error(`Renderer utility not found: ${rendererUtils}`);
}

const contents = fs.readFileSync(rendererUtils, "utf8");
if (contents.includes(replacement)) {
  process.exit(0);
}
if (!contents.includes(original)) {
  throw new Error("Renderer utility has an unexpected template lookup implementation");
}

fs.writeFileSync(rendererUtils, contents.replace(original, replacement));
