const Router = require('koa-router');
const art = require('../controller/art.js')

const router = new Router({
    prefix: '/api'
});

//用户注册
router.post('/chaxun',art.selectAll)
module.exports = router;