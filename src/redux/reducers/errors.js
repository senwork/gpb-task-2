import { SET_SERVICE_ERROR } from "../constants";

const initialState = {
  serviceError: "",
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SERVICE_ERROR: return { ...state, serviceError: payload };
    default: return state;
  }
};

export default errors;
