const { fetch, fetchOne } = require("../Library/database/postgres")


const commentsByTaskSQL = `
    select * from comments where task_id = $1
`


const commentsByTask = async ({task_id}) => {
    return await fetch(commentsByTaskSQL, task_id)
}


module.exports.commentsByTask = commentsByTask
