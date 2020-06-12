import { Spacetime, TimezoneMeta } from "spacetime";
import informal from "spacetime-informal";

export function formatTimeString(st: Spacetime, clock: ClockHours = 12) {
  const hour = formatHour(st.hour(), clock);
  const minute = st.minute() === 0 ? "00" : st.minute();
  const ampm = clock === 12 ? st.ampm() : "";
  return `${hour}:${minute} ${ampm}`;
}

function formatHour(hour: number, clock: ClockHours) {
  if (clock === 24) return hour;
  if (hour > 12) return hour - 12;
  return hour;
}

export const formatTimezoneName = (name: string) => name.replace(/_/g, " ");

export function formatTimezoneCode(tz: TimezoneMeta) {
  if (!tz.hasDst || !tz.current.isDST) {
    return informal.display(tz.name).standard.abbrev;
  }

  return informal.display(tz.name).daylight.abbrev;
}

// Types

type ClockHours = 12 | 24;
