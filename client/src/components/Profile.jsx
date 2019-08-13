import React, {Component} from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <p>I AM YOUR PROFILE</p>
    )
  }
}

export default Profile;