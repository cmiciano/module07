import { MongoClient, ObjectId } from "mongodb";
import {} from 'dotenv/config'

const uri = process.env.DB
const client = new MongoClient(uri)

// When updating you have to provide a query that will be update
// Updates a name 
// can also update multiple fields besides the one you are querying for
async function deleteDocument() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        //let query = {name: 'Yuh'}
        // NOTE to add new in front of ObjectId for it to work 
        let query = { _id: new ObjectId('65614999a8bd878a35958062')}
        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .deleteOne(query, (err, res) => {
                if (err) throw err  
                console.log("1 document deleted")
                database.close()
            })
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
deleteDocument()
