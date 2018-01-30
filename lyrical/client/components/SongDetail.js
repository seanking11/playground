import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import LyricCreate from './LyricCreate'
import fetchSong from '../queries/fetchSong'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>Song Detail</h3>
        {!song ? '' : song.title}
        <LyricCreate
          songId={this.props.params.id}
        />
      </div>
    )
  }
}



export default graphql(fetchSong, {
  options: (props) => ({ variables: { id: props.params.id } } )
})(SongDetail)
