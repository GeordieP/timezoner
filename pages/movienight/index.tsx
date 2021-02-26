import Link from "next/link";
import { useRouter } from "next/router";
import spacetime from "spacetime";
import informal from "spacetime-informal";
import * as util from "../../util";
import Time from "../../components/Time";

const CONVERSIONS = ["EST", "CST", "PST", "CET"].map<string>(informal.find);

export default function To() {
  const { query } = useRouter();
  const { t } = query;

  if (t == null) return <Err msg="Missing timestamp" />;

  const userTimezone = spacetime.now().timezone();
  const userTime = spacetime(parseInt(t as string), userTimezone.name);

  if (!userTime.isValid()) return <Err msg="Invalid timestamp" />;

  const filterTz = (x: string) => x !== userTimezone.name;
  const convertedTimes = CONVERSIONS.filter(filterTz).map((x) => {
    return userTime.goto(x);
  });

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <h6 style={{ marginBottom: 0 }}>Movie Night is</h6>
      <h3 style={{ color: "white", marginTop: 0 }}>
        {userTime.format("{day}, {month} {date-ordinal}")}
      </h3>

      <WrappedTime tz={userTime} />

      {convertedTimes.map((t) => (
        <>
          <hr style={{ width: "18rem" }} />
          <WrappedTime tz={t} />
        </>
      ))}

      <Link href="/movienight/create">
        <a>
          <p
            style={{
              marginTop: "50px",
              fontSize: "8pt",
              fontWeight: "normal",
            }}
          >
            New Movie Night
          </p>
        </a>
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

const Err = ({ msg }: { msg: string }) => {
  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <h2>{msg}</h2>

      <Link href="/movienight/create">
        <a>
          <p>Create a valid link</p>
        </a>
      </Link>
    </div>
  );
};
