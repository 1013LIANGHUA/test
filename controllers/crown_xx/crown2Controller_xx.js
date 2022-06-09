const serviceCrown2Controller_xx = require('./serviceCrown2Controller_xx');

/* CREATE*/
exports.createProducts = async (req, res) => {
  console.log('body', req.body);
  //res.json('create body received')

  try {
    let results = await serviceCrown2Controller_xx.create(req.body);
    console.log('results', JSON.stringify(results));
    res.json('data: {msg: creating successful}');
  } catch (err){

  }

}

/* READ */

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_xx.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_xx/crown2_xx', {
      data: results,
      title: 'Crown2_xx',
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_xx.getShop();
    res.render('crown_xx/products_xx', {
      data,
      title: 'All Products',
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
     const data = await serviceCrown2Controller_xx.getProductsByCategory(req.params.category);
     console.log('getProductsByCategory', JSON.stringify(data));
    res.render('crown_xx/products_xx', {
      data,
      title: req.params.category,
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}


/* UPDATE */
exports.updateProducts = async (req, res) => {
  console.log('body', req.body);
  //res.json('create body received')

  try {
    let results = await serviceCrown2Controller_xx.update(req.body);
    console.log('results', JSON.stringify(results));
    res.json('data: {msg: updating successful}');
  } catch (err){

  }

}

/* DELETE */

exports.deleteProduct = async (req, res) => {
  console.log('deleteProduct', req.params.id );
  try {
    await serviceCrown2Controller_xx.deleteById(req.params.id);
    res.redirect('/crown2_xx');

  } catch (err) {
    console.log(err);
  }
}