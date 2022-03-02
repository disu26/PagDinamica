const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.post('/',function(req, res, next) {
    const game = new Game({
        gamers: req.body.gamers
    });

    game
        .save()
        .then(result => res.json(result))
        .catch(err => res.json(err))
});