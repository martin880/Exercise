import axios from 'axios';
import { auth_type } from '../types';

export function userLogin(account) {
  return async function (dispatch) {
    try {
      const userData = await axios
        .get('http://localhost:2000/user', {
          params: { email: account.email, password: account.password },
        })
        .then(res => res.data[0]);
      dispatch({
        type: auth_type.login,
        payload: userData,
      });
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
