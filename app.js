const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

const koajwt = require('koa-jwt')
const art = require('./routes/art')
const article = require('./routes/article')
const student = require('./routes/student')
const cors = require('koa-cors')
// error handler
onerror(app)
app.use(cors()) //使用cors


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(art.routes(), art.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(student.routes(), student.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
// logger
app.use(async (ctx, next) => {
  return next().catch((err) => {
    if(err.status === 401){
      ctx.status = 401;
      ctx.body = {
        code: '-2000',
        desc: '登陆过期，请重新登陆'
      };
    }else{
      throw err;
    }
  })
})

app.use(koajwt({
  secret: '123456'
}).unless({
  path: [/^\/user\/regist/,/^\/user\/login/]
}))
module.exports = app
