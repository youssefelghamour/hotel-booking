const dbClient = require('../../utils/db');


/**
 * BookingsController class that handles booking-related API endpoints
 */
class BookingsController {
    /* CREATE /bookings: creates a new booking */
    async createBooking(req, res) {
        res.send('Create a new booking');
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