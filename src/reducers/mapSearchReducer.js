let initialState = {
  searchTerm: "",
  location: {lat: 32.765914, lng: -79.899101}
}

const mapSearch = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TERM':
      return Object.assign({}, state, {searchTerm: action.value})
    case 'UPDATE_LOCATION':
      return Object.assign({}, state, {location: action.location})
    default:
      return state
  }
}

export default mapSearch
