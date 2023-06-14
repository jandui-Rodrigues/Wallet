import { ADD_EMAIL_USER } from '../actionsName';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL_USER:
    return { email: action.preload };

  default:
    return state;
  }
};

export default user;
