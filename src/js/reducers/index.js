import {ADD_ARTICLE} from '../constants/action-types'

const initialState ={
    articles: []
};

function rootReducer(state=initialState, action){
    if (action.type === ADD_ARTICLE){
       return {articles :  state.articles.concat(action.payload)} 
    // anyway concat or spread creates brand new array so there is no ref to original array
    //  or Object.assign({}, state, {articles :  state.articles.concat(action.payload)})
    // or {articles : [...state.articles,action.payload]}
    }
    return state;
}

export default rootReducer