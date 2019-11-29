import { apiResolver, apiRejecter } from '@/api/utils/index'

export const ApiMixin = {
  methods : {
    $apiResolver: apiResolver,
    $apiRejecter: apiRejecter
  }
}

/**
 *
 * @param { import('vue').VueConstructor } Vue
 * @param { * } [options={}]
 */
export function setup (Vue, options = {}) {
  const mixins = [ApiMixin]
  mixins.forEach(item => Vue.mixin(ApiMixin, options))
}
