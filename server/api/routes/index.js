const express = require('express');
const path = require('path');
const UsersController = require('../controllers/UsersController');
const RoomsController = require('../controllers/RoomsController');
const BookingsController = require('../controllers/BookingsController');
const AuthController = require('../controllers/AuthController');


const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is running!');
});


/* Users Routes */

// CREATE a new user
router.post('/users', UsersController.createUser);
// GET all users
router.get('/users', UsersController.getUsers);
// GET a user by id
router.get('/users/:id', UsersController.getUserByID);
// UPDATE a user by id
router.put('/users/:id', UsersController.updateUser);
// DELETE a user by id
router.delete('/users/:id', UsersController.deleteUser);


/* Rooms Routes */

// CREATE a new room
router.post('/rooms', RoomsController.createRoom);
// GET all rooms
router.get('/rooms', RoomsController.getRooms);
// GET a room by id
router.get('/rooms/:id', RoomsController.getRoomByID);
// UPDATE a room by id
router.put('/rooms/:id', RoomsController.updateRoom);
// DELETE a room by id
router.delete('/rooms/:id', RoomsController.deleteRoom);


/* Bookings Routes */

// CREATE a new booking
router.post('/bookings', BookingsController.createBooking);
// GET all bookings
router.get('/bookings', BookingsController.getBookings);
// GET a booking by id
router.get('/bookings/:id', BookingsController.getBookingByID);
// UPDATE a booking by id
router.put('/bookings/:id', BookingsController.updateBooking);
// DELETE a booking by id
router.delete('/bookings/:id', BookingsController.deleteBooking);


/* Login Route */

// POST login
router.post('/login', AuthController.login);
// POST refresh token
router.post('/refresh', AuthController.refresh);
// POST logout
router.post('/logout', AuthController.logout);
// GET logged in user
router.get('/profile', AuthController.getLoggedInUser);


module.exports = router;