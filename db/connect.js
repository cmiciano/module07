import mongoose, { connect } from 'mongoose'


// M6 lecture 2 method 1 mongoose

/*
mongoose.
    connect(process.env.DB)
    .then(() => console.log("Connected to the db"))
    .catch((err) => console.log(err))

*/


// M6 lecture 2 method 2 mongoose await async
const connectDB = (url) => {
    return mongoose.connect(url)
} 

export default connectDB