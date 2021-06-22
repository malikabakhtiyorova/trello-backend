const { fetch, fetchOne } = require("../Library/database/postgres")

const usersSql = `
    select * from users limit $1 offset ($2 - 1) * $1;
`

const createUserSql = `
    insert into users (user_name, user_password) values ($1, $2) returning *
`

const userByIdSql = `
    select * from users where user_id = $1
`
const usersByTaskIdSql = `
    select * from users where task_id = 1
`

const deleteUserSql = `
    delete from users where user_id = $1 returning *
`

const users = async ({query}) => {
    let { p: page = null, l: limit = null } = query
    return await fetch(usersSql, limit, page)
}
const userById = async ({id}) => {
    return await fetchOne(userByIdSql, id)
}
const usersByTaskId = async ({task_id}) => {
    console.log(task_id);
    return await fetch(usersByTaskIdSql, task_id)
}

const createUser = async ({ user_name, user_password }) => {
    return await fetchOne(createUserSql, user_name, user_password)
}

const updateUser = async ({ user_id, column, value }) => {
    return await fetchOne(`update users set ${column} = $2 where user_id = $1 returning *`, user_id, value)
}

const deleteUser = async ({ user_id }) => {
    return await fetchOne(deleteUserSql, Number(user_id))
}

module.exports.users = users
module.exports.usersByTaskId = usersByTaskId
module.exports.userById = userById
module.exports.createUser = createUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser