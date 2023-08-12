import { FETCH_FAILURE, FETCH_SUCCESS } from '../types';

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});