const db = require('../models/database');
const { query } = require('express');
const dataObj = {};

dataObj.getAll = (req, res, next) => {
	const queryTest = `SELECT * FROM "public"."webpack" LIMIT 100`;
	db.query(queryTest).then((data) => {
		const obj = {};
		data.rows.forEach((el) => {
			obj[el.name] = {
				npm: el.npm,
				code: el.code,
				description: el.description,
			};
		});

		res.locals.data = obj;
		next();
	});
};

module.exports = dataObj;
