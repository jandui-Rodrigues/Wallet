import { ADD_EMAIL_USER, REQUEST_API, RESPONSE_API } from '../actionsName';

export const actionPushEmail = (preload) => ({
  type: ADD_EMAIL_USER,
  preload,
});

const requestApi = () => ({
  type: REQUEST_API,
});

const responseApi = (preload) => ({
  type: RESPONSE_API,
  preload,
});

export function fethApi() {
  return async (dispatch) => {
    dispatch(requestApi());
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const data = await response.json();
    console.log('ok');
    const filterCurrencys = Object.keys(data).filter((moeda) => moeda !== 'USDT');
    dispatch(responseApi(filterCurrencys));
  };
}
