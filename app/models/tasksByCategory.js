const { fetch, fetchOne } = require("../Library/database/postgres")


const tasksByCategorySQL = `
    select * from tasks where category_id = $1
`


const tasksByCategory = async ({category_id}) => {
    return await fetch(tasksByCategorySQL, category_id)
}


module.exports.tasksByCategory = tasksByCategory
