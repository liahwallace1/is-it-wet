let initialState = {
  searchTerm: "",
  location: {lat: 32.765914, lng: -79.899101}
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
