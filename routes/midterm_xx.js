var express = require('express');
var router = express.Router();
// s
/* GET home page. */
router.get('/overview_xx', function(req, res, next){
  res.render('midterm_xx/overview_xx', {
    title: 'Express',
    name: 'Hsingtai Chung',
    id: `123456789`,
  });
});

module.exports = router;
