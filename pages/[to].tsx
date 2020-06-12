import { useRouter } from "next/router";
import spacetime from "spacetime";
import informal from "spacetime-informal";
import * as util from "../util";

export default function To() {
  const { query } = useRouter();
  const { to } = query;

  if (!to) {
    return <p>Error: No timezone to convert to</p>;
  }

  const now = spacetime.now();
  const adjusted = now.goto(informal.find(to));

  const nowName = util.formatTimezoneName(now.timezone().name);
  const nowCode = util.formatTimezoneCode(now.timezone());
  const nowTime = util.formatTimeString(now);

  const adjustedName = util.formatTimezoneName(adjusted.timezone().name);
  const adjustedCode = util.formatTimezoneCode(adjusted.timezone());
  const adjustedTime = util.formatTimeString(adjusted);

  return (
    <>
      <p>
        {nowName} [{nowCode}]: {nowTime}
      </p>
      <p>
        {adjustedName} [{adjustedCode}]: {adjustedTime}
      </p>
    </>
  );
}
