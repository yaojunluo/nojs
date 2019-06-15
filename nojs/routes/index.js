const router = require('koa-router')()
const jwt = require('jsonwebtoken');


const User = require('../db_modules/modules/user')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.post('/edit', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = '图片上传成功';
})

/**
 * 用户登录接口
 * 2019/6/3
 */
router.post("/login", async (ctx, next) => {
  //console.log(ctx.request.body);
  let result = await User.find(ctx.request.body)
  let {
    openId,
    nickName,
    avatarUrl,
    country,
    city,
    province,
    email,
    gender } = result[0]
  let user = {
    openId,
    nickName,
    avatarUrl,
    country,
    city,
    province,
    email,
    gender
  };
  const token = jwt.sign({
    name: result[0].username,
    uid: result[0].openId,
    _id: result[0]._id
  }, 'nojs', { expiresIn: '2h' });
  console.log(token);
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = {
      user,
      token
    }
  } else {
    ctx.status = 401;
  }

})
module.exports = router
