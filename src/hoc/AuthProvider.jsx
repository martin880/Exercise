import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth_type } from '../redux/types';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  async function loginUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);

    if (user?.email) {
      await dispatch({
        type: auth_type.login,
        payload: user,
      });
    }
  }
  useEffect(() => {
    loginUser();
  }, []);
  return children;
}
