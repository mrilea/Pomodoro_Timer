import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import nextSession from "./nextSession";
import nextTick from "./nextTick";
import FocusControl from "./FocusControl";
import BreakControl from "./BreakControl";
import DisplayFocusTime from "./DisplayFocusTime";
import DisplayBreakTime from "./DisplayBreakTime";
import ProgressBar from "./ProgressBar";
import StartStopButtons from "./StartStopButtons";

// These functions are defined outside of the component to ensure they do not have access to state
// and are, therefore, more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */

/**
 * Higher-order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */

function Pomodoro() {
  // Timer starts out paused
  const initialState = {
    focusTime: 25,
    breakTime: 5,
    session: null,
    isTimerRunning: false,
  };
  const [isTimerRunning, setIsTimerRunning] = useState(
    initialState.isTimerRunning
  );
  // The current session - null where there is no session running
  const [session, setSession] = useState(initialState.session);
  const [focusDuration, setFocusDuration] = useState(initialState.focusTime);
  const [breakDuration, setBreakDuration] = useState(initialState.breakTime);

  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You won't need to make changes to the callback function
   */
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /**
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  function stop() {
    setIsTimerRunning(initialState.isTimerRunning);
    setBreakDuration(initialState.breakTime);
    setFocusDuration(initialState.focusTime);
    return setSession(initialState.session);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <FocusControl
          focusDuration={focusDuration}
          session={session}
          setFocusDuration={setFocusDuration}
        />
        <BreakControl
          breakDuration={breakDuration}
          session={session}
          setBreakDuration={setBreakDuration}
        />
      </div>
      <div className="row">
        <StartStopButtons
          session={session}
          playPause={playPause}
          stop={stop}
          isTimerRunning={isTimerRunning}
        />
      </div>
      <div>
        <div className="row mb-2">
          <div className="col">
            <DisplayFocusTime session={session} focusDuration={focusDuration} />
            <DisplayBreakTime session={session} breakDuration={breakDuration} />
          </div>
        </div>
        <div className="row mb-2">
          <ProgressBar
            session={session}
            focusDuration={focusDuration}
            breakDuration={breakDuration}
          />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
