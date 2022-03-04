const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.patch('/:_id',function(req, res, next) {
    Game.findByIdAndUpdate(req.params._id, {
        inProgress: false,
        winner: req.body.winner
    })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

module.exports = router;