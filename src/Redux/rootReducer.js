import { combineReducers } from "redux";
import cartReducer from "./reducer";

export const comReducer = combineReducers ({
    cartAbc: cartReducer
})
