import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: "",
    }
  }
  render() {
    return (
      <form><label>Search location: </label><input type='text' placeholder="zip code or city" /><input type="submit" /></form>
    )
  }
}

export default SearchForm
