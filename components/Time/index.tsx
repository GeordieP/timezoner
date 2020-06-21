import React from "react";
import styles from "./time.module.css";

const Time: React.FC<TimeProps> = (props) => {
  const [timeMain, ampm] = props.timeMain.split(" ");
  const timeAlign = props.timeAlign || "top";

  const wrapAlignment =
    timeAlign === "bottom" ? "u-flexCol" : "u-flexColReverse";

  const timeRowAlignment =
    timeAlign === "bottom" ? "u-endCross" : "u-startCross";

  const timezoneOffset =
    props.timezoneOffset < 0
      ? props.timezoneOffset
      : `+${props.timezoneOffset}`;

  return (
    <div className={`${styles.Time} ${wrapAlignment} ${props.className || ""}`}>
      <div className="u-flexRow u-fullWidth u-spaceBetween">
        <h6>{props.timeAlt}</h6>
        <h6>
          {timezoneOffset} {props.timezoneName.toUpperCase()}
        </h6>
      </div>
      <div className="u-flexRow u-spaceBetween">
        <div
          className={`u-flexRow u-fullWidth u-spaceBetween ${timeRowAlignment}`}
        >
          <div
            className={`u-flexRow u-spaceBetween u-endCross ${styles.Timedisplay}`}
          >
            <h1>{timeMain}</h1>
            <h1>{ampm}</h1>
          </div>
          <h1 className={styles.TimezoneCode}>{props.timezoneCode}</h1>
        </div>
      </div>
    </div>
  );
};

export default Time;

// Types
export type TimeProps = {
  timeAlign?: "top" | "bottom";
  timezoneOffset: number;
  timezoneCode: string;
  timezoneName: string;
  timeMain: string;
  timeAlt: string;
  className?: string;
};
