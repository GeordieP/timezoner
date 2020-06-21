import React from "react";
import styles from "./time.module.css";

const Time: React.FC<TimeProps> = (props) => {
  const [timeMain, ampm] = props.timeMain.split(" ");
  const timeAlign = props.timeAlign || "top";
  const wrapAlignment =
    timeAlign === "bottom" ? "u-flexCol" : "u-flexColReverse";
  const timeRowAlignment =
    timeAlign === "bottom" ? "u-startCross" : "u-endCross";

  return (
    <div className={`${styles.Time} ${wrapAlignment} ${props.className || ""}`}>
      <div className="u-flexRow u-spaceBetween">
        <h6>{props.timezoneName.toUpperCase()}</h6>
        <h6>
          {props.timezoneOffset} {props.timezoneCode}
        </h6>
      </div>
      <div className="u-flexRow u-spaceBetween">
        <div
          className={`u-flexRow u-fullWidth u-spaceBetween ${timeRowAlignment}`}
        >
          <div className="u-flexRow u-spaceBetween">
            <h1>{timeMain}</h1>
            <h1>{ampm}</h1>
          </div>
          <div>
            <h6>{props.timeAlt}</h6>
          </div>
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
