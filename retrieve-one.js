

import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// CONNECT TO THE DATABASE
// make sure to load sample data first if you want to see sample_airbnb data


// M5 Lecture 3: Retrieving all documents
const uri = process.env.DB
const client = new MongoClient(uri)

/*
async function retrieveOne() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .findOne({}, (err, res) => {
                if (err) throw err
                console.log(res)
                database.close()
            })
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}
retrieveOne()
*/



// QUERY
// if query doesn't exist, will return empty brackets []

async function findQuery() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')

        let query = {name: 'Tokyo 1'}
        let database = client.db('vectacorp')
        let result = await database
            .collection('employees')
            .find(query)
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
findQuery()
