const router = require('koa-router')()
const jwt = require('jsonwebtoken');

var mongoose = require('mongoose')

const vtoken = require('../db_modules/vtoken')
const User = require('../db_modules/modules/user')
const Follow = require('../db_modules/modules/follow')
const Tweets = require('../db_modules/modules/tweets')
const Comment = require('../db_modules/modules/comment')
const Interactive = require('../db_modules/modules/interactive')

router.prefix('/api')

/**
 * 文章提交的接口
 * 2019/6/4
 */
router.post("/new", async (ctx, next) => {
  //console.log(ctx.request.body);
  ctx.status = 200;
  let tweets = new Tweets(ctx.request.body);
  tweets.save((err, res) => {
    if (err) {
      console.error(err)
    } else {
      //console.log(res)
    }
  })
})
/**
 * 修改博文接口
 * 2019/6/14
 */
router.post("/update", async (ctx, next) => {
  console.log(ctx.request.body.id);
  let {id} = ctx.request.body;
  // let _id = mongoose.Types.ObjectId(id);
  await Tweets.updateOne({_id: id}, ctx.request.body);
  ctx.status = 200;
  // tweets.save((err, res) => {
  //   if (err) {
  //     console.error(err)
  //   } else {
  //     //console.log(res)
  //   }
  // })
})
/**
 * 文章列表接口
 * 2019/6/4
 */
