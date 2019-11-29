
import { setup as setupMixins } from './mixins/index'
/**
 *
 * @param { import('vue').VueConstructor } Vue
 * @param { * } [options={}]
 */
export function setup (Vue, options = {}) {
  setupMixins(Vue, options)
  // setupComponents
  // setupDirectives
  // ...
}
