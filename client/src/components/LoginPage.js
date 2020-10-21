import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginPage extends Component {
  render() {

    return (
      <div>
        <h3>Login Page</h3>
        {/* {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />} */}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to='register'>Register here</Link>
      </div>
    );
  }
}

export default LoginPage;