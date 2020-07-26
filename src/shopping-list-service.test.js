const seedData = require('seed-mock-data');
let db

beforeAll('make knex instance', () => {
  db = knex({
    client: 'pg',
    connection: process.env.TEST_DB_URL,
  })
})

describe(`shopping-list service get method`, () => {
  beforeEach(() => {
    seedData(db)
  })

  afterEach(() => {
    db('shopping_list').truncate()
  })

  it('should return an empty array when db is empty', async () => {
    db.truncate()
    result = await sls.addItem()

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(0)
  })

  it('should add a row', async () => {
    result = await sls.addItem()
  })
})

after('disconnect from db', () => db.destroy())

before('clean the table', () => db('bookmarks').truncate())

afterEach('cleanup',() => db('bookmarks').truncate())
