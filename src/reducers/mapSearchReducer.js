let initialState = {
  searchTerm: "",
}

const mapSearch = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TERM':
      return Object.assign({}, state, {searchTerm: action.value})
    default:
      return state
  }
}

export default mapSearch
