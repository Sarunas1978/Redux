import {ADD_ARTICLE, REMOVE_ARTICLE} from '../constants/action-types'

const initialState ={
    articles: []
};

function rootReducer(state=initialState, action){
    if (action.type === ADD_ARTICLE){
        console.log("add: ",state)
        action.payload.id = action.payload.id ?? state.articles.length
        return {articles :  state.articles.concat(action.payload)} 
    }
    // anyway concat or spread creates brand new array so there is no ref to original array
    //  or Object.assign({}, state, {articles :  state.articles.concat(action.payload)})
    // or {articles : [...state.articles,action.payload]}
    if (action.type === REMOVE_ARTICLE){
        console.log("remove: ",state)
        
       return {articles :  state.articles.slice(0,state.articles.length-1)} 
    }
    return state;
}

export default rootReducer