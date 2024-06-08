import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

const uri = process.env.DB
const client = new MongoClient(uri)

// M5 Lecture 2: Inserting documents
async function insertEmp() {
    try {
        await client.connect(uri)
        console.log('Connected to database...')


        let employee = {
            name: 'Yuh',
            extension: 1115,
            email: 'y@vectacorp.com',
            title: 'Administrative Assistant',
            dateHired: Date.now(),
            currentlyEmployed: true
        }
        console.log(employee)
        
        let database = client.db('vectacorp') //accesses vectacorp database and adds to employee
        let result = await database
            .collection('employees')
            .insertOne(employee, (err, res) => {
                if (err) throw err
                console.log('1 document inserted')
                database.close()
            })
        console.log(result)
        console.log("Inserted one employee into database")
        
    } catch (err) {
        console.log(err)
    } finally {
        await client.close()
    }
}

insertEmp()






