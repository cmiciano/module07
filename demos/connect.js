import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// CONNECT TO THE DATABASE
// make sure to load sample data first if you want to see sample_airbnb data


// MODULE 1 TEST
const uri = process.env.DB
const client = new MongoClient(uri)

async function retrieveAll() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let database = client.db('sample_airbnb')
        let result = await database
            .collection('listingsAndReviews')
            .find({})
            .toArray((err, res) => {
                if (err) throw err
                console.log('1 document inserted')
                database.close()
            })
        console.log(result)
        console.log("yuh")
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
retrieveAll()

