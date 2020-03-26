import express from 'express';
import { User } from './user.model';

export const router = express.Router();

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).send('' + err));
});

router.post('/', (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then(users => res.send('User added'))
    .catch(err => res.status(400).send('' + err));
});
