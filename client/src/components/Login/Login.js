import { css } from 'aphrodite';
import React, { Component } from 'react';
import styles from './LoginStyles';


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
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('authToken', data.token);
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
    const { loggedIn, handleLogout } = this.props;

    if (loggedIn) {
        return (
            <div>
            <p>Welcome back!</p>
            <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className={css(styles.LoginContainer)}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                required
                />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    );
  }
}

export default Login;