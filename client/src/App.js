import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rooms from './components/Rooms/Rooms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Rooms />
      </div>
    );
  }
  
}

export default App;
