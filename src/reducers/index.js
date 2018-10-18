import { combineReducers } from "redux";
import  noteReducer  from "./noteReducers";

const rootReducer = combineReducers({
    notes: noteReducer
});

export default rootReducer;