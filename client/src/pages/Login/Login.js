import { css } from 'aphrodite';
import styles from "./LoginStyles";
//import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Component } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';



const withNavigate = (WrappedComponent) => { 
    return function WithNavigate(props) { 
        // 'useNavigate' hook provides navigation function, allowing us to redirect
        const navigate = useNavigate(); 

        // Return the wrapped component with all the original props and the new 'navigate' prop
        return <WrappedComponent {...props} navigate={navigate} />; 
    };
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount() {
        // 1. Check if access token exists in localStorage
        const accessToken = localStorage.getItem('accessToken');
        //console.log('Access Token:', accessToken);

        if (accessToken) {
        // 2. Check if the access token is expired
        try {
            //console.log('Decoding access token:', accessToken);
            const decoded = jwtDecode(accessToken);
            const currentTime = Date.now() / 1000; // Current time in seconds

            if (decoded.exp > currentTime) {
            // Access token is not expired, set loggedIn state to true and get user info
            this.setState({ loggedIn: true });
            //this.fetchUserData(accessToken);
            } else {
            // 3. If access token expired, try to refresh with refresh token
            this.refreshAccessToken();
            }
        }
        catch (error) {
            console.error('Error decoding access token:', error);
            // If there's an error decoding the token, log out the user
            this.handleLogout();
        }
        } else {
        // 4. If no access token and refresh token, user is logged out
        // If no access token, attempt to refresh with the refresh token if it exists
        this.refreshAccessToken();
        }
    }

    refreshAccessToken = async () => {
        // 1. Send a request to the backend to refresh the access token
        // 2. The backend will verify the refresh token and send a new access token
        try {
        const response = await fetch('http://localhost:5000/refresh', {
            method: 'POST',
            credentials: 'include',  // Ensure cookies are sent with the request
        });

        const data = await response.json();

        if (response.ok) {
            // If the refresh token is valid, keep the user logged in
            console.log('New Access Token:', data.newAccessToken);
            this.setState({ loggedIn: true });
            // Store the new access token in localStorage
            console.log('New Access Token:', data.newAccessToken);
            localStorage.setItem('accessToken', data.newAccessToken);  // Store the new access token
        } else {
            // If the refresh token is invalid or expired, log out the user
            console.log('Error refreshing token: Backend:', data.message);
            this.handleLogout();
        }
        } catch (error) {
        console.error('Error refreshing token:', error);
        }
    }

    handleLogin = (user) => {
        this.setState({ loggedIn: true, user });
    }

    handleLogout = async () => {
        try {
        // Send a request to the backend to log out
        await fetch('http://localhost:5000/logout', {
            method: 'POST',
            credentials: 'include',  // Ensure cookies are sent with the request
        });

        // Remove the token from localStorage
        localStorage.removeItem('accessToken');
        // Clear refresh token cookie
        document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

        // Update state to reflect logout
        this.setState({ loggedIn: false, user: null });
        } catch (error) {
        console.error('Error logging out:', error);
        }
    }

    render() {
        return (
            <div className={css(styles.loginPage)}>
                <div className={css(styles.loginLeft)}>
                    <h2 className={css(styles.title)}>AURUM</h2>
                    <h3 className={css(styles.subTitle)}>Hotel</h3>
                    <p className={css(styles.message1)}>Welcome! Login to track your reservation.</p>
                    <p className={css(styles.message2)}>If you haven't booked yet, reserve a room to create an account.</p>
                    <div className={css(styles.buttonGroup)}>
                        <button className={css(styles.bookButton)}>Book a Room</button>
                        <button className={css(styles.homeButton)} onClick={() => this.props.navigate('/')}>Home</button>
                    </div>
                </div>

                { !this.state.loggedIn ? (
                    <LoginForm handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedIn={this.state.loggedIn} />
                ) : (
                    <div>
                        <p>logged in</p>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        );
    }
}

export default withNavigate(Login);