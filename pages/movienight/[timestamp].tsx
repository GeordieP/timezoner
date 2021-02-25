import Link from "next/link";
import { useRouter } from "next/router";
import spacetime from "spacetime";
import informal from "spacetime-informal";
import * as util from "../../util";
import Time from "../../components/Time";
import Err from "../../components/movienight/Err";
import CreateForm from "../../components/movienight/Create";
import TimeList from "../../components/movienight/Show";

export default function MovieNightForTimestamp() {
  const { query } = useRouter();
  const timestamp = parseInt((query?.timestamp as string) ?? null);
  const userTimezone = spacetime.now().timezone();
  const userTime = spacetime(timestamp, userTimezone.name);
  const timestampValid = timestamp != null && userTime.isValid();

  if (!timestampValid)
    return (
      <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
        <h3>Invalid Timestamp.</h3>
        <CreateForm />
      </div>
    );

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <TimeList userTime={userTime} />
    </div>
  );
}
