import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function FocusControl({
  focusDuration,
  session,
  setFocusDuration,
}) {
  function increaseFocus() {
    if (focusDuration < 60) {
      setFocusDuration(focusDuration + 5);
    }
  }

  function decreaseFocus() {
    if (focusDuration > 5) {
      setFocusDuration(focusDuration - 5);
    }
  }
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {`${minutesToDuration(focusDuration)}`}
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={decreaseFocus}
            disabled={session !== null}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={increaseFocus}
            disabled={session !== null}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}
