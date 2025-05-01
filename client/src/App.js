import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rooms from './components/Rooms/Rooms';
import BookingForm from './components/BookingForm/BookingForm';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: null,
    };
  }

  handleRoomSelect = (room) => {
    this.setState({ selectedRoom: room });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />

        <Rooms onRoomSelect={this.handleRoomSelect} />

        {this.state.selectedRoom && (
          <BookingForm room={this.state.selectedRoom} handleRoomSelect={this.handleRoomSelect}/>
        )}

        <Footer />
      </div>
    );
  }
  
}

export default App;
