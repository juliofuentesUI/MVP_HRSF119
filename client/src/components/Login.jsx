import React, { Component } from 'react';

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
    authenticate();
    //Perform GET REQUEST TAKING onChanged USERNAME and PASSWORD
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