import React from "react";
import globalAudio from "./globalAudio";
import * as BsIcons from "react-icons/bs";

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      button: false,
      name: props.name,
      icon: props.icon,
      id: props.id,
      index: props.index,
      toggleIndex: props.toggleIndex,
    };

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    let trackItem = document.getElementById("track-item-id" + this.state.index);
    // let pauseButton = document.getElementById('pause-button');
    // let playButton = document.getElementById('play-button');

    console.log('play ' + this.state.play);

    // *NEEDS TO BE FIXED*
    // figure out how to reset earlier state's white hover background
    this.setState({ play: !this.state.play }, () => {
      if (this.props.toggleIndex) {
        globalAudio.pause(this.state.name);
        trackItem.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      } else {
        globalAudio.play(this.state.name);
        trackItem.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      
      this.props.toggleHover(this.props.index, this.state.id);
      // console.log("audio: " + this.state.play);
    });
  }

  componentWillUnmount() {
    globalAudio.pause(this.state.name);
  }

  render() {
    return (
      <>
        <span className="track-number play-icon" onClick={this.togglePlay}>
          {this.props.toggleIndex ? (
            <BsIcons.BsPauseCircleFill id="pause-button"/>
          ) : (
            <BsIcons.BsPlayCircleFill id="play-button"/>
          )}
        </span>
      </>
    );
  }
}

export default Music;
