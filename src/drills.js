const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: 'postgresql://hayden@localhost/knex-practice',
})

const queryBySerachTerm = (searchTerm) => {
  return db
    .select('name')
    .from('shopping_list')
    .where({name: searchTerm})
}

const getItemsPagninated = (page) => {
  const productsPerPage = 10
  const offset = productsPerPage * (page - 1)
  return db.select('*')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
}

const getTotalCost = async () => {
  const prices = await db.sum('price')
    .from('shopping_list')
    .groupBy('grocery')
}




