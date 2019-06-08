
// const { persistStore, autoRehydrate } = require('redux-persist');
// //  存储机制，可换成cookie等其他机制
// const { asyncSessionStorage } = require('redux-persist/storages');


const logindata = {
  auth: false,
  user:{}
}

//这是action

// const togglelogin = {
//   type: 'toggleAuth'
// }
//这是reducer
const reducer = (state = logindata, action) => {
    switch (action.type) {
        case 'toggleAuth':
            let user = action.user
            console.log(action)
          
            return state = {
              auth: true,
              user
            };
        case 'loginOut':
            return state = {
              auth: false,
              user:{}
            };
        default:
            return state;
    }
}
export default reducer;