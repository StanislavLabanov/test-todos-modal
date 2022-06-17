import { GET_TYPES, NEW_TYPES } from "../types/types";

export function pailoadTesxtInput(text) {
   return ({
      type: GET_TYPES,
      payload: text
   }
   )
}

export function newTodosObject(text) {
   return ({
      type: NEW_TYPES,
      payload: text
   }
   )
}