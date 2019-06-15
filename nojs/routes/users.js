const router = require('koa-router')()
const jwt = require('jsonwebtoken');


const User = require('../db_modules/modules/user')
const Tweets = require('../db_modules/modules/tweets')
const Comment = require('../db_modules/modules/comment')
const Interactive = require('../db_modules/modules/interactive')

router.prefix('/users')

router.get('/', function (ctx, next) {
  let user = new User({
    nickName: '前端web',
    avatarUrl: 'http://localhost:3001/img/dog.jpeg',
    password: 'web',
    username: 'nojs'
  })
  user.save((err, res) => {
    if (err) {
      console.error(err);
    } else {
      //console.log(res)
    }
  })
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {

  User.find({ username: 'luo' }, function (err, res) {
    if (err) {
      console.error(err);
    } else {
      //console.log(res);
    }
  })
  ctx.body = 'this is a users/bar response'
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
    name: result[0].nickName,
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

router.get("/new", async (ctx, next) => {

  let result = await Tweets.find()
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = result
  } else {
    ctx.status = 401;
  }

})

router.get("/tweet", async (ctx, next) => {
  ////console.log(ctx.request.query)
  let data = {
    _id: ctx.request.query._id
  }
  let result = await Tweets.find(data);
  ////console.log("read", result[0].read);
  await Tweets.updateOne(data, { read: result[0].read + 1 });
  if (result.length > 0) {
    ctx.status = 200;
    ctx.body = result[0]
  } else {
    ctx.status = 401;
  }

})

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
    let deleted = await Interactive.remove(ctx.request.body);
    //console.log(deleted);
  }
})

router.get("/interactive", async (ctx, next) => {
  //console.log(ctx.request.query);
  let result = await Interactive.find(ctx.request.query)
  let data = {
    collect: false,
    approval: false,
    attention: false
  };
  let n = result.length;
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

router.post("/info", async (ctx, next) => { //用户资料修改接口
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

module.exports = router
