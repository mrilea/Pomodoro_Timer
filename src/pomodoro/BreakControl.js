import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function BreakControl({
  breakDuration,
  session,
  setBreakDuration,
}) {
  function increaseBreak() {
    if (breakDuration < 15) {
      setBreakDuration(breakDuration + 1);
    }
  }

  function decreaseBreak() {
    if (breakDuration > 1) {
      setBreakDuration(breakDuration - 1);
    }
  }
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {`${minutesToDuration(breakDuration)}`}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={decreaseBreak}
              disabled={session !== null}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={increaseBreak}
              disabled={session !== null}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
