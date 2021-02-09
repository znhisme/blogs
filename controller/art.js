//引入db配置
const db = require('../config/db')

//引入sequelize对象
const Sequelize = db.sequelize

//引入数据表模型
const art = Sequelize.import('../module/art.js')

const resJson = require('../config/resJson.js')
module.exports = {
	//查询所有文章
  selectAll: async (ctx, next) => {
    await art.findAll({
      raw: true,
      attributes: { // 不返回password字段
        exclude: ['password'] 
      }
    }).then((res) => {
    	// 成功返回
      ctx.body = resJson.success({data: res})
    }).catch((err) => {
    	// 失败，捕获异常并输出
      ctx.body = resJson.fail(err)
    })
  }
}