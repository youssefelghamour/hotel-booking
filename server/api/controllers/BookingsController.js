const dbClient = require('../../utils/db');
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
            const user = await dbClient.usersCollection.findOne({ _id: new ObjectId(userId) });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Check if the room exists
            const room = await dbClient.roomsCollection.findOne({ _id: new ObjectId(roomId) });
            if (!room) {
                return res.status(404).json({ message: 'Room not found' });
            }

            // Check room availability
            if (room.available <= 0) {
                return res.status(400).json({ message: 'Room is not available' });
            }

            // Create the booking
            const newBooking = {
                userId: new ObjectId(userId),
                roomId: new ObjectId(roomId),
                checkInDate,
                checkOutDate,
            };

            const result = await dbClient.bookingsCollection.insertOne(newBooking);

            // Update room availability
            await dbClient.roomsCollection.updateOne(
                { _id: new ObjectId(roomId) },
                { $inc: { available: -1 } } // Decrease the available rooms by 1
            );

            return res.status(201).json({
                _id: result.insertedId.toString(),
                ...newBooking
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating booking', error });
        }
    }


    /* GET /bookings: returns all the bookings from the bookingsCollection */
    async getBookings(req, res) {
        // Fetch all bookings (toArray because find() returns a cursor)
        let bookings = await dbClient.bookingsCollection.find().toArray();

        bookings = bookings.map((booking) => {
            return {
                _id: booking._id.toString(),
                ...booking
            };
        });

        return res.status(200).json(bookings);
    }


    /* GET /bookings/id: returns the booking with the id */
    async getBookingByID(req, res) {
        res.send('Get booking by id');
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