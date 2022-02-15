import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

export default function DisplayBreakTime({ session, breakDuration}) {
  return (
    session?.label === "On Break" && (
      <>
        <h2 data-testid="session-title">
          On Break for {`${minutesToDuration(breakDuration)}`} minutes
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
