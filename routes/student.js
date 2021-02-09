const Router = require('koa-router')
// 学生
const StudentController = require('../controller/student');
 
const router = new Router({
    prefix: '/api'
});
/**
 * 学生接口
 */
//创建学生
router.post('/student/create',StudentController.create);
//获取学生详情
router.get('/student/:id',StudentController.detail);
module.exports = router;




// const Router = require('koa-router');
// const art = require('../controller/art.js')

// const router = new Router({
//     prefix: '/api'
// });

// //用户注册
// router.post('/chaxun',art.selectAll)
// module.exports = router;