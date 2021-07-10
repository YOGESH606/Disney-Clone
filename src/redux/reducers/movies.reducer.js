import { ActionTypes } from "../constants/action.types";
const intialState={
    movies:[],
}

export const moviesReducer=(state=intialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_MOVIES:
            console.log("within reducer",payload)
            return{...state,movies:payload};
        default:
            return state;
    }
}