const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.get('/:_id/winner',function(req, res, next) {
    Game.findOne(req.params._id)
        .then(result =>  res.json(result))
        .catch(err => res.json(err));
});

module.exports = router;