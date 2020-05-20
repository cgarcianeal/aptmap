const express = require('express');
const router = express.Router();
const aptController = require('../controllers/apt.controller');

router.post('/addapt', aptController.createApt);
router.get('/getapts', aptController.getApts);


module.exports = router;
