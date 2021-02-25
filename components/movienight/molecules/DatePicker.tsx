import * as React from "react";
import spacetime from "spacetime";
import type { Spacetime } from "spacetime";

const useInput = (defaultValue: string): MInput => {
  const [value, setValue] = React.useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return { value, onChange };
};

const useDatePicker = (defaultDateStr?: string): MDatePicker => {
  const dateInput = useInput(defaultDateStr);
  const currentSpacetime = React.useMemo(spacetime.now, []);

  const date = spacetime(dateInput.value, currentSpacetime.timezone.name);
  const timestamp = date.epoch;

  return {
    dateInput,
    date,
    timestamp,
  };
};

const DatePicker: React.FC<MDatePicker> = (model) => {
  return (
    <>
      <label htmlFor="date">Enter Date &amp; Time</label>

      <input
        type="text"
        id="date"
        placeholder="Feb 27 2021 8:00pm"
        {...dateInput}
      />
    </>
  );
};

export default {
  useModel: useDatePicker,
  Component: DatePicker,
};

export type MInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type MDatePicker = {
  dateInput: MInput;
  date: Spacetime;
  timestamp: number;
};
