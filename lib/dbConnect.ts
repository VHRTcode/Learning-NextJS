// Importing the mongoose library, which is a MongoDB object modeling tool designed to work in an asynchronous environment.
import mongoose from "mongoose";

// Defining a type alias ConnectionObject, which represents an array with an optional number.
// This type will be used to store the state of the database connection.
type ConnectionObject = [
    isConnected?: number
]

// Initializing a variable connection as an empty array of type ConnectionObject.
// This array will store the state of the database connection.
const connection: ConnectionObject = []

// Async function to establish a connection to the MongoDB database.
async function dbConnect(): Promise<void> {
    // Checking if the database connection is already established.
    // The condition checks if the first element of the connection array exists, indicating that the connection is established.
    if (connection[0]) {
        console.log('Already connected to database')
    }
    try {
        // Establishing a connection to the MongoDB database using the mongoose.connect() method.
        // process.env.MONGODB_URI is an environment variable containing the URI for connecting to the MongoDB database.
        // If the environment variable is not available, an empty string is used.
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
        
        // Logging the database connection object.
        console.log(db)
        
        // Storing the state of the database connection (readyState) in the connection array.
        // db.connections[0].readyState retrieves the readyState of the first connection in the connections array.
        connection[0] = db.connections[0].readyState
        
        // Logging a message indicating that the database connection was successful.
        console.log("DB Connected Successfully");
    }
    catch (error) {
        // Handling errors that occur during the database connection process.
        console.log("Database connection failed", error);
        
        // Exiting the process with a non-zero exit code to indicate an error.
        process.exit(1)
    }

}

// Exporting the dbConnect function to make it accessible to other modules.
export default dbConnect;
