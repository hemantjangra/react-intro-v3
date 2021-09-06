import React, { useMemo, useReducer, useRef, useState } from "react";

export const Memo = () => {
  const calculateFibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const [number, setNumber] = useState(1);
  // const [fibonacci, setFibonacci] = useState(calculateFibonacci(number)); no need since calculation dependent on number\
  // use below line instead and memo it - put a decrement op as well to see the memo effect
  //const fib = calculateFibonacci(number);

  const fib = useMemo(() => calculateFibonacci(number), [number]);

  const [isGreen, setIsGreen] = useState(true);

  return (
    <div>
      <p
        style={{ color: isGreen ? "limegreen" : "crimson" }}
        onClick={() => setIsGreen(!isGreen)}
      >
        This is the memo component
      </p>
      <h2>{fib}</h2>
      <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
