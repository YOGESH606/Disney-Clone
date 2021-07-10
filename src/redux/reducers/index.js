import { combineReducers } from "redux";
import { moviesReducer } from "./movies.reducer";

const reducer=combineReducers({
    moviesReducer
});

export default reducer;