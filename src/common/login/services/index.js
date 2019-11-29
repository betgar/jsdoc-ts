import { login } from '@/api';
import { loginTransformer } from '../transformer';

/**
 * loginService
 * @param { import('@/types').LoginParams } data - 数据
 * @returns { Promise<import('@/types').UserModel> }
 */
export function loginService (data) {
  // 可以做一些参数的校验
  // 和其它services的组合
  // 数据结构的转换
  return login(data).then(res => {
    const { data: { data: user } } = res
    console.log(user)
    console.log(user.account)
    return loginTransformer.transformOne(user)
  })
}
