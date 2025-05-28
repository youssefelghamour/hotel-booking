import { css } from 'aphrodite';
import React, { Component } from 'react';
import styles from './LoginFormStyles';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include cookies in the request
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('accessToken', data.accessToken);
        console.log('login accessToken:', data.accessToken);
        this.props.handleLogin({ email }); // Updating parent component state
      } else {
        this.setState({ error: data.message || 'An error occurred' });
      }
    } catch (err) {
      this.setState({ error: 'An error occurred' });
    }
  }

  render() {
    const { email, password, error } = this.state;
    const { loggedIn } = this.props;

    if (loggedIn) {
        return (
            <div>
            <p>Welcome back!</p>
            <button>Logout</button>
            </div>
        );
    }

    return (
        <div className={css(styles.LoginContainer)}>
          <h2>Log in to Your Account</h2>
          <p style={{ marginTop: 0, color: 'gray', fontSize: '14px' }}>Use the email used for your reservation</p>
    
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <form className={css(styles.loginForm)} onSubmit={this.handleSubmit}>
            <input
              className={css(styles.inputField)}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <input
              className={css(styles.inputField)}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <button className={css(styles.submitButton)} type="submit">Login</button>
          </form>
          
          <p className={css(styles.helpText)}>
            Need help? <a href="mailto:support@aurumhotel.com">Contact support</a>
          </p>
        </div>
    );
  }
}

export default Login;