export default function nextTick(prevState) {
    const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
    return {
      ...prevState,
      timeRemaining,
    };
  }