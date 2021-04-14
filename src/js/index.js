import store from './store/index';
import {addArticle, removeArticle} from './actions/index';

window.store = store;
window.addArticle = addArticle
window.removeArticle = removeArticle

// console.log(store)