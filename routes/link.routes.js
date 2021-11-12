const {Router} = require('express')
const mongoose = require('mongoose')
const Link = require('../models/Link')
const config = require('config')
const shortId = require('shortid')
const auth = require('../middleware/auth.middleware')
const router = Router()


// const schema = new mongoose.Schema({
//     from: {type: String, required: true},
//     to: {type: String, required: true, unique: true},
//     code: {type: String, required: true, unique: true},
//     data: {type: Date, default: Date.now},
//     clicks: {type: Number, default: 0},
//     owner: {type: mongoose.Types.ObjectId, ref: 'User'}
// })
// //mongoose.model.exports=mongoose.model('User',User)
// const Link = mongoose.model('Link', schema)


router.post('/generate', auth, async (req, res) => {
    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body
        const code = shortId.generate()
        const existing = await Link.findOne({from})
        if (existing) {
            return res.json({link: existing})
        }
        const to = baseUrl + '/t/' + code
        const link = new Link({
            code, to, from, owner: req.user.userId
        })
        await link.save()
        res.status(201).json({link})
    } catch (e) {
        res.status(500).json(e.message)
        //res.status(500).json({message: 'Что-то пошло не так'})
    }
})


router.get('/', auth, async (req, res) => {
    try {
        const links = await Link.find({owner: req.user.userId})
        res.json(links)
    } catch (e) {
        res.status(500).json(e.message)
        //res.status(500).json({message: 'Что-то пошло не так'})
    }
})


router.get('/:id', auth, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (e) {
        //res.status(500).json(e.message)
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router

