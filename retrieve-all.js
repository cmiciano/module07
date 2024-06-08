import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// CONNECT TO THE DATABASE
// make sure to load sample data first if you want to see sample_airbnb data


// M5 Lecture 3: Retrieving all documents
const uri = process.env.DB
const client = new MongoClient(uri)

async function retrieveAll() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .find({})
            .toArray((err, res) => {
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
retrieveAll()

