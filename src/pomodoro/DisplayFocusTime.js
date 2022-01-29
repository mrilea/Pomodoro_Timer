import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

export default function DisplayFocusTime({ session, focusDuration }) {
  return (
    session?.label === "Focusing" && (
      <>
        <h2 data-testid="session-title">
          {/* update message to display focus/on break time */}
          Focusing for {`${minutesToDuration(focusDuration)}`} minutes
        </h2>
        <p className="lead" data-testid="session-sub-title">
          {session
            ? `${secondsToDuration(session.timeRemaining)} remaining`
            : ""}
        </p>
      </>
    )
  );
}
