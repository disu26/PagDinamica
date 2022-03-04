const express = require('express');
const router = express.Router();

const Game = require('../models/game');

router.get('/:_id',function(req, res, next) {
    Game.findOne(req.params._id)
        .then(result => {
            res.json({
                "id": result._id,
                "gamers": [
                    result.gamers[0].id,
                    result.gamers[0].name,
                    result.gamers[1].id,
                    result.gamers[1].name,
                    result.gamers[2].id,
                    result.gamers[2].name
                ],
                "inProgress": result.inProgress,
                "winner": [
                    result.winner.id,
                    result.winner.name
                ]
            })
        })
        .catch(err => res.json(err))
});

module.exports = router;