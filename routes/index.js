const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', function(req,res) {
    res.render('form', { title: 'Registration form' })
});

router.post('/', [
    check('name').isLength({ min: 1 }).withMessage('Please enter a name'),
    check('email').isLength({ min: 1 }).withMessage('Please enter an email'),
],function(req,res) {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        console.log(req.body);
        res.render('form', { title: 'Registration form' });
    } else {
         res.render('form', { 
            title: 'Registration form',
            errors: errors.array(),
            data: req.body,
        });
    }
});

module.exports = router;
