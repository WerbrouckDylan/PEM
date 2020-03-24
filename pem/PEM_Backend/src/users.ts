import express from 'express';
import { User } from './user.model';

export const router = express.Router();

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).send('Error: ' + err));
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(users => res.json('User added'))
    .catch(err => res.status(500).send('Error: ' + err));
});
