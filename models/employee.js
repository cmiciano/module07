import mongoose from 'mongoose';


// data validation
const EmployeesSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name required']
    },
    extension: {
        type: Number, 
        required: [true, 'Ext required']
    },
    email: {
        type: String, 
        required: [true, 'email required']
    },
    title: {
        type: String, 
        required: [true, 'title required']
    },
    dateHired: {
        type: Date, 
        default: Date.now 
    },
    currentlyEmployed: {
        type: Boolean, 
        default: true
    }

})

// export default EmployeesSchema M6 Lecture 3: Defining the schema
export default mongoose.model('Employee', EmployeesSchema) // M6 Lecture 4: Defining the models