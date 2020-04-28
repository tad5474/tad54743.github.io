const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    activity: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
