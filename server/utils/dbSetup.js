/**
 * This file initializes and populates the MongoDB database with necessary collections and sample data
 */

const dbClient = require('./db');
// Get data from the JSON files (just require them directly)
const usersData = require('../data/users.json');
const roomsData = require('../data/rooms.json');
const bookingsData = require('../data/bookings.json');


/* Function to insert data into the database */
async function insertToDB() {
  try {
    // Wait for the connection to be established
    await dbClient.connect();

    // Insert the data into the collections
    await dbClient.usersCollection.insertMany(usersData);
    await dbClient.roomsCollection.insertMany(roomsData);
    await dbClient.bookingsCollection.insertMany(bookingsData);

    console.log('dbSetup: Data inserted successfully!');
  } catch (err) {
    console.error('dbSetup: Error:', err);
  } finally {
    // Close the database connection
    await dbClient.client.close();
    console.log('dbSetup: Database connection closed after inserting Data');
  }
}

insertToDB();