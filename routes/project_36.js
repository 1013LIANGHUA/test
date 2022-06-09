var express = require('express');
var router = express.Router();

const db = require('../utils/database');
/*CREATE*/
router.post('/create', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const text = req.body.text;
    //console.log('id name,author,', id, name, author)
    try {
      const query = {
        text: `INSERT INTO project (id,name,price,text)VALUES($1,$2,$3,$4)`,
        values: [id, name, price, text]
      }
  
      await db.query(query);
      res.redirect('/project');
  
    } catch (err) {
      console.log(err);
    }
  });
/* READ */
router.get('/', async function (req, res) {
  let data;
  try {
    const results = await db.query('SELECT * FROM project');
    data = results.rows;
    console.log('data', JSON.stringify(data));
    // res.json(data);
    res.render('project_36', { data });
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;