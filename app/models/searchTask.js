const { fetch, fetchOne } = require("../Library/database/postgres")

const searchSQL = `
select * from tasks where task_text ilike $1 order by task_id desc
offset ($2 - 1) * $3 FETCH NEXT $3 ROWS ONLY;
`


const search = async (req) => {
    let { p: page = null, l: limit = null } = req.query
    let { s } = req.params
    s ='%' + s + '%';
    return await fetch(searchSQL, s, limit, page)
}



module.exports.search = search