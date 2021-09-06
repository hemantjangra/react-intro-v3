import React, { useEffect, useState, Fragment, useCallback, memo } from "react";

export const Callback = () => {
  const fibonacci = (number) => {
    if (number <= 1) {
      return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
  };

  const [number, setNumber] = useState(1);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <h2>useCallBack Example {time.toLocaleTimeString()}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <ExpensiveComponent compute={useCallback(fibonacci, [])} count={number} />
    </div>
  );
};

const ExpensiveComponent = memo(({ compute, count }) => {
  return (
    <Fragment>
      <h2>Computed {compute(count)}</h2>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </Fragment>
  );
});

// const ExpensiveComponent = ({ compute, count }) => {
//     return (
//         <Fragment>
//             <h2>Computed {compute(count)}</h2>
//             <h4>last re-render {new Date().toLocaleTimeString()}</h4>
//         </Fragment>
//     );
// };
