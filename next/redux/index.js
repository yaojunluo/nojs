
// const { persistStore, autoRehydrate } = require('redux-persist');
// //  存储机制，可换成cookie等其他机制
// const { asyncSessionStorage } = require('redux-persist/storages');

import { message } from 'antd';

let logindata = {
  auth: false,
  user:{}
}

const notice = (e) => {
  console.log(e.value)
  message[e.type](e.value);
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};
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
        user: {}
      };
    case 'success':
      console.log(action)
      notice(action);
      return state;
    case 'error':
      notice(action);
      return state;
    case 'warning':
      notice(action);
      return state;
    default:
      return state;
  }
}
export default reducer;