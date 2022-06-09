const db = require('../../utils/database');

const Category_xx = class Category_xx {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  // get all categories
  static async fetchAll() {
    try {
      const results = await db.query(`SELECT * from category_xx`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchCatIdByName(name) {
    try{
      const results = await db.query(`select id from category_xx where name = $1`, [name]);
      return results.rows[0].id;
    }catch(err){
      console.log(err);
    }

  }
};

// const test = async () => {
//   let results = await Category_xx.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Category_xx;
