/**
 * Required External Modules
 */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 5000; // TODO: get port from .env file
const uri = 'mongodb+srv://Dylan:Passw0rd@cluster0-8qfko.gcp.mongodb.net/test?retryWrites=true&w=majority';
/**
 *  App Configuration
 */

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
	res.send('hello world');
  });

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
