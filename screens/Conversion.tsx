import React from "react";
import { Spacetime } from "spacetime";
import * as util from "../util";
import Time, { TimeProps } from "../components/Time";

const Conversion: React.FC<ConversionProps> = ({ from, to }) => {
  const fromTz = from.timezone();
  const toTz = to.timezone();
  return (
    <>
      <Time
        timezoneOffset={fromTz.current.offset}
        timezoneCode={util.formatTimezoneCode(fromTz)}
        timezoneName={util.formatTimezoneName(fromTz)}
        timeMain={util.formatTimeString(from).toString()}
        timeAlt={util.formatTimeString(from, 24).toString()}
        timeAlign="bottom"
      />
      <hr className="u-fullWidth" />
      <Time
        timezoneOffset={toTz.current.offset}
        timezoneCode={util.formatTimezoneCode(toTz)}
        timezoneName={util.formatTimezoneName(toTz)}
        timeMain={util.formatTimeString(to).toString()}
        timeAlt={util.formatTimeString(to, 24).toString()}
        className="u-marginBot2"
      />
    </>
  );
};

export default Conversion;

// Types

type ConversionProps = {
  from: Spacetime;
  to: Spacetime;
};
