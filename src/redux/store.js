import { createStore } from "redux";
import fetchDataReducer from "./reducers/fetchDataReducer";


const store = createStore(fetchDataReducer)

export default store