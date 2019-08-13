import React, {Component} from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/auth';
import Login from './Login.jsx';
import Profile from './Profile.jsx';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      tracks: []
    }

    this.searchArtist = this.searchArtist.bind(this);
  }

  searchArtist(artistQuery) {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    .then((response) => response.json())
    .then((json) => {
        if (json.artists.total > 0) {
          console.log(json.artists.items[0]);
            const artist = json.artists.items[0];
            this.setState({ artist });

            fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks}))
            .catch(error => alert(error.message));
        }
    }).catch(error => alert(error.message));
  }

  render() {
    console.log('props');
    console.log(this.props);

    const { authenticated, authenticate } = this.props;
    if (authenticated) {
      return (
        <div>
          YOU ARE LOGGED IN 
          <Profile searchArtist={this.searchArtist} artist={this.state.artist} tracks={this.state.tracks}/>
        </div>
      )
    } 

    return (
      <div>
        <Login authenticate={authenticate} />
      </div>
    )
  };
}





const mapStateToProps = state => {
  return {authenticated: state.authenticated };
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => {dispatch(authenticate())}
  }
};


const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);