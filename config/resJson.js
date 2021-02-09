// utils/resJson.js
const ResultJson =  {
  success: (params) => {
    return {
      data: params.data || null, // 返回的数据
      msg: params.msg || '操作成功', // 返回的提示信息
      code: 1 // 返回的接口调用状态码，0-失败，1-成功
    }
  },
  fail: (params) => {
    return {
      data: params.data || null,
      msg: params.msg || '操作失败',
      code: 0,
      error_code: params.errorCode // 返回接口异常信息码
    }
  }
}

module.exports = ResultJson
