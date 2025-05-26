const Booking = require('../models/Booking');
const User = require('../models/User');
const Room = require('../models/Room');
const { ObjectId } = require('mongodb');


/**
 * BookingsController class that handles booking-related API endpoints
 */
class BookingsController {
    /* CREATE /bookings: creates a new booking */
    async createBooking(req, res) {
        const { userId, roomId, checkInDate, checkOutDate } = req.body;

        if (!userId || !roomId || !checkInDate || !checkOutDate) {
            return res.status(400).json({ message: 'User ID, room ID, check-in date, and check-out date are required' });
        }

        try {
            // Check if the user exists
            const user = await User.findById({ _id: new ObjectId(userId) });
            if (!user) return res.status(404).json({ message: 'User not found' });

            // Check if the room exists
            const room = await Room.findById({ _id: new ObjectId(roomId) });
            if (!room) return res.status(404).json({ message: 'Room not found' });

            // Check room availability
            if (room.available <= 0) return res.status(400).json({ message: 'Room is not available' });

            // Create the booking
            const newBooking = await Booking.create({
                user: user._id,
                room: room._id,
                checkInDate,
                checkOutDate,
            });

            newBooking._id = newBooking._id.toString();

            // Update room availability
            await Room.updateOne(
                { _id: room._id },
                { $inc: { available: -1 } } // Decrease the available rooms by 1
            );

            return res.status(201).json(newBooking);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating booking', error });
        }
    }


    /* GET /bookings: returns all the bookings from the bookingsCollection */
    async getBookings(req, res) {
        let bookings = await Booking.find().lean();

        bookings.forEach((booking) => { booking._id = booking._id.toString(); });

        return res.status(200).json(bookings);
    }


    /* GET /bookings/id: returns the booking with the id */
    async getBookingByID(req, res) {
        let bookingId = req.params.id;

        if (!bookingId) {
            return res.status(400).json({ message: 'Booking ID is required' });
        }

        let booking = await Booking.findById({ _id: new ObjectId(bookingId) }).populate('user').populate('room').lean();
        
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        booking._id = booking._id.toString();

        return res.status(200).json(booking);
    }


    /* UPDATE /bookings/id: updates the booking with the id */
    async updateBooking(req, res) {
        res.send('Update booking by id');
    }


    /* DELETE /bookings/id: deletes a booking with the id */
    async deleteBooking(req, res) {
        res.send('Delete booking by id');
    }
}


module.exports = new BookingsController();