import React from "react";

export default function ProgressBar({ session, focusDuration, breakDuration }) {
  return (
    session !== null && (
      <div className="col">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={
              100 -
              (100 * session?.timeRemaining) /
                (session?.label === "Focusing"
                  ? focusDuration * 60
                  : breakDuration * 60)
            }
            style={{
              width: `${
                100 -
                (100 * session?.timeRemaining) /
                  (session?.label === "Focusing"
                    ? focusDuration * 60
                    : breakDuration * 60)
              }%`,
            }}
          />
        </div>
      </div>
    )
  );
}
