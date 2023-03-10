var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Code = require("../models/Code");

/* Get all code snippets from database */
router.get('/', (req, res, next) => {
    Code.find({}, (err, codes) => {
        if (err) return next(err);
        if (codes) {
            return res.json(codes);
        } else {
            return res.status(404).json({message: "Not found!"});
        }
    });
});

/* Get code snippet by title from database */
router.get('/:title', (req, res, next) => {
    Code.findOne({ title: req.params.title }, (err, code) => {
        if (err) return next(err);
        if (code) {
            return res.json(code);
        } else {
            return res.status(404).json({message: "Not found!"});
        }
    });
});

/* Saves new code snippet to database */
router.post('/post', (req, res, next) => {
    if (req.body.title && req.body.content) {
        Code.findOne({ title: req.body.title }, (err, title) => {
            if(err) return next(err);
            if(!title) {
                new Code({
                    title: req.body.title,
                    content: req.body.content,
                    user: req.body.user
                }).save((err) => {
                    if(err) return next(err);
                    return res.json({message: "ok"});
                });
            } else {
                return res.status(403).json({message: "Already post with that title."});
            }
        });
    } else {
        return res.status(403).json({message: "No title or content"});
    }
});

module.exports = router;
