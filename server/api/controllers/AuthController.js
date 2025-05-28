const jwt = require('jsonwebtoken');
const User = require('../models/User');


/**
 * AuthController class that handles Login API endpoints
 */
class AuthController {
    /* Login */
    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email }).lean();

            if (!user || user.password !== password) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const accessToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' });
            const refreshToken = jwt.sign({ email: user.email }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '7d' });

            // Set refresh token in HTTP-only cookie
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,  // For development without https (set to true in production when using https)
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            const { password: _, ...userWithoutPassword } = user;
            return res.json({ accessToken, user: userWithoutPassword });
        } catch (error) {
            console.log('Login error:', error);
            return res.status(500).json({ message: 'Error logging in', error });
        }
    }


    /* Refresh Access Token */
    async refresh(req, res) {
        const refreshToken = req.body.refreshToken || req.cookies.refreshToken;
        // Check if refresh token is provided in the request body or as a cookie
        if (!refreshToken) return res.status(401).json({ message: 'No refresh token' });

        try {
            // Verify the refresh token (this will also check if it's expired)
            const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
            // Generate a new access token
            const accessToken = jwt.sign({ email: payload.email }, process.env.JWT_SECRET_KEY, { expiresIn: '15m' });
            return res.json({ newAccessToken: accessToken });
        } catch (error) {
            return res.status(403).json({ message: 'Invalid or expired refresh token' });
        }
    }


    /* Logout */
    async logout(req, res) {
        // Clear refresh token cookie
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            path: '/',
        });

        return res.status(200).json({ message: 'Logged out successfully' });
    }


    /* Get logged in user */
    async getLoggedInUser(req, res) {
        const authHeader = req.headers['authorization'];
        const token = authHeader?.split(' ')[1];

        if (!token) return res.status(401).json({ message: 'No token' });

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await dbClient.usersCollection.findOne({ email: payload.email });

            if (!user) return res.status(404).json({ message: 'User not found' });

            const { password, ...userWithoutPassword } = user;
            return res.json(userWithoutPassword);
        } catch (error) {
            return res.status(403).json({ message: 'Invalid token' });
        }
    }
}


module.exports = new AuthController();