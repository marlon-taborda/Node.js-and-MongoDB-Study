var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET customer list */
router.get('/', async (req, res, next) => {
  const result = await db.find();
  res.render('index', { title: 'Express', result });
});

/* POST save customer form */
router.post('/save', async (req, res) => {
  const customer = req.body;
  const result = await db.insert(customer);
  res.json(result);
});

/* GET customer list */
router.post('/edit', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const result = await db.update(id, name);
  res.render('index', { title: 'Express', result });
});

/* POST remove customer by id */
router.post('/delete', async (req, res) => {
  const id = req.body.id;
  const result = await db.remove(id);
  res.json(result);
});

module.exports = router;
