import { MongoClient} from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB
const client = new MongoClient(uri)

// When updating you have to provide a query that will be update
// Updates a name 
// can also update multiple fields besides the one you are querying for
async function updateDocument() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let query = {name: 'Tokyo'}
        let queryUpdate = { $set: {name: 'Tokyo May', email: 'tm@vectacorp.com'}}
        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .updateOne(query, queryUpdate, (err, res) => {
                if (err) throw err  
                database.close()
            })
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
updateDocument()
