import { combineReducers } from "redux";
import {productsReducer} from './products'
export const combinedReducers = combineReducers({
    productsReducer
})