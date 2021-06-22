const { fetch, fetchOne } = require("../Library/database/postgres")

const tasksSql = `
    select * from tasks
`

const taskByIdSql = `
    select * from tasks where task_id = $1
`

const createTaskSql = `
    insert into tasks (category_id, task_text) values ($1, $2) returning *
`

const deleteTaskSql = `
    delete from tasks where task_id = $1 returning *
`

const tasks = async () => {
    return await fetch(tasksSql)
}

const taskById = async ({id}) => {
    return await fetchOne(taskByIdSql, id)
}

const createTask = async ({ category_id, task_text}) => {
    return (
        await fetchOne(createTaskSql,  category_id, task_text)
    )
}


    

const updateTask = async ({ task_id, column, value }) => {
    return await fetchOne(`update tasks set ${column} = $2 where task_id = $1 returning *`, task_id, value)
}

const deleteTask = async ({ task_id }) => {
    return await fetchOne(deleteTaskSql, task_id)
}

module.exports.tasks = tasks
module.exports.taskById = taskById
module.exports.createTask = createTask
module.exports.updateTask = updateTask
module.exports.deleteTask = deleteTask
