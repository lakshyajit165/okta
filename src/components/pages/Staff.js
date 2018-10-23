import React, { Component } from 'react'

class Staff extends Component {

  state = {
      currentUserName: '',
      currentUserEmail: ''
  }  

  componentDidMount(){
      const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
      this.setState({
        currentUserEmail: idToken.idToken.claims.email,
        currentUserName: idToken.idToken.claims.name,
      });
  }
  render() {
    
    const { currentUserEmail, currentUserName} = this.state;
    return (
      <div className="jumbotron text-center">
        <h1>Welcome {currentUserName}</h1>
        <p className="lead"><b>Email: </b>{currentUserEmail}</p>
        <hr/>
        <p className="lead">You have reached the authorized area of the portal</p>
      </div>
    )
  }
}

export default Staff;
