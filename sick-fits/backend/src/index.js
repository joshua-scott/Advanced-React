require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// todo: Use express middleware to handle cookies (JWT)
// todo: Use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running at http://localhost:${deets.port}`);
  }
);
