import React, { useReducer } from "react";

export const Reducer = () => {
  const limit = 50;

  const limitRGBValues = (value) => {
    if (value < 0) {
      return 0;
    }
    if (value > 255) {
      return 255;
    }
    return value;
  };

  const rgbUpdate = (state, action) => {
    switch (action.type) {
      case "incrementR":
        const incrementRedColorState = Object.assign(
          { ...state },
          { red: limitRGBValues(state.red + limit) }
        );
        console.log(
          `Returned value while action is ${action} `,
          incrementRedColorState
        );
        return incrementRedColorState;
      case "decrementR":
        const decrementRedColorState = Object.assign(
          { ...state },
          { red: limitRGBValues(state.red - limit) }
        );
        console.log(
          `Returned value while action is ${action} `,
          decrementRedColorState
        );
        return decrementRedColorState;
      case "incrementG":
        const incrementGreenColorState = Object.assign(
          { ...state },
          { green: limitRGBValues(state.green + limit) }
        );
        console.log(
          `Returned value while action is ${action} `,
          incrementGreenColorState
        );
        return incrementGreenColorState;
      case "decrementG":
        const decrementGreenColorState = Object.assign(
          { ...state },
          { green: limitRGBValues(state.green - limit) }
        );
        console.log(
          `Returned value while action is ${action} `,
          decrementGreenColorState
        );
        return decrementGreenColorState;
      case "incrementB":
        const incrementBlueColorState = Object.assign(
          { ...state },
          { blue: limitRGBValues(state.blue + limit) }
        );
        console.log(
          `Returned value while action is ${action} `,
          incrementBlueColorState
        );
        return incrementBlueColorState;
      case "decrementB":
        const decrementBlueColorState = Object.assign(
          { ...state },
          { blue: limitRGBValues(state.blue - limit) }
        );
        console.log(
          `Returned value while action is ${action} `,
          decrementBlueColorState
        );
        return decrementBlueColorState;
    }
  };

  const [state, dispatch] = useReducer(rgbUpdate, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, blue, green } = state;

  return (
    <div>
      <h2 style={{ color: `rgb(${red}, ${green}, ${blue})` }}>
        Use Reducer Example
      </h2>
      <p>
        <button onClick={() => dispatch({ type: "incrementR" })}>+</button>
        <button onClick={() => dispatch({ type: "decrementR" })}>-</button>R
      </p>
      <p>
        <button onClick={() => dispatch({ type: "incrementG" })}>+</button>
        <button onClick={() => dispatch({ type: "decrementG" })}>-</button>G
      </p>
      <p>
        <button onClick={() => dispatch({ type: "incrementB" })}>+</button>
        <button onClick={() => dispatch({ type: "decrementB" })}>-</button>B
      </p>
    </div>
  );
};
