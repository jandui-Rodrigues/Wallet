import { EDIT, REQUEST_API, RESPONSE_API } from '../actionsName';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT:
    return { ...state,
      wallet: {
        ...state.wallet,
        editor: true,
      },
    };
  case REQUEST_API:
    return state;
  case RESPONSE_API:
    return { ...state,
      currencies: [...action.preload],
    };

  default:
    return state;
  }
};

export default wallet;
