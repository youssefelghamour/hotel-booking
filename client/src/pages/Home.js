import { Component } from 'react';
import './Home.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Rooms from '../components/Rooms/Rooms';
import BookingForm from '../components/BookingForm/BookingForm';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/Footer';
import { FaCheck } from "react-icons/fa";
import { css } from 'aphrodite';
import styles from '../AppStyles';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: null,
      show: false,
      loggedIn: false,
      user: null,
    };
  }

  componentDidMount() {
    // Check if a token exists in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      // If the token exists, update state to loggedIn and set the user info
      this.setState({ loggedIn: true, user: { email: 'email from the actual user logged in' } });
      console.log(token);
    }
  }

  handleLogin = (user) => {
    this.setState({ loggedIn: true, user });
  }

  handleLogout = async () => {
  try {
    // Send a request to the backend to log out
    await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      }
    });

    // Remove the token from localStorage
    localStorage.removeItem('authToken');

    // Update state to reflect logout
    this.setState({ loggedIn: false, user: null });
  } catch (error) {
    console.error('Error logging out:', error);
  }
  }

  handleRoomSelect = (room) => {
    this.setState({ selectedRoom: room });
  };

  handleFlash = () => {
    this.setState({ show: true });
    setTimeout(() => this.setState({ show: false }), 3000);
  };

  render() {
    return (
      <div className="Home">
        <Header />
        <Hero />

        <Rooms onRoomSelect={this.handleRoomSelect} />

        {this.state.selectedRoom && (
          <BookingForm room={this.state.selectedRoom} handleRoomSelect={this.handleRoomSelect} handleFlash={this.handleFlash}/>
        )}

        <div className={css(styles.flashMessage, this.state.show ? styles.show : styles.hide )} >
          <FaCheck />
          <p className={css(styles.flashText)}>Your reservation is confirmed. Thank you for booking with us!</p>
        </div>

        { !this.state.loggedIn ? (
          <Login handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedIn={this.state.loggedIn} user={this.state.user} />
        ) : (
          <div style={{position: 'relative', top: '-170px',}}>
            <p>logged in</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        )}

        <Footer />
      </div>
    );
  }
  
}

export default Home;
