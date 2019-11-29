---
title: jsdoc-with-ts-declaration
date: 2019-09-22 17:20:00
author: betgar
tags: [typescript]
categories: [typescript]
---



# JSDoc使用TS声明文件提供智能提示

> 背景：最近做的内部使用的管理系统，使用`es6` 构建，之前一直使用typescript构建项目，感觉到写声明文件真的很烦很浪费时间。这次使用`es6`构建项目，发现效率更低，没有智能提示浪费的时间比写声明文件的多了好几倍。



## VS Code对JavaScript项目的支持

> VS Code编辑器通过jsconfig.js（ts项目是tsconfig.js）对JavaScript项目提供支持
> 看这里: https://www.tslang.cn/docs/handbook/type-checking-javascript-files.html

### 配置项

> https://code.visualstudio.com/docs/languages/jsconfig

```javascript
// 根目录：jsconfig.json
// 如果你需要校验，可以打开checkJs: true
{
  "compilerOptions": {
    "moduleResolution": "node",
    "module": "es2015",
    "target": "es6",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"],
  "include": ["src/**/*", "types"]
}

```

### 支持的jsdoc类型
> https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#supported-jsdoc
> 请仔细阅读支持的jsdoc类型

### 使用ts声明的方式书写jsdoc
> copy官方例子

```javascript
// type和类型转换，复杂的格式我还是喜欢写到d.ts文件里面
/**
 * @type {number | string}
 */
var numberOrString = Math.random() < 0.5 ? "hello" : 100;
var typeAssertedNumber = /** @type {number} */ (numberOrString)

```

```javascript
// 对象
/**
 * @type { {id: number, name: string} }
 */
var user = {
  id: 123,
  name: '张三'
}

```


```javascript
// 函数
/**
 * @type { (params: any) => Promise }
 */
var fn = (params) => {
  return Promise((reslove, reject) => {
    // ...
  })
}

```

### 导入类型(import types)
> https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#import-types
> typescript支持在jsdoc的注释中导入ts declaration file的类型声明

### 完整的例子

```typescript
// src/types/index.d.ts
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

```

```javascript
// src\api\modules\LoginApi.js

/**
 * login
 * @param { import('@/types').LoginParams } data
 * @return { import('@/types').AjaxPromise<import('@/types').UserModel> }
 */
export function login (data) {
  return Axios.post('/api/login', data)
}

// src\common\login\services\index.js

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

// src\main.js
// Vue中的调用
const rootVue = new Vue({
  created () {
    loginService({
      account: '123',
      password: '1231'
    }).then(this.$apiResolver).catch(this.$apiRejecter)
  }
})

```



## 参考

[JavaScript文件类型检查](https://www.tslang.cn/docs/handbook/type-checking-javascript-files.html)

[jsconfig.json配置](https://code.visualstudio.com/docs/languages/jsconfig)

[javascript in vs code ](https://code.visualstudio.com/docs/languages/javascript)

[检查JavaScript文件](https://cloud.tencent.com/developer/article/1444714)

[TypeScript支持的JSDoc](https://cloud.tencent.com/developer/article/1444715)