export const changeSearchTerm = (value) => {
  return {
    type: 'CHANGE_SEARCH_TERM', value
  }
}

export const searchLocation = (searchTerm) => {
  return {
    type: 'SEARCH_LOCATION', searchTerm
  }
}
