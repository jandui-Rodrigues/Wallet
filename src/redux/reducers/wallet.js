import {
  ADD_DESPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDIT_EXPENSE_TRUE,
  FECTH_API,
  GET_CURRENCYS,
} from '../actionsName';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_EXPENSE_TRUE:
    return { ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: [...action.payload],
    };
  case FECTH_API:
    return state;
  case GET_CURRENCYS:
    return { ...state,
      currencies: [...action.payload],
    };
  case ADD_DESPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };

  default:
    return state;
  }
};

export default wallet;
