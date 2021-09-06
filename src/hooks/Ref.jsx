import React, { useRef, useState } from "react";

export const Ref = () => {
  const [stateNumber, setStateNumber] = useState(0);

  const numRef = useRef(0);

  const functionIncrementDelayedCounter = () => {
    setStateNumber(stateNumber + 1);
    numRef.current = numRef.current + 1;
    alert(
      `state value after update is ${stateNumber} and ref Value is ${numRef.current}`
    );
  };

  return (
    <div>
      <button onClick={() => functionIncrementDelayedCounter()}>
        Delay Logging
      </button>
      <p>State: {stateNumber}</p>
      <p>Ref: {numRef.current}</p>
    </div>
  );
};
