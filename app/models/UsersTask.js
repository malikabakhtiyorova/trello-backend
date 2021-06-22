const { fetch, fetchOne } = require("../Library/database/postgres")


const usersByTaskIdSql = `
    select * from users where task_id = $1
`


const usersByTaskId = async ({task_id}) => {
    console.log(task_id);
    return await fetch(usersByTaskIdSql, task_id)
}


module.exports.usersByTaskId = usersByTaskId
