import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from "./RoomsStyles";
import { IoTvOutline } from "react-icons/io5";
import { IoWifiOutline } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { RiSafeLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";



const images = {
    "Single room": require('../../assets/single.jpg'),
    "Double small": require('../../assets/double-small.jpg'),
    "Double room": require('../../assets/double.png'),
    "Family room": require('../../assets/family.png'),
    "Royal suite": require('../../assets/royal.jpg'),
    "Presidential Suite": require('../../assets/presidential.jpg'),
};


class Room extends Component {
  render() {
    const { room } = this.props;
    const { type, price, available } = {...room};

    return (
        <div className={css(styles.room)}>
            <img
                src={images[type] || images["Single room"]}
                alt={type}
                className={css(styles.roomImage)}
            />
            <div className={css(styles.roomInfo)}>
                <h3 className={css(styles.roomTitle)}>{type}</h3>
                <div className={css(styles.roomAmenities)}>
                    {type !== "Single room" && <IoBedOutline />}
                    <IoTvOutline />
                    <IoWifiOutline />
                    <MdOutlineRoomService />
                    <MdOutlineCoffeeMaker />
                    <PiBathtub />
                    {(type === "Royal suite" || type === "Presidential Suite") && <RiSafeLine />}
                </div>
                <p className={css(styles.roomPrice)}><b>${price}</b></p>
                <p className={css(styles.roomAvailability)}>{available} available rooms</p>
                <button className={css(styles.button)} disabled={available === 0} onClick={() => this.props.onBook(room)}>Book Now</button>
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
                    <Room key={index} room={room} onBook={this.props.onRoomSelect} />
                ))}
            </div>
        </div>
        );
    }
}

export default Rooms;