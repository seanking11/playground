import React from 'react'
import VideoListItem from './VideoListItem'
import VideoDetail from './VideoDetail'

const VideoList = props => (
  <ul className='col-md-4 list-group'>
    {props.videos.map(video => (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    ))}
  </ul>
)

export default VideoList
