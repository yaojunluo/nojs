
const jwt = require('jsonwebtoken');
// async function vtoken(value){
//     let token = value.replace("Bearer ", "");
//     return await jwt.verify(token, "nojs");
// }
module.exports = function(value) {
    return new Promise((resolve, reject) => {
        let token = value.replace("Bearer ", "");
        jwt.verify(token, "nojs", (err, vtoken) => {
            if (err)
                reject(err)
            else
                resolve(vtoken)
        })
    });
};