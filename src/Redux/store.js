import { createStore } from "redux";
import { comReducer } from "./rootReducer";

export const store = createStore(comReducer);