const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.patch('/',function(req, res, next) {
    Game.findByIdAndUpdate(req.body._id, {
        bet: req.body.bet
    })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

module.exports = router;