const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    xcord: { type: Number, required: true },
    ycord: { type: Number, required: true },
    region: { type: String, required: true },
    wd: { type: Boolean, required: true },
    dw: { type: Boolean, required: true },
    ac: { type: Boolean, required: false },
    pets: { type: Boolean, required: false },
    parking: { type: Boolean, required: false },
    createdDate: { type: Date, default: Date.now }
});

schema.index({ createdDate:1 }, { unique: true });

schema.set('toJSON', { virtuals: true });

module.exports =  {
    Apts: mongoose.model('Apts', schema)
};

