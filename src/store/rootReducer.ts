import { combineReducers } from "redux";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { TagsReducer } from "./tags/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags:TagsReducer
});