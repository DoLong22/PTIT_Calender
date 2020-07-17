const express = require('express');
const controller = require('../../../controllers/user.controller')
const router = express.Router();


router.route('/login')
    .post(controller.postLogin)

module.exports = router