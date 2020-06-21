import { useRouter } from "next/router";
import spacetime from "spacetime";
import informal from "spacetime-informal";
import Conversion from "../../screens/Conversion";

export default function FromTo() {
  const { query } = useRouter();
  const { time1, time2 } = query;

  if (!time1) {
    return <p>Error: No timezone to convert from</p>;
  }

  if (!time2) {
    return <p>Error: No timezone to convert to</p>;
  }

  const now = spacetime.now();
  const from = now.goto(informal.find(time1));
  const to = now.goto(informal.find(time2));

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <Conversion from={from} to={to} />
    </div>
  );
}
