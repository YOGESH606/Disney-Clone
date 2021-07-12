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
export const userLogin=(data)=>{
    return{
        type:ActionTypes.SET_LOGIN,
        payload:{
            name:data.displayName,
            email:data.email,
            photo:data.photoURL
        }
    }
}
export const userLogout=(data)=>{
    return{
        type:ActionTypes.SET_SIGNOUT,
    }
}