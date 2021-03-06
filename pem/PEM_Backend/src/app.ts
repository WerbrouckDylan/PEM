import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { router as usersRouter } from "./users";

dotenv.config();

/**
 * App Variables
 */
// TODO: get port from .env file
const port = process.env.PORT || 5000;
const uri = 'mongodb+srv://Dylan:Passw0rd@cluster0-8qfko.gcp.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

/**
 *  App Configuration
 */

app.use(bodyParser.json());

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

app.use('/users', usersRouter);

/**
 * Server Activation
 */
app.listen(port, () =>
  console.log(`server running at ${port}`));
