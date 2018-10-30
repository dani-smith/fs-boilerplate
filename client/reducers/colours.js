

function reducer(state = [], action) {
  switch (action.type) {
      case 'RECIEVE_COLOURS':
        return action.colours
      default:
         return state
  }
}

export default reducer