const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        apiId: {
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

module.exports = mongoose.model('Api', ApiSchema);
