/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', `Logged in successfullly!`);
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
      console.log(res);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });
    if (res.data.status === 'success') location.reload(true);
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
    //true makes reload from the server and not from the browser cache(might reload the same page)
  } catch (err) {
    showAlert('error', 'Error logging out!Try again!');
  }
};