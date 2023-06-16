import { addDespense, fecthData, getCurrencys } from '../redux/actions';
import { ADD_DESPENSE, GET_CURRENCYS } from '../redux/actionsName';

const filterCurrency = (data) => Object
  .keys(data).filter((currency) => currency !== 'USDT');

const exchangeRatesAdd = (data, payload) => ({
  ...payload,
  exchangeRates: data,
});

function dataFilter(action, payload, data, dispatch) {
  switch (action) {
  case GET_CURRENCYS:
    return dispatch(getCurrencys(filterCurrency(data)));
  case ADD_DESPENSE:

    return dispatch(addDespense(exchangeRatesAdd(data, payload)));

  default:
    return {};
  }
}

export function fethApi(action, payload) {
  return async (dispatch) => {
    dispatch(fecthData());
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const data = await response.json();
    dataFilter(action, payload, data, dispatch);
  };
}
