import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, Glyphicon } from 'react-bootstrap';

class SearchForm extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: "",
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
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

export default SearchForm
