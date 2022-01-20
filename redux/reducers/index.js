export const tabs = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_ITEM': {
      const { text } = payload
      const newTab = {
        text
      }
      return state.concat(newTab)
    }
    case 'REMOVE_ITEM': {
      const { text } = payload
      return state.filter(todo => todo.text !== text)
    }
    default:
      return state
  }
}
