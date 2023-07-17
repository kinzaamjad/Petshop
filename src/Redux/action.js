import { ADD_TO_CART, REMOVE_CART , UPDATE_PASSWORD ,DELETE_FROM_CART ,REMOVE_ONE} from "./constant"

export const cartData = (data) => {
    console.log("action called:________________________",data);
    return{
        type: ADD_TO_CART,
        payload: data
    }
}



export const updatePassword = (data)=>{
    return{
        type: UPDATE_PASSWORD,
        data: data
        
    }
}


export const removeData = (data) =>{
    return{
        type: REMOVE_CART,
        payload: data
    }
}
export const deletedata = ()=>{
    return{
        type: DELETE_FROM_CART,
    }
}

// remove single

export const removeOne = (iteam) => {
    return {
      type: REMOVE_ONE,
      payload: iteam,
    };
  };
  