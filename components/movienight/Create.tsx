import * as React from "react";
import spacetime from "spacetime";
import DatePicker from "./molecules/DatePicker";
import type { Spacetime } from "spacetime";

export default function Create({ setParentSt }) {
  const datePicker = DatePicker.useModel();

  return (
    <div>
      <DatePicker.Component {...datePicker} />
    </div>
  );
}

function Createold({ setParentSt }) {
  const [date, setDate] = React.useState("");
  const [st, setSt] = React.useState<Spacetime>(null);
  const [url, setUrl] = React.useState<string>("");
  const userTimezone = spacetime.now().timezone();

  const onChangeDate = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    const newSt = spacetime(newDate, userTimezone.name);
    setSt(newSt);
    if (setParentSt != null) setParentSt(newSt);
    setUrl(makeUrl(st?.epoch));
  };

  return (
    <div>
      <label htmlFor="date"></label>
      <input
        type="text"
        id="date"
        value={date}
        onChange={onChangeDate}
        placeholder="Feb 27 2021 8:00pm"
      />
      <p>Share link:</p>
      <a href={url}>{url}</a>
    </div>
  );
}

const makeUrl = (epoch?: number) => {
  if (epoch == null) return "";
  return `${window.location.origin}/movienight/${epoch}`;
};
