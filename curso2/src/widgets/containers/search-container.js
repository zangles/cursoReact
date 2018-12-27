import React, { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: 'sdasda'
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  setInputRef = (element) => {
    this.input = element;
  }

  chandleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Search
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.chandleInputChange}
        value={this.state.value}
      />
    )
  }

}

export default SearchContainer;