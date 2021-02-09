const Router = require('koa-router');
const ArtileController = require('../controller/article');

const router = new Router({
  prefix: '/api'
});
// const router = new Router({
//     prefix: '/user'
// });

/**
 * 文章接口
 */
//创建文章
router.post('/article/create',ArtileController.create);

//获取文章详情
router.get('/article/:id',ArtileController.detail)

module.exports = router