var express = require('express');
var countModel = require('../models/countSchemaModel');
var router = express.Router();

router.get('/', async(req, res, next) => {
	var name = req.query.name;
	var countVar = req.query.count
	var count = countModel({name:name, count:countVar});
	count.save(count, (err, response)=> {
		if (err) {
			res.json({message:`Error while saving to collection`});
		};
		console.log(response.name + " saved to count collection.");
		res.json({message:`${response.name} saved successfully`});
	})
});

module.exports = router;
