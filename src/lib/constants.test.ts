import { describe, expect, it } from "vitest";
import { APP_NAME, CURRENT_PHASE } from "./constants";

describe("application constants", () => {
  it("identifies the application and current phase", () => {
    expect(APP_NAME).toBe("Naskhah Thesis");
    expect(CURRENT_PHASE).toBe(0);
  });
});
