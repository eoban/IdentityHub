const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        clientId: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Client', ClientSchema);
