import { auth_type } from './types';

const init = {
  email: 'orang',
  password: '',
};

function userReducer(state = init, action) {
  //action adalah event yang terjadi
  if (action.type === auth_type.login) {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  } else if (action.type === auth_type.logout) {
    return init;
  }
  return state;
}

export default userReducer;
