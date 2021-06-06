var express = require('express');
var countModel = require('../countSchemaModel');
var router = express.Router();

router.get('/', async(req, res, next) => {
	var name = req.query.name;
	var countVar = req.query.count
	var count = countModel({name:name, count:countVar});
	count.save(count, (err, res)=> {
		if (err) return console.error(err);
		console.log(res.name + " saved to count collection.");
	})
});

module.exports = router;
