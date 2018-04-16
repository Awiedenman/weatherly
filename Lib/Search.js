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
    event.preventDefault();
    if (event.keyCode === 13) {
        const city = cities.data.find( city => {
          return city === this.state.query;
        });
        this.props.updateStateFromSearch(city)
      }
    }
    
  

  userInputChanges(event) {
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
          onKeyDown={this.searchData}
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
