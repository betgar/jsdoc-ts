
/**
 *
 * @param { import('@/types').AjaxPromise } res
 * @returns { import('@/types').AjaxPromise }
 */
export function apiResolver (res) {
  // 做一些提示之类无关紧要的事情
  return Promise.resolve(res)
}



/**
 *
 * @param { import('axios').AxiosError } res
 * @returns { Promise<import('axios').AxiosError> }
 */
export function apiRejecter (res) {
  // 做一些提示之类无关紧要的事情
  console.error(res)
  return Promise.resolve(res)
}
