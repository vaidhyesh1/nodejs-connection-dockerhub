var express = require('express');
var mongo = require('../mongo');
var router = express.Router();

router.get('/database', function(req, res, next) {
	var dbList = await mongo.getDatabases();
	res.json(dbList);
});

module.exports = router;
