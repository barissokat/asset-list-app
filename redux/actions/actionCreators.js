export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItemToTabbar = text => {
  return {
    type: ADD_ITEM,
    payload: { text }
  }
}

export const removeItemFromTabbar = text => {
  return {
    type: REMOVE_ITEM,
    payload: { text }
  }
}
