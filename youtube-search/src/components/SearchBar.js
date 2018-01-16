import React, { Component } from 'react'

// const SearchBar = () => <input />

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = term => {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
    )
  }
}

export default SearchBar
