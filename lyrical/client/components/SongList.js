import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li
        key={song.id}
        className='collection-item'
      >
        {song.title}
      </li>
    ))
  }

  render() {
    return (
      <ul className='collection'>
        {this.props.data.loading ? 'loading...' : this.renderSongs()}
      </ul>
    )
  }
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`

export default graphql(query)(SongList)
