export const addItemToTabBar = item => {
  console.log(item)
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export const removeItemToTabBar = i => {
  console.log(i)
  return {
    type: 'REMOVE_ITEM',
    i
  }
}
