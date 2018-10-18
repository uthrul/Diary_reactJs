import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container-fluid"> 
        <div className="roe text-center">
            <div className="col-sm-12 jumbotron">
                <h1>
                    login with your favorite social Network
                </h1>
            </div>

            <div className="col-sm-4">
                <button className="btn btn-danger btn-lg">
                    Login with Google
                </button>
            </div>

            <div className="col-sm-4">
                <button className="btn btn-primary btn-lg">
                    Login with Facebook
                </button>
            </div>

            <div className="col-sm-4">
                <button className="btn btn-success btn-lg">
                    Login with Twitter
                </button>
            </div>
        </div>
      </div>
    )
  }
}

export default Login;
