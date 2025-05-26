const Room = require('../models/Room');


/**
 * RoomsController class that handles room-related API endpoints
 */
class RoomsController {
    /* CREATE /rooms: creates a new room */
    async createRoom(req, res) {
        res.send('Create a new room');
    }


    /* GET /rooms: returns all the rooms from the roomsCollection */
    async getRooms(req, res) {
        let rooms = await Room.find().lean();

        rooms.forEach((room) => {
            room._id = room._id.toString();
        });

        return res.status(200).json(rooms);
    }


    /* GET /rooms/id: returns the room with the id */
    async getRoomByID(req, res) {
        res.send('Get room by id');
    }


    /* UPDATE /rooms/id: updates the room with the id */
    async updateRoom(req, res) {
        res.send('Update room by id');
    }


    /* DELETE /rooms/id: deletes a room with the id */
    async deleteRoom(req, res) {
        res.send('Delete room by id');
    }
}


module.exports = new RoomsController();