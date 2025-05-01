const dbClient = require('../../utils/db');


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
                const newUser = {
                    name,
                    email,
                    password,
                };



                // Insert into the database
                const result = await dbClient.usersCollection.insertOne(newUser);

                return res.status(201).json({
                    _id: result.insertedId.toString(),
                    ...newUser
                });
            } catch (error) {
                return res.status(500).json({ message: 'Error creating user', error });
            }
    }


    /* GET /users: returns all the users from the usersCollection */
    async getUsers(req, res) {
        // Fetch all users (toArray because find() returns a cursor)
        let users = await dbClient.usersCollection.find().toArray();

        users = users.map((user) => {
            return {
                _id: user._id.toString(),
                ...user
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