import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSearchTerm, updateLocation } from '../actions/searchFormActions';
import { Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon } from 'react-bootstrap';

class SearchForm extends Component {

  handleChange(e) {
    let value = e.target.value
    this.props.dispatch(changeSearchTerm(value))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.google.maps.Geocoder.geocode({'address': this.props.searchTerm}, function handleResults(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        this.props.dispatch(updateLocation(results[0].geometry.location))
      }
    })
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Search:</ControlLabel>
            {' '}
          <FormControl type="text" className="search-form" value={this.props.searchTerm} placeholder="enter location" onChange={this.handleChange} required />
        </FormGroup>
        {' '}
        <Button type="submit">
          <Glyphicon glyph="glyphicon glyphicon-search" />
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.mapSearch.searchTerm,
  }
}

export const ConnectedSearchForm = connect(mapStateToProps)(SearchForm)
