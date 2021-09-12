import * as React from "react";
import type { Spacetime } from "spacetime";
import TimeInput from "../../components/TimeInput";

export default function To() {
  const [st, setSt] = React.useState<Spacetime>(null);

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <label>
        Date &amp; Time
        <TimeInput onChangeDate={setSt} />
      </label>
      <p>Share link</p>
      <a href={makeUrl(st?.epoch)}>{makeUrl(st?.epoch)}</a>
    </div>
  );
}

const makeUrl = (epoch?: number) => {
  if (epoch == null) return "";

  return `${window.location.origin}/movienight?t=${epoch}`;
};
