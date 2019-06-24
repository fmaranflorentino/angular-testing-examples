const express = require("express");
const router = express.Router();

const USERS = require('./../mocks/db-mock');

router.get('', (req, res, next) => {

    const users = Object.values(USERS);

    res.status(200).json({
        message: "users fetched successfully!",
        payload: users
    });

});

router.get('/:id', (req, res, next) => {
    const id = Number(req.params['id']);

    const users = Object.values(USERS);

    const user = users.filter(user => user.id === id);

    res.status(200)
        .json({
            message: 'User fetched successfully',
            payload: user
        });

});

module.exports = router;
