import { Spacetime } from "spacetime";

export function formatTimeString(st: Spacetime, clock: ClockHours = 12) {
  const hour = formatHour(st.hour(), clock);
  const ampm = clock === 12 ? st.ampm() : "";
  return `${hour}:${st.minute()} ${ampm}`;
}

function formatHour(hour: number, clock: ClockHours) {
  if (clock === 24) return hour;
  if (hour > 12) return hour - 12;
  return hour;
}

// Types

type ClockHours = 12 | 24;
