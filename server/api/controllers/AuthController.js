const jwt = require('jsonwebtoken');
const dbClient = require('../../utils/db');


/**
 * AuthController class that handles Login API endpoints
 */
class AuthController {
    /* Login */
    async login(req, res) {
        const { email, password } = req.body;
        
        try {
            // Fetch user from the database
            const user = await dbClient.usersCollection.findOne({ email });

            if (!user || user.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            if (user.password === password) {
                const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' });
                return res.json({ token });
            } else {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Error logging in', error });
        }
    }

    /* Logout */
    async logout(req, res) {
        const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header: "Bearer <token>"
        
        if (token) {
            try {
                return res.status(200).json({ message: 'Logged out successfully' });
            } catch (error) {
                return res.status(500).json({ message: 'Error logging out', error });
            }
        }

        return res.status(400).json({ message: 'No token provided' });
    }
}


module.exports = new AuthController();