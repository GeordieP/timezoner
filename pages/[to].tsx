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

  const toCode = informal.find(to);

  const now = spacetime.now();
  const adjusted = now.goto(toCode);

  const nowTime = util.formatTimeString(now);
  const adjustedTime = util.formatTimeString(adjusted);

  return (
    <>
      <p>
        {now.timezone().name}: {nowTime}
      </p>
      <p>
        {adjusted.timezone().name}: {adjustedTime}
      </p>
    </>
  );
}
