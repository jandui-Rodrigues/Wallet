import {
  ADD_DESPENSE,
  ADD_EMAIL_USER,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  FECTH_API,
  GET_CURRENCYS,
} from '../actionsName';

export const actionPushEmail = (preload) => ({
  type: ADD_EMAIL_USER,
  preload,
});

export const fecthData = () => ({
  type: FECTH_API,
});

export const getCurrencys = (payload) => ({
  type: GET_CURRENCYS,
  payload,
});
export const addDespense = (payload) => ({
  type: ADD_DESPENSE,
  payload,
});
export const actionCreator = (type, payload) => ({
  type,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});
