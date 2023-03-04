var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Comment = require("../models/Comment");

/* Get all comments on a single code snippet */
router.get('/:title', (req, res, next) => {
    Comment.find({ title: req.params.title }, (err, comments) => {
        if (err) return next(err);
        if (comments) {
            return res.json(comments);
        } else {
            return res.status(404).json({message: "Not found!"});
        }
    });
});

/* Post new comment */
router.post('/post', (req, res, next) => {
    if (req.body.content) {
        new Comment({
            title: req.body.title,
            content: req.body.content,
            user: req.body.user
        }).save((err) => {
            if(err) return next(err);
            return res.json({message: "ok"});
        });
    } else {
        return res.status(403).json({message: "Empty comment"});
    }
});

module.exports = router;