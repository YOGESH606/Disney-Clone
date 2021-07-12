import { combineReducers } from "redux";
import { moviesReducer } from "./movies.reducer";
import { userReducer } from "./user.reducer";
const reducer = combineReducers({
    moviesReducer,
    userReducer
});

export default reducer;