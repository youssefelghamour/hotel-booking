import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './BookingFormStyles';


const images = {
    "Single room": require('../../assets/single.jpg'),
    "Double small": require('../../assets/double-small.jpg'),
    "Double room": require('../../assets/double.png'),
    "Family room": require('../../assets/family.png'),
    "Royal suite": require('../../assets/royal.jpg'),
    "Presidential Suite": require('../../assets/presidential.jpg'),
};


class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            fromDate: '',
            toDate: '',
            show: false,
            room: props.room || {},
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, fromDate, toDate, room } = this.state;
        
        try {
            // Create User
            const userResponse = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
        
            if (!userResponse) {
                throw new Error('Failed to create user');
            }
        
            const user = await userResponse.json();
            console.log('User created:', user);
            console.log('room:', room);
        
            // Create Booking (also decreses the room availability ofthis room by 1)
            const bookingResponse = await fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user._id, // Use the user ID returned from creating the user
                    roomId: room._id, // Assuming room has an `id` property
                    checkInDate: fromDate,
                    checkOutDate: toDate,
                }),
            });
        
            if (!bookingResponse) {
                throw new Error('Failed to create booking');
            }
        
            const booking = await bookingResponse.json();
        
            console.log('Booking confirmed:', booking);

            // Reset room to null after successful booking
            this.setState({ room: null });
            // Call the parent component's method to reset the selected room
            // This will hide the form
            this.props.handleRoomSelect(null);

            this.props.handleFlash();
        } catch (error) {
            console.error('Error in booking process:', error);
        }
    };

    render() {
        const { room } = this.state;

        return (
            <div className={css(styles.bookingFormContainer)}>
                <div className={css(styles.roomInfo)}>
                    <h3 className={css(styles.roomTitle)}>Room Info</h3>
                    <img
                        src={images[room.type] || images["Single room"]}
                        alt={room.type}
                        className={css(styles.roomImage)}
                    />
                    <p className={css(styles.roomText)}><strong>Type:</strong> {room.type}</p>
                    <p className={css(styles.roomText)}><strong>Price:</strong> ${room.price}</p>
                    <p className={css(styles.roomText)}> {room.description}</p>
                </div>

                <div className={css(styles.bookingForm)}>
                    <h2 className={css(styles.header)}>Booking Form</h2>
                    <form onSubmit={this.handleSubmit} className={css(styles.form)}>
                        <div className={css(styles.formGroup)}>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required
                                placeholder='Name'
                                className={css(styles.input)}
                            />
                        </div>
                        <div className={css(styles.formGroup)}>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                                placeholder='Email'
                                className={css(styles.input)}
                            />
                        </div>
                        <div className={css(styles.formGroup)}>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                                placeholder='Password'
                                className={css(styles.input)}
                            />
                        </div>
                        <div className={css(styles.formGroup)}>
                            <input
                            type="date"
                            name="fromDate"
                            value={this.state.fromDate}
                            onChange={this.handleInputChange}
                            required
                            placeholder='From Date'
                            className={css(styles.input)}
                            />
                        </div>
                        <div className={css(styles.formGroup)}>
                            <input
                            type="date"
                            name="toDate"
                            value={this.state.toDate}
                            onChange={this.handleInputChange}
                            required
                            placeholder='To Date'
                            className={css(styles.input)}
                            />
                        </div>
                        <button type="submit" className={css(styles.button)}>Submit Booking</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookingForm;
