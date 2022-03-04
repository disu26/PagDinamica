const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.post('/',function(req, res, next) {
    const game = new Game({
        gamers: req.body.gamers
    });

    game
        .save()
        .then(result => {
            res.json({
                "id": result._id,
                "gamers": [
                    result.gamers[0].name,
                    result.gamers[1].name,
                    result.gamers[2].name
                ]
            })
        })
        .catch(err => res.json(err))
});

module.exports = router;