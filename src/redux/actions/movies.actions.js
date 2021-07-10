import { ActionTypes } from "../constants/action.types";

export const setMovies=(movies)=>{
    return{
        type:ActionTypes.SET_MOVIES,
        payload:movies
    }
}
export const getMovies=()=>{
    return {
        type: ActionTypes.GET_MOVIES
    }
}
export const getDetail=(id)=>{
    return{
        type: ActionTypes.GET_DETAIL,
        payload: id
    }
}