import Link from "next/link";
import { useRouter } from "next/router";
import spacetime from "spacetime";
import type { Spacetime } from "spacetime";
import informal from "spacetime-informal";
import * as util from "../../util";
import Err from "../../components/movienight/Err";
import Time from "../../components/Time";

const CONVERSIONS = ["EST", "CST", "PST", "CET"].map<string>(informal.find);

const Show: React.FC<{ userTime: Spacetime }> = ({ userTime }) => {
  const filterTz = (x: string) => x !== userTime.timezone.name;
  const convertedTimes = CONVERSIONS.filter(filterTz).map((x) => {
    return userTime.goto(x);
  });

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <h4>Movie Night is at</h4>
      <WrappedTime tz={userTime} />
      <hr className="u-fullWidth" />

      <h4>Which is</h4>

      {convertedTimes.map((t) => (
        <>
          <WrappedTime tz={t} />
          <hr className="u-fullWidth" />
        </>
      ))}

      <Link href="/movienight">
        <a>New Movie Night</a>
      </Link>
    </div>
  );
};

export default Show;

const WrappedTime = ({ tz }) => {
  const toTz = tz.timezone();
  return (
    <Time
      timezoneOffset={toTz.current.offset}
      timezoneCode={util.formatTimezoneCode(toTz)}
      timezoneName={util.formatTimezoneName(toTz)}
      timeMain={util.formatTimeString(tz).toString()}
      timeAlt={util.formatTimeString(tz, 24).toString()}
      timeAlign="bottom"
    />
  );
};
