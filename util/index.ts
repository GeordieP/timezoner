import { Spacetime, TimezoneMeta } from "spacetime";
import informal from "spacetime-informal";

export function formatTimeString(st: Spacetime, clock: ClockHours = 12) {
  const format = clock === 24 ? "{time-24}" : "{time}";
  return st.format(format).toString();
}

export const formatTimezoneName = (tz: TimezoneMeta) =>
  tz.name.replace(/_/g, " ");

export function formatTimezoneCode(tz: TimezoneMeta) {
  if (!tz.hasDst || !tz.current.isDST) {
    return informal.display(tz.name).standard.abbrev;
  }

  return informal.display(tz.name).daylight.abbrev;
}

// Types

type ClockHours = 12 | 24;
