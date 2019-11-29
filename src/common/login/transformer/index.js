export const loginTransformer = {
  /**
   * @param { import('@/types').UserModel[] } data
   * @returns { import('@/types').UserModel[] }
   */
  transform (data) {
    // 做一些数据结构的转换
    return data.map(item => this.transformOne(item))
  },
  /**
   * @param { import('@/types').UserModel } data
   * @returns { import('@/types').UserModel }
   */
  transformOne(data) {
    // 做一些数据结构的转换
    return {
      ...data
    }
  }
}
