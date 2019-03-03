import types from "./types.js";

const incrementCount = payload => {
  return {
    type: types.INCREMENT_COUNT,
    payload
  };
};

const decrementCount = payload => {
  return {
    type: types.DECREMENT_COUNT,
    payload
  };
};

export default {
  incrementCount,
  decrementCount
};
