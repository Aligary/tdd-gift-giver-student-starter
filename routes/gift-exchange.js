const express = require("express")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")

router.post("/pairs", async(req, res, next) => {
    try{
        const pair = await GiftExchange.pairs(req.body.names)
        res.status(200).json(pair)
    }catch(err){
        next(err)
    }
})

router.post("/traditional", async(req, res, next) => {
    try{
        const trad = await GiftExchange.traditional(req.body.names)
        res.status(200).json(trad)
    }catch(err){
        next(err)
    }
})


module.exports = router