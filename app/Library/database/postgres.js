const { Pool } = require('pg')
const { DATABASE } = require('../../../config/config.js')

const pool = new Pool(DATABASE)

const fetch = async (SQL, ...params) => {

  const client = await pool.connect()

  try {

    const { rows } = await client.query(SQL, params)

    return rows
  } catch(e) {

    console.log(e)

  } finally {
    client.release()
  }
}

const fetchOne = async (SQL, ...params) => {

  const client = await pool.connect()

  try {

    const { rows: [row] } = await client.query(SQL, params)

    return row
  } catch(e) {

    console.log(e)

  } finally {
    client.release()
  }
}

module.exports.fetch = fetch
module.exports.fetchOne = fetchOne
