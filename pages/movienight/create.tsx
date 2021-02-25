import * as React from "react";
import spacetime from "spacetime";
import type { Spacetime } from "spacetime";

export default function To() {
  const date = useInput();
  const [st, setSt] = React.useState<Spacetime>(null);
  const userTimezone = spacetime.now().timezone();

  React.useEffect(() => {
    if (date.value == null) return;
    setSt(spacetime(date.value, userTimezone.name));
  }, [date.value]);

  return (
    <div className="u-flexCol u-fullWidth u-fullHeight u-centerCross u-centerMain">
      <label htmlFor="date">Enter Date &amp; Time</label>
      <input type="text" id="date" {...date} placeholder="Feb 27 2021 8:00pm" />
      <p>Share link</p>
      <input readOnly type="text" size={100} value={makeUrl(st?.epoch)} />
      <a href={makeUrl(st?.epoch)}>{makeUrl(st?.epoch)}</a>
    </div>
  );
}

const useInput = (defaultValue = "") => {
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

const makeUrl = (epoch?: number) => {
  if (epoch == null) return "";
  return `https://timezoner.now.sh/movienight?t=${epoch}`;
};
