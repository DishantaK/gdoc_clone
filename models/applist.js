const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applistSchema = new Schema({

    item: {
        type: String,
        unique: true,
        required: [true, 'Enter item']
    },

    content: {
        type: String,
        unique: true,
    }

    // completed: {
    //     type: Boolean,
    //     default: false
    // }
});

// This creates schema using Mongoose model method
let applist = mongoose.model('applist', applistSchema);

module.exports = applist;