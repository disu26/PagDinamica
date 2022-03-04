const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');

const gameSchema = new Schema({

    gamers: [{
        id: {
            type: String,
            default: uuidv4(),
            unique: true
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'se necesita el nombre del jugador']
        },
        bet: {
            type: Number,
            default: 0
        }
    }],
    inProgress: {
        type:Boolean,
        default: true
    },
    winner: {
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            trim: true,
            default: ''
        }
    },
    createdAt: {
        type : Date,
        required: true,
        default : Date.now()
    },
    updatedAt: {
        type : Date,
        required: true,
        default : Date.now()
    }
}, {timestamps: true});

module.exports = Game = mongoose.model('Game', gameSchema);