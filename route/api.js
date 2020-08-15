const express = require('express');
const dataController = require('../controller/data');
const router = express.Router();

router.get('/', dataController.getAll, (req, res) => {
  res.status(202).json(res.locals.data);
});

module.exports = router;
