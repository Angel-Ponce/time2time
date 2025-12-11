import {
  nanoSeconds,
  microSeconds,
  milliSeconds,
  seconds,
  minutes,
  hours,
  days,
  weeks,
} from "./index";

describe("Time Converters", () => {
  test("minutes to milliseconds", (onFinish) => {
    expect(minutes(5).to("ms")).toBe(300000);

    onFinish();
  });

  test("seconds to milliseconds", (onFinish) => {
    expect(seconds(10).to("ms")).toBe(10000);

    onFinish();
  });

  test("milliseconds to seconds", (onFinish) => {
    expect(milliSeconds(1500).to("sec")).toBe(1.5);

    onFinish();
  });

  test("microseconds to seconds", (onFinish) => {
    expect(microSeconds(1_000_000).to("sec")).toBe(1);

    onFinish();
  });

  test("nanoseconds to milliseconds", (onFinish) => {
    expect(nanoSeconds(1_000_000).to("ms")).toBe(1);

    onFinish();
  });

  test("hours to minutes", (onFinish) => {
    expect(hours(2).to("min")).toBe(120);

    onFinish();
  });

  test("days to hours", (onFinish) => {
    expect(days(1).to("hr")).toBe(24);

    onFinish();
  });

  test("weeks to days", (onFinish) => {
    expect(weeks(1).to("day")).toBe(7);

    onFinish();
  });

  test("returns the same value hen converting minutes to minutes", (onFinish) => {
    expect(minutes(3).to("min")).toBe(3);

    onFinish();
  });

  test("returns the same value hen converting seconds to seconds", (onFinish) => {
    expect(seconds(42).to("sec")).toBe(42);

    onFinish();
  });

  test("hours to weeks", (onFinish) => {
    expect(hours(168).to("week")).toBe(1);

    onFinish();
  });

  test("weeks to hours", (onFinish) => {
    expect(weeks(1).to("hr")).toBe(168);

    onFinish();
  });

  test("days to weeks", (onFinish) => {
    expect(days(14).to("week")).toBe(2);

    onFinish();
  });

  test("weeks to days", (onFinish) => {
    expect(weeks(3).to("day")).toBe(21);

    onFinish();
  });

  test("minutes to days", (onFinish) => {
    expect(minutes(1440).to("day")).toBe(1);

    onFinish();
  });

  test("days to minutes", (onFinish) => {
    expect(days(2).to("min")).toBe(2880);

    onFinish();
  });

  test("milliseconds to hours", (onFinish) => {
    expect(milliSeconds(3_600_000).to("hr")).toBeCloseTo(1);

    onFinish();
  });

  test("hours to milliseconds", (onFinish) => {
    expect(hours(1).to("ms")).toBe(3_600_000);

    onFinish();
  });

  test("microseconds to seconds", (onFinish) => {
    expect(microSeconds(1_000_000).to("sec")).toBe(1);

    onFinish();
  });

  test("seconds to microseconds", (onFinish) => {
    expect(seconds(1).to("us")).toBe(1_000_000);

    onFinish();
  });

  test("nanoseconds to microseconds", (onFinish) => {
    expect(nanoSeconds(1_000).to("us")).toBe(1);

    onFinish();
  });

  test("microseconds to nanoseconds", (onFinish) => {
    expect(microSeconds(1).to("ns")).toBe(1000);

    onFinish();
  });

  test("seconds to hours", (onFinish) => {
    expect(seconds(3600).to("hr")).toBe(1);

    onFinish();
  });

  test("hours to seconds", (onFinish) => {
    expect(hours(2).to("sec")).toBe(7200);

    onFinish();
  });
});
