import { ActionTypes } from "../constants/action.types";
const intialState={ 
    name:"",
    email:"",
    photo:""
}

export const userReducer=(state=intialState,{type,payload})=>{
        switch(type){
            case ActionTypes.SET_LOGIN:
                return{
                    ...state,
                    name:payload.name,
                    email:payload.email,
                    photo:payload.photo
                };

            case ActionTypes.SET_SIGNOUT:
                return{
                     name:null,
                     email:null,
                     photo:null
                };
            default:
                return state;
        }
}