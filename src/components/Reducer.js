import React from "react";
import TYPE from "../constant/Constant";

function Reducer(state, action) {
  switch (action.type) {
    case TYPE.CHANGE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case TYPE.CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
}

export default Reducer;
