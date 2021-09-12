import spacetime, { Spacetime } from "spacetime";
import useInput from "../hooks/useInput";
import * as React from "react";
import { DetailedHTMLProps, HTMLProps } from "react";

const TimeInput: React.FC<TimeInputProps> = ({
  onChangeDate,
  ...restProps
}) => {
  const date = useInput();
  const currentTimezone = spacetime.now().timezone();

  React.useEffect(() => {
    if (date.value == null) return;
    const newSt = spacetime(date.value, currentTimezone.name);
    onChangeDate(newSt);
  }, [date.value]);

  return (
    <input
      type="text"
      id="date"
      {...date}
      placeholder="Feb 27 2021 8:00pm"
      {...restProps}
    />
  );
};

export default TimeInput;

export interface TimeInputProps extends HTMLProps<HTMLInputElement> {
  onChangeDate: (spacetime: Spacetime) => void;
}
