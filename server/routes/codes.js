var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Code = require("../models/Code");

router.post('/post', (req, res, next) => {
    Code.findOne({ title: req.body.title }, (err, title) => {
        if(err) return next(err);
        if(!title) {
            new Code({
                title: req.body.title,
                content: req.body.content,
                user: req.body.content
            }).save((err) => {
                if(err) return next(err);
                return res.send("ok");
            });
        } else {
            return res.status(403).json({message: "Already post with that title."});
        }
    });
});

module.exports = router;