router.get("/mine", async (ctx, next) => {

  let verify = await vtoken(ctx.header.authorization);
  console.log(verify)
  
  let result = await Tweets.find({openId: verify.uid});
  ctx.status = 200;
  ctx.body = result;
  // let result = await Tweets.find()
  // if (result.length > 0) {
  //   ctx.status = 200;
  //   ctx.body = result
  // } else {
  //   ctx.status = 401;
  // }

})
router.get("/deltweet", async (ctx, next) => {
  let verify = await vtoken(ctx.header.authorization);
  let data = {
    openId: verify.uid,
    _id: ctx.request.query.id
  }
  
  
  let result = await Tweets.deleteOne(data)
  ctx.status = 200;
  ctx.body = result;
  // let result = await Tweets.find()
  // if (result.length > 0) {
  //   ctx.status = 200;
  //   ctx.body = result
  // } else {
  //   ctx.status = 401;
  // }

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
    country,
    city,
    province,
    email,
    gender } = result[0];
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = {
      openId,
      nickName,
      avatarUrl,
      country,
      city,
      province,
      email,
      gender
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
 * 评论接口
 * 2019/6/5
 */
router.post("/comment", async (ctx, next) => {
  //console.log(ctx.request.body);
  ctx.status = 200;
  let comment = new Comment(ctx.request.body);
  comment.save((err, res) => {
    if (err) {
      //console.log(err)
    } else {
      //console.log(res);

      addnum(ctx.request.body.tweet, 4);
    }
  })
})
/**
 * 获取评论接口
 */
router.get("/comment", async (ctx, next) => {
  //console.log(ctx.request.query)
  let data = {
    tweet: ctx.request.query.tweet
  }
  let result = await Comment.find(data)

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
 * 互动 （点赞、收藏、关注）
 */
router.post("/interactive", async (ctx, next) => {
  //console.log(ctx.request.body);
  ctx.status = 200;
  let result = await Interactive.find(ctx.request.body);

  if (result.length === 0) {

    addnum(ctx.request.body.interactive, ctx.request.body.genre);
    let interactive = new Interactive(ctx.request.body);
    interactive.save((err, res) => {
      if (err) {
        //console.log(err)
      } else {
        //console.log(res)
      }
    })
  } else {
    minusnum(ctx.request.body.interactive, ctx.request.body.genre);
    let deleted = await Interactive.deleteOne(ctx.request.body);
    //console.log(deleted);
  }
})
/**
 * 用户是否关注或点赞或收藏
 * 2019/6/5
 */
router.get("/interactive", async (ctx, next) => {
  //console.log(ctx.request.query);
  let result = await Interactive.find(ctx.request.query)
  let data = {
    collect: false,
    approval: false,
    attention: false
  };
  let n = result.length;
  console.log(n)
  for (let i = 0; i < n; i++) {
    switch (result[i].genre) {
      case 1:
        data.approval = true;
        break;
      case 2:
        data.collect = true;
        break;
      case 3:
        data.attention = true;
        break;
    }
  }
  ctx.status = 200;
  ctx.body = data;
})

addnum = async (id, genre) => {
  let result = await Tweets.find({ _id: id })
  let awesome = result[0].awesome;
  let collect = result[0].collect;
  let comment = result[0].comment;
  let updata = {};

  switch (genre) {
    case 1:
      updata = {
        awesome: awesome + 1
      }
      break;
    case 2:
      updata = {
        collect: collect + 1
      }
    case 4:
      updata = {
        comment: comment + 1
      }
      break;
  }
  await Tweets.updateOne({ _id: id }, updata);
  //console.log(id, result);
}

minusnum = async (id, genre) => {
  let result = await Tweets.find({ _id: id })
  let awesome = result[0].awesome;
  let collect = result[0].collect;
  let updata = {};

  switch (genre) {
    case 1:
      updata = {
        awesome: awesome - 1
      }
      break;
    case 2:
      updata = {
        collect: collect - 1
      }
      break;
  }
  await Tweets.updateOne({ _id: id }, updata);
}

/**
 * 用户资料 接口
 * 2019/6/5
 */
router.get("/dynamic", async (ctx, next) => { //用户动态接口
  //console.log(ctx.request.query)

  let keyword = ctx.request.query.openId;
  var _filter = {
    $or: [  // 多字段同时匹配
      { passiveid: { $regex: keyword } },
      { activeid: { $regex: keyword, $options: '$i' } }, //  $options: '$i' 忽略大小写

    ]
  }
  let result = await Interactive.find(_filter).limit(10)
  console.log(result)
  ctx.status = 200;
  if (result.length > 0) {
    ctx.body = result;
  } else {
    ctx.body = []
  }
})
router.post("/avater", async (ctx, next) => {
  console.log(ctx.request.body)
  let token = ctx.header.authorization.replace("Bearer ", "");
  let tokenresule = await jwt.verify(token, "nojs");
  console.log(tokenresule)
  
  let result = await User.updateOne({ openId: tokenresule.uid }, ctx.request.body);
  ctx.status = 200;
  ctx.body = result;

})
router.post("/updatainfo", async (ctx, next) => { //用户资料修改接口
  //console.log(ctx.request.body)

  let openId = ctx.request.body.openId;

  let result = await User.updateOne({ openId }, ctx.request.body);
  console.log(result)
  ctx.status = 200;
  // if (result.length > 0) {
  //   ctx.body = result;
  // } else {
  //   ctx.body = []
  // }
})
router.post("/udpwd", async (ctx, next) => { //修改密码
  //console.log(ctx.request.body)

  let openId = ctx.request.body.openId;
  let oldpwd = ctx.request.body.oldpwd;
  let password = ctx.request.body.password;
  let result = await User.updateOne({ openId,password: oldpwd}, {password});
  console.log(result)
  ctx.status = 200;
  // if (result.length > 0) {
  //   ctx.body = result;
  // } else {
  //   ctx.body = []
  // }
})
router.post("/info", async (ctx, next) => { //获取用户资料
  //console.log(ctx.request.body)

  let openId = ctx.request.body.openId;

  let result = await User.findOne({ openId });
  console.log(result)
  ctx.status = 200;
  ctx.body = result;
  // if (result.length > 0) {
  //   ctx.body = result;
  // } else {
  //   ctx.body = []
  // }
})
//备用关注接口 2019/6/13
router.post("/follow", async (ctx, next) => {
  //console.log(ctx.request.body);
  ctx.status = 200;
  let result = await Follow.find(ctx.request.body);

  if (result.length === 0) {

    let follow = new Follow(ctx.request.body);
    follow.save((err, res) => {
      if (err) {
        //console.log(err)
      } else {
        //console.log(res)
      }
    })
  } else {

    await Follow.deleteOne(ctx.request.body);
    //console.log(deleted);
  }
})

router.get("/follow", async (ctx, next) => {
  let { activeid, passiveid } = ctx.request.query;
  let result = await Follow.find(ctx.request.query)
  let data = {
    follow: false
  };
  console.log(result)
  if (result.length > 0) {
    data.follow = true
  }
  ctx.status = 200;
  ctx.body = data;
})

module.exports = router
