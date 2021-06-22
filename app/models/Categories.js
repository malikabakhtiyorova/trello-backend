const path = require("path")
const fs = require("fs")
const { v4 } = require("uuid")
const { fetch, fetchOne } = require("../Library/database/postgres")


const categoriesSql = `
    select * from categories
`
const categoryByIdSql = `
    select * from categories where category_id = $1
`

const createCategorySql = `
insert into categories (category_title) values ($1) returning *
`

const deleteCategorySql = `
    delete from categories where category_id = $1 returning *
`

const categories = async () => {
    return await fetch(categoriesSql)
}

const categoryById = async ({id}) => {
    console.log(id);
    return await fetchOne(categoryByIdSql, id)
}

const createCategory = async ({ body }) => {

    const { category_title} = body
 
    return (
        await fetchOne(createCategorySql, category_title)
    )
}

const updateCategory = async ({ body }) => {

        const { category_id, column, value } = body
        return await fetchOne(`update categories set ${column} = $2 where category_id = $1 returning *`, category_id, value)
}

const deleteCategory = async ({ category_id }) => {

    return await fetchOne(deleteCategorySql, category_id)
}

module.exports.categories = categories
module.exports.categoryById = categoryById
module.exports.createCategory = createCategory
module.exports.updateCategory = updateCategory
module.exports.deleteCategory = deleteCategory