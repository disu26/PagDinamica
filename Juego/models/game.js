const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gamers: [{
        id: {
            type: String,
            trim: true,
            required: [true, 'se requiere el id del jugador']
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'se necesita el nombre del jugador']
        }
    }],
    inProgress: {
        type:Boolean,
        required: [true, 'se necesita el estado del juego'],
        default: false
    },
    winner: [{
        id: {
            type: String
        },
        name: {
            type: String,
            trim: true,
        }
    }],
    createdAt: {
        type : Date,
        required: true,
        default : Date.now()
    },
    updatedAt: {
        type : Date,
        required: true,
        default : Date.now()
    },
    deletedAt: {
        type : Date,
        required: false
    }
}, {timestamps: true});

module.exports = Game = mongoose.model('Game', gameSchema);