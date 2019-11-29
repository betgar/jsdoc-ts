import { ResponseData } from './types';
import Vue from 'vue'
import { AxiosError } from 'axios'

// 扩展vue
declare module 'vue/types/vue' {
  interface Vue {
    $myProperty: string
    $apiResolver: (res: ResponseData) => Promise<ResponseData>,
    $apiRejecter: (res: AxiosError) => Promise<AxiosError>
  }
}
