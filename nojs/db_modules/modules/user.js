var mongoose=require('../link');

getOpenid = ()=>{
    var str = "",
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    for (let i = 0; i < 8; i++) {
        let range = Math.round(Math.random() * (arr.length));
        str += arr[range];
        if(i == 7 && str.indexOf('undefined') != -1){
            i = 0;
            str = '';
        }
    }
    return str;
}

var UserSchema=mongoose.Schema({
    openId:{
        type: String,
        default: getOpenid()
    },
    nickName:String,
    cover:{
        type: String,
        default: 'static/img/2.jpg'
    },
    avatarUrl:{
        type: String,
        default: 'static/img/123.jpg'
    },
    address:{
        type: String,
        default: 'unkown'
    },
    gender:{
        type: Number,
        default: 0
    },
    profile:{
        type: String,
        default: '用户尚未填写'
    },
    email:{
        type: String,
        default: ''
    },
    phone:String,
    password:String,
    username:String,
    permission: {
        type: Number,
        default: 5
    },
})


module.exports=mongoose.model('User', UserSchema, 'user');