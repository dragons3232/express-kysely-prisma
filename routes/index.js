var express = require('express');
var router = express.Router();
const db = require('../src/kysely/database').db;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', async function (req, res, next) {
  const record = await db.insertInto('SmsCode')
    .values({
      phone: '123456789' + Math.floor(Math.random()*100),
      code: '1234',
      expiredAt: new Date(),
    })
    .executeTakeFirst();

  res.json({ success: record });
});

module.exports = router;
