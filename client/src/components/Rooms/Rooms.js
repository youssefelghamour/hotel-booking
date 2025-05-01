import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from "./RoomsStyles";

const images = {
    "Single room": require('../../assets/single.jpg'),
    "Double small": require('../../assets/double-small.jpg'),
    "Double room": require('../../assets/double.png'),
    "Family room": require('../../assets/family.png'),
    "Royal suite": require('../../assets/royal.jpg'),
    "Presidential Suite": require('../../assets/royal.jpg'),
};


class Room extends Component {
  render() {
    const { type, price, available } = this.props;

    return (
        <div className={css(styles.room)}>
            <img
                src={images[type] || images["Single room"]}
                alt={type}
                className={css(styles.roomImage)}
            />
            <div>
                <h3 className={css(styles.roomTitle)}>{type}</h3>
                <p className={css(styles.roomText)}>Price: ${price}</p>
                <p className={css(styles.roomText)}>Available: {available}</p>
                <button className={css(styles.button)} disabled={available === 0} onClick={() => this.props.onBook({ type, price, available })}>Book Now</button>
            </div>
            
        </div>
    );
  }
}

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
        };
    }

    async componentDidMount() {
        try {
          const response = await fetch('http://localhost:5000/rooms', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.json();
          this.setState({ rooms: data });
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
    }

    render() {
        return (
        <div className={css(styles.rooms)}>
            <div className={css(styles.roomList)}>
                {this.state.rooms.map((room, index) => (
                    <Room key={index} {...room} onBook={this.props.onRoomSelect} />
                ))}
            </div>
        </div>
        );
    }
}

export default Rooms;