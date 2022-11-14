import {
  SET_LOADING,
  SET_SERVICE_ERROR,
  SET_SERVICE_LIST,
  SET_SERVICE_DETAIL,
} from "../constants";


export const setLoading = payload => ({
  type: SET_LOADING,
  payload,
});

export const setServiceList = payload => ({
  type: SET_SERVICE_LIST,
  payload,
});

export const setServiceDetail = payload => ({
  type: SET_SERVICE_DETAIL,
  payload,
});

export const setServiceError = payload => ({
  type: SET_SERVICE_ERROR,
  payload,
});



