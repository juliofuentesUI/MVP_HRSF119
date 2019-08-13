import React, {Component} from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/auth';
import Login from './Login.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log('props');
    console.log(this.props);

    const { authenticated, authenticate } = this.props;
    if (authenticated) {
      return (
        <div>
          YOU ARE LOGGED IN 
          <Profile/>
        </div>
      )
    } 

    return (
      <div>
        <Login authenticate={authenticate}/>
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