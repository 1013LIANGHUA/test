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
    res.redirect('/books_36');

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
    res.render('books', { data });
  } catch (err) {
    // console.log('Errors on getting books!');
    res.render('books', { data: '' });
  }
});

router.get('/create', async (req, res) => {
  try {
    res.render('books/add_36');
  } catch (err) {
    console.log(err);
  }

});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;
  console.log('id', id);
  try {
    const query = {
      text: `SELECT * FROM project WHERE id=$1;`,
      values: [id]
    }
    const results = await db.query(query);
    data = results.rows;
    res.render('books/edit_36', {
      id: data[0].id,
      name: data[0].name,
      price: data[0].price,
      text: data[0].text
    })
  } catch (err) {
    console.log(err);
  }
})

/*UPDATE*/
router.post('/update', async (req, res) => {
  try {
    const query = {
      text: `UPDATE project SET name =$1, price =$2, text=$3 WHERE id=$4;`,
      values: [req.body.name, req.body.price, req.body.text, req.body.id]
    }
    await db.query(query);
    res.redirect('/books_36')
  } catch (err) {
    console.log(err);

  }
})

/* DELETE */
router.get('/delete/:id', async (req, res) => {
  try {
    console.log('id', req.params.id);
    const query = {
      text: `DELETE FROM project WHERE id = $1;`,
      values: [req.params.id]
    }
    const results = await db.query(query);
    res.redirect('/books_36');
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;