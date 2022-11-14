import { SET_SERVICE_LIST, SET_SERVICE_DETAIL } from "../constants";

const initialState = {
  serviceList: [],
  serviceId: ""
};

const services = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SERVICE_LIST: return { ...state, serviceList: payload };
    case SET_SERVICE_DETAIL: return { ...state, serviceId: payload };
    default: return state;
  }
};

export default services;
