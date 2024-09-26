import { describe, test, expect } from "vitest";
import { philers } from "./philers";

describe("Philers", () => {
  test.each(philers)("philer should contain phil", philer => {
    expect(philer.toLowerCase()).contains("phil");
  });
});
