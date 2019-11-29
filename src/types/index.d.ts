import { AxiosPromise } from "axios";

export declare interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}

/**
 * 返回的数据格式.
 */
export interface AjaxPromise<T = any>
  extends AxiosPromise<ResponseData<T>> {}

export  interface LoginParams {
  account: string;
  password: string;
}

export interface UserModel {
  account: string
  nickname: string
  id: string | number
  role: any
  extraProps: any
}
