const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    from: {type: String, required: true},
    to: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    data: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
    owner: {type: mongoose.Types.ObjectId, ref: 'User'}
})
// //mongoose.model.exports=mongoose.model('User',User)


const Link = mongoose.model('Link', schema)
module.exports = Link