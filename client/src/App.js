import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rooms from './components/Rooms/Rooms';
import BookingForm from './components/BookingForm/BookingForm';
import Footer from './components/Footer/Footer';
import { FaCheck } from "react-icons/fa";
import { css } from 'aphrodite';
import styles from './AppStyles';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: null,
      show: false,
    };
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
      <div className="App">
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

        <Footer />
      </div>
    );
  }
  
}

export default App;
