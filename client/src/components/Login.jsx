import React, { Component } from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  submitHandler() {
    const { authenticate } = this.props;
    //Perform GET REQUEST TAKING onChanged USERNAME and PASSWORD
    //Params property in config is same as doing /login?username=julio&password=fasdf
    axios.get(`/login/${this.state.username}/${this.state.password}`)
    .then((response) => {
        console.log(response);
        //FIRES REDUX ACTION OBJECT
        authenticate();
    }).catch((error) => {
        console.log(error);
    });
  }

  render() {
    return(
      <div>
        <label htmlFor="username">Username</label>
        <br/>
        <input type="text" name="username" id="username" onChange={this.handleChange}/>
        <br/>
        <label htmlFor="password">Password Below</label>
        <br/>
        <input type="password" id="password" onChange={this.handleChange}/>
        <br/>
        <button onClick={this.submitHandler}>LOGIN</button>
      </div>
    )
  }
}

export default Login;