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
      if (cities.data.includes(event.target.value)) {
        citySt = event.target.value;
        this.props.updateStateFromSearch(citySt)
      }
        // const citySt = cities.data.find( citySt => { 
        //   return citySt === this.state.query;
        // });
        // this.props.updateStateFromSearch( citySt )
      // }
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
        <input
          ref={ input => this.search = input }
          value={ this.state.query }
          onChange={ this.userInputChanges }
          onKeyDown={ this.searchData }
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
