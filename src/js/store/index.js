import {createStore} from "redux";
import rootReducer from '../reducers/index';

const store = createStore(rootReducer,{articles : [{title: "uoga", id : 0}]});

console.log(createStore)

export default store;
