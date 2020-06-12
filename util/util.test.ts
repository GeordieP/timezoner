import * as util from "./";

describe("formatTimezoneName", () => {
  test("should replace underscores", () => {
    const input = "America/Los_Angeles";
    const expected = "America/Los Angeles";

    const result = util.formatTimezoneName(input);
    expect(result).toBe(expected);
  });
});
