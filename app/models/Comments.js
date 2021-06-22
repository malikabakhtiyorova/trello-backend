const path = require("path")
const { v4 } = require("uuid")
const { fetch, fetchOne } = require("../Library/database/postgres")

const commentsSql = `
select * from comments limit $1 offset ($2 - 1) * $1;
`
const commentByIdSql = `
    select * from comments where comment_id = $1
`

const createCommentSql = `
insert into comments (task_id, user_id, comment_text) values ($1, $2, $3) returning *
`

const deleteCommentSql = `
    delete
    from
    comments
    where comment_id = $1
    returning *
`

const comments = async ({query}) => {
    let { p: page = null, l: limit = null } = query
    return await fetch(commentsSql, limit, page)
}

const commentById = async ({id}) => {
    console.log(id);
    return await fetchOne(commentByIdSql, id)
}

const createComment = async ({ task_id, user_id, comment_text}) => {
    return await fetchOne(createCommentSql, task_id, user_id, comment_text)
}

const updateComment = async ({ comment_id, column, value }) => {
    return await fetchOne(`update comments set ${column} = $2 where comment_id = $1 returning *`, comment_id, value)
}

const deleteComment = async ({ comment_id }) => {
    return await fetchOne(deleteCommentSql, comment_id)
}

module.exports.comments = comments
module.exports.commentById = commentById
module.exports.createComment = createComment
module.exports.updateComment = updateComment
module.exports.deleteComment = deleteComment
