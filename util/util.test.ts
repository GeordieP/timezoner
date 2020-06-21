import spacetime from "spacetime";
import * as util from "./";

describe("formatTimeString", () => {
  const date = spacetime("Jun 14 2020", "America/Toronto");

  test("12am", () => {
    const t = date.time("12:00am");
    expect(util.formatTimeString(t, 12)).toBe("12:00am");
    expect(util.formatTimeString(t, 24)).toBe("0:00");
  });

  test("earlier than 10", () => {
    const t = date.time("9:00am");
    expect(util.formatTimeString(t, 12)).toBe("9:00am");
    expect(util.formatTimeString(t, 24)).toBe("9:00");
  });

  test("later than 10", () => {
    const t = date.time("11:00am");
    expect(util.formatTimeString(t, 12)).toBe("11:00am");
    expect(util.formatTimeString(t, 24)).toBe("11:00");
  });

  test("am pm", () => {
    const tAm = date.time("9:00am");
    const tPm = date.time("9:00pm");
    expect(util.formatTimeString(tAm, 12)).toBe("9:00am");
    expect(util.formatTimeString(tPm, 12)).toBe("9:00pm");

    expect(util.formatTimeString(tAm, 24)).toBe("9:00");
    expect(util.formatTimeString(tPm, 24)).toBe("21:00");
  });
});

describe("formatTimezoneName", () => {
  test("should replace underscores", () => {
    const input = spacetime("Jun 20 2020", "America/Los_Angeles").timezone();
    const expected = "America/Los_Angeles";

    const result = util.formatTimezoneName(input);
    expect(result).toBe(expected);
  });
});
