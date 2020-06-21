import { useRouter } from "next/router";
import spacetime, { Spacetime } from "spacetime";
import informal from "spacetime-informal";
import * as util from "../../util";
import styles from "./to.module.css";
import Time, { TimeProps } from "../../components/Time";

type TimeZoneProps = { spacetime: Spacetime } & Partial<TimeProps>;
const TimeZone: React.FC<TimeZoneProps> = ({ spacetime: time, ...props }) => {
  const tz = time.timezone();

  const timeProps = {
    timezoneOffset: tz.current.offset,
    timezoneCode: util.formatTimezoneCode(tz),
    timezoneName: util.formatTimezoneName(tz),
    timeMain: util.formatTimeString(time).toString(),
    timeAlt: util.formatTimeString(time, 24).toString(),
  };

  return <Time {...timeProps} {...props} />;
};

export default function To() {
  const { query } = useRouter();
  const { to } = query;

  if (!to) {
    return <p>Error: No timezone to convert to</p>;
  }

  const now = spacetime.now();
  const adjusted = now.goto(informal.find(to));

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <TimeZone spacetime={now} timeAlign="bottom" />
      <hr className="u-fullWidth" />

      <TimeZone spacetime={adjusted} />
    </div>
  );
}
