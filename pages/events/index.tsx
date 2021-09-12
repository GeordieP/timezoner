import * as React from "react";
import useInput from "../../hooks/useInput";
import { Spacetime } from "spacetime";
import TimeInput from "../../components/TimeInput";

export default function EventsIndex() {
  const titleInput = useInput();
  const [date, setDate] = React.useState<Spacetime>(null);

  const dateString =
    date && date.epoch
      ? `<t:${date?.epoch / 1000}:F> | <t:${date?.epoch / 1000}:R>`
      : `?`;

  const titleString =
    titleInput.value && titleInput.value.length > 0
      ? `**${titleInput.value}**`
      : `?`;

  const output = `${titleString}
🕑 ${dateString}
React with 📆 to RSVP`;

  return (
    <div className="u-flexCol u-gapMd">
      <h3 className="text-dim u-noMargin u-noPadding">
        Discord Event Message Generator
      </h3>

      <hr />

      <label className="u-flexRow u-gapLg">
        Event Title
        <input
          type="text"
          {...titleInput}
          placeholder="Title"
          className="grow"
        />
      </label>

      <label className="u-flexRow u-gapLg">
        Date &amp; Time
        <div className="grow u-flexCol">
          <TimeInput onChangeDate={setDate} style={{ height: "40px" }} />
          <div className="font-12">
            {date && date.epoch ? (
              <span className="text-green">
                {date?.format("{day}, {month} {date-ordinal}, {time}")}
              </span>
            ) : (
              <i className="text-dim">
                Enter a valid date, e.g. Feb 27 2021 8:00pm
              </i>
            )}
          </div>
        </div>
      </label>

      <hr />

      <span className="font-12">Output - Copy & Paste</span>
      <textarea readOnly value={output} cols={70} rows={10} />
    </div>
  );
}
