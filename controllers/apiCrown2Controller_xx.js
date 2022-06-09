const serviceCrown2Controller_xx = require('./crown_xx/serviceCrown2Controller_xx');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_xx.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_xx.getShop();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
     const data = await serviceCrown2Controller_xx.getProductsByCategory(req.params.category);
    //  console.log('getProductsByCategory', JSON.stringify(data));
     return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}