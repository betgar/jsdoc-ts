import Axios from 'axios';

/**
 * login
 * @param { import('@/types').LoginParams } data
 * @return { import('@/types').AjaxPromise<import('@/types').UserModel> }
 */
export function login (data) {
  return Axios.post('/api/login', data)
}
