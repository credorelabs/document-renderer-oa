import { BulkBOLData } from "../bulkbol/types";
import { adaptW3CDocument } from "./w3cAdapter";

describe("adaptW3CDocument", () => {
  it("preserves credential subjects that already contain a recipient", () => {
    const subject = {
      recipient: { documentNumber: "BOL-123" },
      qrCode: { uri: "https://example.com/verify" }
    } as BulkBOLData;

    expect(adaptW3CDocument({ credentialSubject: subject })).toBe(subject);
    expect(adaptW3CDocument({ credentialSubject: subject }).recipient?.documentNumber).toBe("BOL-123");
  });

  it("wraps a flat credential subject as the recipient", () => {
    const subject = { documentNumber: "BOL-456", portOfLoading: "Singapore" };

    expect(adaptW3CDocument({ credentialSubject: subject }).recipient).toStrictEqual(subject);
  });

  it("uses the first credential subject when the subject is an array", () => {
    const subjects = [{ documentNumber: "BOL-789" }, { documentNumber: "BOL-999" }];

    expect(adaptW3CDocument({ credentialSubject: subjects }).recipient?.documentNumber).toBe("BOL-789");
  });
});
