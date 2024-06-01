import { combineReducers, createStore,applyMiddleware,compose} from "redux";
import {userReducer} from './redux/reducer/ApiReducer'
import {todoReducer} from './redux/reducer/TodoReducer'
import weatherReducer from './redux/reducer/WeatherReducer'
import thunk from "redux-thunk";



    const rootReducer= combineReducers({
    userReducer,
    todoReducer,
    weatherReducer
    })


 const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store;









































// import { combineReducers, createStore} from "redux";
// import { todoReducer } from "./redux/reducer/TodoReducer";



// // const logger = store =>{ return next =>{ return action => {
     
// //   const result = next(action)
// //   console.log("🚀 ~ file: Store.js:11 ~ logger ~ result:", result)
// //   return result
   
   
    
// //   }}}
  
// const rootReducer= combineReducers({
//    todoReducer,
 
// })

//  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store


