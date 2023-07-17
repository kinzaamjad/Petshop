import { ADD_TO_CART, REMOVE_CART } from "./constant"


const cartReducer =(state=[], action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
              );
              if (itemIndex >= 0) {
                state[itemIndex].quantity += 1;
                return [...state];
              } else {
                const temp = { ...action.payload, quantity: 1 };
                return [temp, ...state];
              }
        case REMOVE_CART:
            state.length = state.length ? state.length - 1 : [];

            return [...state];

        default:
            return state
    }
}

export default cartReducer