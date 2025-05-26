const User = require('../models/User');


/**
 * UsersController class that handles user-related API endpoints
 */
class UsersController {
    /* CREATE /users: creates a new user */
    async createUser(req, res) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }

        try {
            // Create a new user
            const newUser = await User.create({
                name,
                email,
                password,
            });

            return res.status(201).json({
                _id: newUser._id.toString(),
                name: newUser.name,
                email: newUser.email,
            });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating user', error });
        }
    }


    /* GET /users: returns all the users from the usersCollection */
    async getUsers(req, res) {
        let users = await User.find().lean();

        users = users.map((user) => {
            return {
                _id: user._id.toString(),
                name: user.name,
                email: user.email,
            };
        });

        return res.status(200).json(users);
    }


    /* GET /users/id: returns the user with the id */
    async getUserByID(req, res) {
        res.send('Get user by id');
    }


    /* UPDATE /users/id: updates the user with the id */
    async updateUser(req, res) {
        res.send('Update user by id');
    }


    /* DELETE /users/id: deletes a user with the id */
    async deleteUser(req, res) {
        res.send('Delete user by id');
    }
}


module.exports = new UsersController();