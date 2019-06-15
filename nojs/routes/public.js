const router = require('koa-router')()
const jwt = require('jsonwebtoken');


const User = require('../db_modules/modules/user')
const Tweets = require('../db_modules/modules/tweets')
const Comment = require('../db_modules/modules/comment')
const Interactive = require('../db_modules/modules/interactive')

router.prefix('/public')

/**
 * 文章列表接口
 * 2019/6/4
 */
router.get("/new", async (ctx, next) => {

  let result = await Tweets.find()
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = result.reverse()
  } else {
    ctx.status = 401;
  }

})
/**
 * 文章详情接口
 * 2019/6/4
 */
router.get("/tweet", async (ctx, next) => {
  let data = {
    _id: ctx.request.query._id
  }
  let result = await Tweets.find(data);
  await Tweets.updateOne(data, { read: result[0].read + 1 });
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = result[0]
  } else {
    ctx.status = 401;
  }

})
/**
 * 文章作者接口
 * 2019/6/5
 */
router.get("/author", async (ctx, next) => {
  //console.log(ctx.request.query)
  let data = {
    openId: ctx.request.query.openId
  }
  let result = await User.find(data)
  let {
    openId,
    nickName,
    avatarUrl,
    cover,
    email,
    profile} = result[0];
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = {
      openId,
      nickName,
      avatarUrl,
      cover,
      email,
      profile
    };
  } else {
    ctx.status = 401;
  }

})
/**
 * 推荐作者接口
 * 2019/6/5
 */
router.get("/recommend", async (ctx, next) => {

  let result = await User.find().limit(5);
  let newarr = []
  for (let i = 0; i < result.length; i++) {
    let { nickName, avatarUrl, profile } = result[i];
    if (i == 5) {
      break;
    }
    newarr.push({ nickName, avatarUrl, profile });

  }
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = newarr;
  } else {
    ctx.status = 401;
  }

})

/**
 * 获取评论接口
 */
router.get("/comment", async (ctx, next) => {
  //console.log(ctx.request.query)
  let result = await Comment.find(ctx.request.query)

  ctx.status = 200;
  if (result.length > 0) {
    ctx.body = result;
  } else {
    ctx.body = []
  }
})
/**
 * 搜索
 * 2019/6/5
 */
router.get("/search", async (ctx, next) => {
  //console.log(ctx.request.query)
  let keyword = ctx.request.query.keyword;
  var _filter = {
    $or: [  // 多字段同时匹配
      { title: { $regex: keyword } },
      { author: { $regex: keyword, $options: '$i' } }, //  $options: '$i' 忽略大小写
      { text: { $regex: keyword, $options: '$i' } },
      { label: { $regex: keyword, $options: '$i' } }
    ]
  }

  let result = await Tweets.find(_filter).limit(10);
  console.log(result)
  ctx.status = 200;
  if (result.length > 0) {
    ctx.body = result;
  } else {
    ctx.body = []
  }
})

/**
 * 获取博主的博文列表
 * 2019/6/13
 */
router.get("/list", async (ctx, next) => {
  //console.log(ctx.request.query)
  let data = ctx.request.query;
  let tweet = await Tweets.find(data).limit(5);
  let user = await User.find(data);
  let comment = await Comment.find();
  let {
    openId,
    nickName,
    avatarUrl,
    cover,
    email,
    profile} = user[0];
  let author = {
    openId,
    nickName,
    avatarUrl,
    cover,
    email,
    profile,
  };
  let comments = [];
  for (let i = 0; i < tweet.length; i++) {

    let comment = await Comment.find({
      tweet: tweet[i]._id
    });
    comments = [...comment, ...comments];
    if (i == 5) {
      break;
    }
  }
  ctx.status = 200;
  if (tweet.length > 0) {
    ctx.body = {
      tweet: tweet.reverse(),
      author,
      comments: comments.slice(0, 5)
    };
  } else {
    ctx.body = []
  }
})

router.post('/register', async (ctx, next)=>{
  console.log(ctx.request.body);
  let check = await User.find({ username: ctx.request.body.username })
  console.log(check)
  if (check.length === 0) {
    let user = new User(ctx.request.body)
    await user.save();
    
    ctx.body = {
      code: 200,
      message:'注册成功'
    }
  }else{
    ctx.body = {
      code: 201,
      message:'用户名重复'
    }
  }

  ctx.status = 200;
})
module.exports = router
