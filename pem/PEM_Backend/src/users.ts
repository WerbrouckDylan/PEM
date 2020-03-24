import express from 'express';

const router = express.Router();
let User = require('./user.model');

router.route('/').get((req, res) => {
  //res.send('hello users');
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  //res.send('hello add users');
  const username = req.body.username;
  const newUser = new User({ username });
  newUser
    .save()
    .then(users => res.json('User added'))
    .catch(err => res.status(400).send('Error: ' + err));
});

module.exports = router;
