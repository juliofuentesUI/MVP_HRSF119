import React, {Component} from 'react';
import { connect } from 'react-redux';

class Search extends Component {    
  constructor(props) {
    super(props);
    this.state = {
      artistQuery: ''
    }

    this.updateArtistQuery = this.updateArtistQuery.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.searchArtist = this.searchArtist.bind(this);
  }

  updateArtistQuery() {
      this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress()  {
      if (event.key === 'Enter') {
          this.searchArtist();
      }
  }

  searchArtist() {
      this.props.searchArtist(this.state.artistQuery);
  }

  render() {
      return (
          <div>
              <input onChange={this.updateArtistQuery} placeholder="Search for an Artist" onKeyPress={this.handleKeyPress}/>
              <button onClick={this.searchArtist}>Search</button>
          </div>
      )
  }
}

const mapDispatchToProps = dispatch => {

};



export default Search;