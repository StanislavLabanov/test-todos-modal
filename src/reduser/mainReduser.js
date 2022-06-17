import { GET_TYPES, NEW_TYPES } from "../types/types"

const initialState = {
   todosMass: []
}

function mainReduser(state = initialState, action) {
   switch (action.type) {
      case GET_TYPES:
         return { ...state, todosMass: [...state.todosMass, action.payload] }
      case NEW_TYPES:
         return { ...state, todosMass: [...action.payload] }
      default: return state
   }
}

export default mainReduser