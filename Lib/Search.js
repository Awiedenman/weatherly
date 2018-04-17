import React, { Component } from 'react';
import '../Styles/Search.css';
// import Trie from '@awiedenman/complete-me/scripts/Trie';
import cities from './biggest1000Cities';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      query: ''
    };

    this.userInputChanges = this.userInputChanges.bind(this);
    this.searchData = this.searchData.bind(this);
  }

  searchData(event) {
    let citySt;
    if (event.keyCode === 13) {
      event.preventDefault();
      citySt = event.target.value;
      this.props.updateStateFromSearch(citySt);
 
      this.setState({ query: '' });
    }
    return citySt;
  }

  userInputChanges(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <form role="search">
        <input className="searchbar"
          ref={input => this.search = input}
          value={this.state.query}
          onChange={this.userInputChanges}
          onKeyDown={this.searchData}
          type="search"
          placeholder="City, St OR zipcode"
          name="q"
          size="40"
          required
        />
      </form>
    );
  }
}

export default Search;
