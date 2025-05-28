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
import { useNavigate } from 'react-router-dom';


const images = {
    "Single room": require('../../assets/single.jpg'),
    "Double small": require('../../assets/double-small.jpg'),
    "Double room": require('../../assets/double.png'),
    "Family room": require('../../assets/family.png'),
    "Royal suite": require('../../assets/royal.jpg'),
    "Presidential Suite": require('../../assets/presidential.jpg'),
};


const withNavigate = (WrappedComponent) => { 
    return function WithNavigate(props) { 
        // 'useNavigate' hook provides navigation function, allowing us to redirect
        const navigate = useNavigate(); 

        // Return the wrapped component with all the original props and the new 'navigate' prop
        return <WrappedComponent {...props} navigate={navigate} />; 
    };
};


class Room extends Component {
    handleClick = (id) => {
        const room = this.props.room;
        // passing the entire room object to the next page
        this.props.navigate(`/reserve/${id}`, { state: { room } });
    };

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
                    <button className={css(styles.button)} disabled={available === 0} onClick={() => this.handleClick(room._id)}>Book Now</button>
                </div>
                
            </div>
        );
    }
}

const RoomWithNav = withNavigate(Room);

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
                        <RoomWithNav key={index} room={room} onBook={this.props.onRoomSelect} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Rooms;