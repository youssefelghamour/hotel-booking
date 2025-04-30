/**
 * File contains the DBClient class that manages the connection to the MongoDB database.
 * And exports an instance of DBClient for use in other modules.
 */

const { MongoClient } = require('mongodb');


class DBClient {
    constructor() {
        this.dbName = 'hotel';
        this.url = `mongodb://localhost:27017`;
        this.client = new MongoClient(this.url);
        this.isAlive = false;  // Track connection status
    }

    /* Connects to MongoDB if not already connected */
    async connect() {
        if (!this.isAlive) {
            try {
                await this.client.connect();
                this.db = this.client.db(this.dbName);

                // Initialize collections
                this.usersCollection = this.db.collection('users');
                this.roomsCollection = this.db.collection('rooms');
                this.bookingsCollection = this.db.collection('bookings');

                // Mark connection as established
                this.isAlive = true;
                console.log('db.js: Connected to MongoDB');
            } catch (err) {
                console.error(`db.js: Failed to connect to MongoDB: ${err.message}`);
            }
        }
    }
}

const dbClient = new DBClient();
module.exports = dbClient;