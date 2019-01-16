const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    rsid : String,
    chromosome : Number,
    position : Number,
    genotype : String
}, 
{ timestamps: true })

module.exports = mongoose.model('Things', thingSchema);