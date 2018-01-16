import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import apiKey from './apiKey.js'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

const API_KEY = apiKey


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: ''
    }

    this.videoSearch('Human Fall Flat')
  }

  videoSearch = term => {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] })
    })
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
