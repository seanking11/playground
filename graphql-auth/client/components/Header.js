import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class Header extends Component {
  componentWillMount() {

  }

  render() {
    console.log(this.props);
    return (
      <div>Header</div>
    )
  }
}

export default graphql(query)(Header)
