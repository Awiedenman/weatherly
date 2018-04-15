import React, { Component } from 'react';
import '../Styles/Search.css'

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
      <form role="search">
        <input
          ref={input => this.search = input}
          onChange={this.userInputChanges}
          type="search"
          placeholder="City, St OR zipcode"
          name="q"
          size="40"
          required
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default Search;
