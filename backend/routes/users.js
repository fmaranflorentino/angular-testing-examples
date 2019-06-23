const express = require("express");
const router = express.Router();

const USERS = require('./../mocks/db-mock');

router.get('', (req, res, next) => {

    res.status(200).json({
        message: "users fetched successfully!",
        payload: USERS
    });

});

router.get('/:id', (req, res, next) => {
    const id = Number(req.params['id']);
    const user = USERS.filter(user => user.id === id);
    console.log('here', user);

    res.status(200)
        .json({
            message: 'User fetched successfully',
            payload: user
        });

});

module.exports = router;
