import React, { useReducer } from "react";
import Reducer from "./Reducer";
import TYPE from "../constant/Constant";

const initialValues = {
  counter: 0,
};

function UseReducer() {
  const [state, dispatch] = useReducer(Reducer, initialValues);
  return (
    <div>
      <div className="reducerMainDiv" style={{ backgroundColor: state.color }}>
        <button
          onClick={() => {
            dispatch({
              type: TYPE.CHANGE_COUNTER,
              payload: 1,
            });
          }}
        >
          Increment
        </button>
        {state.counter}
        <button
          onClick={() => {
            dispatch({
              type: TYPE.CHANGE_COUNTER,
              payload: -1,
            });
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: TYPE.CHANGE_COLOR,
              payload: "green",
            });
          }}
        >
          Green
        </button>
        <button
          onClick={() => {
            dispatch({
              type: TYPE.CHANGE_COLOR,
              payload: "yellow",
            });
          }}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
