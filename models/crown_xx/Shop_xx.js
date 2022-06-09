const db = require('../../utils/database');

const Shop_xx = class Shop_xx {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;

  }

  // CREATE
  static async create(body) {
     const {id, name, cat_id, price, remote_url, local_url} = body;
     const query = {
      text: `INSERT INTO shop_xx (id, name, cat_id, price, remote_url, local_url) VALUES ($1, $2, $3, $4, $5, $6)`,
      values: [id, name, cat_id, price, remote_url, local_url]
    }
     return db.query(query);
  }

  // READ: get all categories
  static async fetchAll() {
    try {
      const results = await db.query(`SELECT * from shop_xx`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchByCatId(id){
    const query = {
      text: `select * from shop_xx where cat_id = $1;`,
      values: [id]
    }
    try {
       const results = await db.query(query);
       return results.rows;
    }catch(err){
      console.log(err);
    }
  }


  // UPDATE
  static async updateById(body) {
    const {id, name, cat_id, price, remote_url, local_url} = body;
    const query = {
      text: `UPDATE shop_xx SET name = $1, cat_id = $2, price = $3, remote_url = $4, local_url = $5 WHERE id = $6 `,
      values: [name, cat_id, price, remote_url, local_url, id]
    }
    return await db.query(query);
 }


  // DELETE
  static async deleteById(id) {
    const query = {
      text: `DELETE FROM shop_xx WHERE id = $1;`,
      values: [id]
    }
    return await db.query(query);
  }

};

// const test = async () => {
//   let results = await Category_xx.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Shop_xx;
