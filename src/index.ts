import TimeMoment from "./time-moment";

const NanoSeconds = new TimeMoment("ns", 1, null);

const MicroSeconds = new TimeMoment("us", 1000, NanoSeconds);

const MilliSeconds = new TimeMoment("ms", 1000, MicroSeconds);

const Seconds = new TimeMoment("sec", 1000, MilliSeconds);

const Minutes = new TimeMoment("min", 60, Seconds);

const Hours = new TimeMoment("hr", 60, Minutes);

const Days = new TimeMoment("day", 24, Hours);

const Weeks = new TimeMoment("week", 7, Days);

const TimeUnits = {
  ns: NanoSeconds,
  ms: MilliSeconds,
  us: MicroSeconds,
  sec: Seconds,
  min: Minutes,
  hr: Hours,
  day: Days,
  week: Weeks,
} as const;

export type TimeUnit = keyof typeof TimeUnits;

export type TimeConverter = (value: number) => {
  value: number;
  to: (unit: TimeUnit) => number;
};

export const nanoSeconds: TimeConverter = (nss: number) => ({
  value: nss,
  to: (unit) => NanoSeconds.to(nss, TimeUnits[unit]),
});

export const microSeconds: TimeConverter = (uss: number) => ({
  value: uss,
  to: (unit) => MicroSeconds.to(uss, TimeUnits[unit]),
});

export const milliSeconds: TimeConverter = (mss: number) => ({
  value: mss,
  to: (unit) => MilliSeconds.to(mss, TimeUnits[unit]),
});

export const seconds: TimeConverter = (secs: number) => ({
  value: secs,
  to: (unit) => Seconds.to(secs, TimeUnits[unit]),
});

export const minutes: TimeConverter = (mins: number) => ({
  value: mins,
  to: (unit) => Minutes.to(mins, TimeUnits[unit]),
});

export const hours: TimeConverter = (hrs: number) => ({
  value: hrs,
  to: (unit) => Hours.to(hrs, TimeUnits[unit]),
});

export const days: TimeConverter = (days: number) => ({
  value: days,
  to: (unit) => Days.to(days, TimeUnits[unit]),
});

export const weeks: TimeConverter = (weeks: number) => ({
  value: weeks,
  to: (unit) => Weeks.to(weeks, TimeUnits[unit]),
});
