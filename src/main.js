import Vue from 'vue'
import { loginService } from './common/login/services'
import { setup as setupVueExt } from './vue-ext/index'

setupVueExt(Vue, {})

const rootVue = new Vue({
  created () {
    loginService({
      account: '123',
      password: '1231'
    }).then(this.$apiResolver).catch(this.$apiRejecter)
  }
})

