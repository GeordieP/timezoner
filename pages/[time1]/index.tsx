import { useRouter } from "next/router";
import spacetime from "spacetime";
import informal from "spacetime-informal";
import Conversion from "../../screens/Conversion";

export default function To() {
  const { query } = useRouter();
  const { time1 } = query;

  if (!time1) {
    return <p>Error: No timezone to convert to</p>;
  }

  const from = spacetime.now();
  const to = from.goto(informal.find(time1));

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <Conversion from={from} to={to} />
    </div>
  );
}
