import React, {Component} from 'react';
import { connect } from 'react-redux';
import Search from './Search.jsx';
import Artist from './Artist.jsx';
import Tracks from './Tracks.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>I AM YOUR PROFILE</p>
        <Search searchArtist={this.props.searchArtist}/>
        <Artist artist={this.props.artist}/>
        <Tracks tracks={this.props.tracks}/>
      </div>
    )
  }
}

export default Profile;