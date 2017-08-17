export const changeSearchTerm = (value) => {
  return {
    type: 'CHANGE_SEARCH_TERM', value
  }
}

export const geocodeLocation = (location) => {
  return {
    type: 'GEOCODE_LOCATION', location
  }
}
