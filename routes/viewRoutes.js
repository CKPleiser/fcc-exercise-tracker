const express = require('express');
const router = express.Router();
const viewsController = require('./../controller/viewsController');

router.get('/', viewsController.index);


module.exports = router;