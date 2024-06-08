import Employee from '../models/employee.js'  // M6 Lecture 4: Defining the models

 
const getAllEmployees = async (req, res) => {

    try {
        const employees = await Employee.find({ })
        res.status(200).json( {employees, count: employees.length } ) //returns in json form
        // res.send('Get all employees')

    } catch (err) {
        res.status(500).json( {msg : err})
    }
}

const getEmployee = async (req, res) => {
    //res.send('Get a single employee')
    let employeeId = null
    try {
        // setting the id property in req.params to employeeId where id was defined in your routes router.route('/:id') 
        // take the id thatas specified in the route, create an alias for it that'll be called employeeId, then use employeeId in findOne
         // cast an alias for id, want the id property to be employeeId
        let {id:employeeId} = req.params
        const employee = await Employee.findOne({ _id: employeeId}) //seems like it fails here and auto goes to the catch when the employees not found       
        res.status(200).json( {employee})
    } catch (err) {
        res.status(404).json( {msg :`No employee with ID ${employeeId} found`})
        //res.status(500).json( {msg : err})

    }
}

const createEmployee = async (req, res) => {

    try {
        const employee = await Employee.create(req.body) // creates a valid employee as long as its valid
        res.status(201).json( { employee })
       // res.status(201).json( {msg: 'Employee added successfully'}) // response.body in postman returns  'Employee added successfully'
        // res.send('Create a new employee') 
    } catch (err) {
        res.status(500).json( {msg: err})
    }
}

const updateEmployee = async (req, res) => {
    try {
        let {id:employeeId} = req.params
        const employee = await Employee.findOneAndUpdate({ _id: employeeId}, req.body, {
            new: true, //update document and return newly updated document back to postman
            runValidators: true //run the validators within the schema
        })

        res.status(200).json( {msg: 'Succesfully updated employee'}) // response.body in postman returns  'Employee added successfully'

    } catch (err) {
        res.status(500).json( {msg: err})


    }
    //res.send('Update an existing employee')
}

const deleteEmployee = async (req, res) => {
       //res.send('Get a single employee')
    let {id:employeeId} = req.params 

    try {
        // setting the id property in req.params to employeeId where id was defined in your routes router.route('/:id') 
        // take the id thatas specified in the route, create an alias for it that'll be called employeeId, then use employeeId in findOne
        // cast an alias for id, want the id property to be employeeId
        const employee = await Employee.findOneAndDelete({ _id: employeeId}) //seems like it fails here and auto goes to the catch when the employees not found       
        res.status(200).json( {msg: 'Employee successfully deleted'})
    } catch (err) {
        res.status(404).json( {msg :`No employee with ID ${employeeId} found`})
        //res.status(500).json( {msg : err})

    }
    
    //res.send('Delete an employee')
}

// because they're individual functions you have to write them out individually
export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}