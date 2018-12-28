import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from  '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import FormattedTime from '../../utils/timeHelper'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import Fullscreen from "../components/full-screen";

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    currentVolume:1,
    previousVolume:1
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause,
    })
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target
    this.setState({
      duration: this.video.duration,
      currentTime: this.video.currentTime,
    })
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.video.currentTime,
    })
  }

  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = (event) => {
    this.setState({
      loading: true,
    })
  }

  handleSeeked = (event) => {
    this.setState({
      loading: false,
    })
  }

  handleVolumeChange = (event) => {
    this.video.volume = event.target.value
    this.setState({
      currentVolume: event.target.value
    })
  }

  toggleVolume = (event) => {
    if (this.video.volume > 0 ) {
      this.setState({
        previousVolume: this.video.volume,
        currentVolume: 0
      })
      this.video.volume = 0
    } else {
      this.setState({
        currentVolume: this.state.previousVolume
      })
      this.video.volume = this.state.previousVolume
    }
  }

  handleFullScreenClick = (event) => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }
  }

  setRef = (element) => {
    this.player = element;
  }

  render() {
    return (
      <VideoPlayerLayout>
        <div ref={this.setRef} style={{width:'100%'}}>
          <Title
            title={this.props.title}
          />
          <Controls>
            <PlayPause
              pause={this.state.pause}
              handleClick={this.togglePlay}
            />
            <Timer
              duration={FormattedTime(this.state.duration)}
              currentTime={FormattedTime(this.state.currentTime)}
            />
            <ProgressBar
              duration={this.state.duration}
              value={this.state.currentTime}
              handleProgressChange={this.handleProgressChange}
            />
            <Volume
              value={parseFloat(this.state.currentVolume)}
              handleVolumeChange={this.handleVolumeChange}
              handleClick={this.toggleVolume}
            />
            <Fullscreen
              handleFullScreenClick={this.handleFullScreenClick}
            />
          </Controls>
          <Spinner
            active={this.state.loading}
          />
          <Video
            autoplay={this.props.autoplay}
            pause={this.state.pause}
            src={this.props.src}
            handleLoadedMetadata={this.handleLoadedMetadata}
            handleTimeUpdate={this.handleTimeUpdate}
            handleSeeking={this.handleSeeking}
            handleSeeked={this.handleSeeked}
          />
        </div>
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;