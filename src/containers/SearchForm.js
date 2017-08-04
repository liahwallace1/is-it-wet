import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon } from 'react-bootstrap';

class SearchForm extends Component {

  handleChange(e) {
    let value = e.target.value
    this.props.dispatch(changeSearchTerm(value))
  }

  handleSubmit = event => {
    event.preventDefault()

  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Search:</ControlLabel>
            {' '}
          <FormControl type="text" value={this.state.searchTerm} placeholder="enter location" onChange={this.handleChange}/>
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
    searchTerm: state.searchTerm,
  }
}

export const ConnectedSearchForm = connect(mapStateToProps)(SearchForm)
