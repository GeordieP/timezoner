import Link from "next/link";
import { useRouter } from "next/router";
import spacetime from "spacetime";
import informal from "spacetime-informal";
import * as util from "../../util";
import Time from "../../components/Time";

export default function To() {
  const { query } = useRouter();
  const { t } = query;

  const userTimezone = spacetime.now().timezone();
  const userTime = spacetime(parseInt(t as string), userTimezone.name);

  const est = userTime.goto(informal.find("EST"));
  const cst = userTime.goto(informal.find("CST"));
  const pst = userTime.goto(informal.find("PST"));
  const cet = userTime.goto(informal.find("CET"));
  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <h4>Movie Night is at</h4>
      <WrappedTime tz={userTime} />
      <hr className="u-fullWidth" />

      <h4>Which is</h4>
      <WrappedTime tz={est} />
      <hr className="u-fullWidth" />
      <WrappedTime tz={cst} />
      <hr className="u-fullWidth" />
      <WrappedTime tz={pst} />
      <hr className="u-fullWidth" />
      <WrappedTime tz={cet} />

      <Link href="/movienight/create">
        <a>New Movie Night</a>
      </Link>
    </div>
  );
}

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
