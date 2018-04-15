import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };

    this.userInputChanges = this.userInputChanges.bind(this)
  }
  

  userInputChanges() {
    this.setState({
      query: this.search.value
    });
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.userInputChanges}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
